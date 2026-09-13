"""Inventory the supplied crawl without fetching assets or changing source files.

Run: python3 scripts/ingest_sources.py
Outputs are reproducible and keep source provenance for later site implementation.
"""

from pathlib import Path
from urllib.parse import urlsplit, unquote
import hashlib
import json
import re

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "raw messy data"
OUTPUT = ROOT / "content" / "generated"
MEDIA = re.compile(
    r"https?://(?:(?!https?://)[^\s<>\"()])+?\.(?:jpg|jpeg|png|webp|gif|svg|avif|pdf|mp4|webm|woff2?)(?:\?[^\s\"<>)]*)?",
    re.IGNORECASE,
)


def write_json(name, value):
    (OUTPUT / name).write_text(json.dumps(value, indent=2, ensure_ascii=False) + "\n")


def main():
    OUTPUT.mkdir(parents=True, exist_ok=True)
    documents = []
    assets = {}
    links = {}
    for file in sorted(SOURCE.rglob("*.md")):
        original = file.read_text()
        text = re.sub(r"\\([_&])", r"\1", original)
        source_url = re.search(r'^url: "([^"]+)"', text, re.MULTILINE)
        title = re.search(r'^title: (.+)$', text, re.MULTILINE)
        url = source_url.group(1) if source_url else None
        path = urlsplit(url).path if url else ""
        kind = (
            "retailer" if url and "amazon.com" in urlsplit(url).netloc else
            "sitemap" if path.endswith(".xml") else
            "document" if path.endswith(".pdf") else
            "page" if path.count("/") <= 2 else "attachment"
        )
        body = re.sub(r"\A---\n.*?\n---\n", "", text, count=1, flags=re.DOTALL).strip()
        found_media = sorted(set(MEDIA.findall(text)))
        reference = str(file.relative_to(ROOT))
        documents.append({
            "file": reference,
            "sha256": hashlib.sha256(original.encode()).hexdigest(),
            "url": url,
            "title": title.group(1).strip('"') if title else None,
            "kind": kind,
            "bytes": len(original.encode()),
            "headings": re.findall(r"^#{1,6} (.+)$", body, re.MULTILINE),
            "body": body,
            "media": found_media,
        })
        for media_url in found_media:
            host = urlsplit(media_url).netloc
            name = unquote(Path(urlsplit(media_url).path).name)
            family = re.sub(r"-\d+x\d+(?=\.[^.]+$)", "", name)
            family = re.sub(r"-scaled(?=\.[^.]+$)", "", family)
            if media_url not in assets:
                assets[media_url] = {
                    "url": media_url, "filename": name, "family": family,
                    "businessHosted": host in ("www.phenomcomm.com", "phenomcomm.com"),
                    "sources": [], "downloadStatus": "pending",
                }
            assets[media_url]["sources"].append(reference)
        for destination in re.findall(r"\]\(([^\s)]+)", text):
            links.setdefault(destination, []).append(reference)
    media = sorted(assets.values(), key=lambda item: item["url"])
    summary = {
        "files": len(documents),
        "totalSourceBytes": sum(document["bytes"] for document in documents),
        "kinds": {kind: sum(d["kind"] == kind for d in documents)
                  for kind in sorted({d["kind"] for d in documents})},
        "uniqueMediaUrls": len(media),
        "businessMediaUrls": sum(asset["businessHosted"] for asset in media),
        "businessMediaFamilies": len({asset["family"] for asset in media if asset["businessHosted"]}),
        "note": "URL/family deduplication only. Content hashes and media optimization follow download. Retailer UI, ads, recommendations, tracking pixels and unrelated products are excluded from the planned site.",
    }
    write_json("source-documents.json", documents)
    write_json("media-manifest.json", media)
    write_json("source-links.json", links)
    write_json("inventory.json", summary)
    print(json.dumps(summary, indent=2))


if __name__ == "__main__":
    main()
