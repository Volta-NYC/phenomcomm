"""Localize the business asset library, retaining provenance and content hashes."""
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
import hashlib
import json
import subprocess

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "content" / "generated"
DEST = ROOT / "assets" / "source-media"
DEST.mkdir(parents=True, exist_ok=True)
assets = json.loads((OUT / "media-manifest.json").read_text())
business_assets = [a for a in assets if a["businessHosted"]]
supplemental = [
    "2025-logo-long-website.jpg",
    "cropped-2025-logo-white-on-clear-1-192x192.png",
    "cropped-2025-logo-white-on-clear-1-180x180.png",
]
for name in supplemental:
    business_assets.append({"url": "https://www.phenomcomm.com/wp-content/uploads/2025/02/" + name,
                           "filename": name, "family": name, "businessHosted": True,
                           "sources": ["Original homepage HTML, brand asset discovery"]})


def download(asset):
    target = DEST / asset["filename"]
    if not target.exists():
        result = subprocess.run(["curl", "-sSL", "--fail", "--retry", "2", "--max-time", "40",
                                 asset["url"], "-o", str(target)], capture_output=True)
        if result.returncode:
            target.unlink(missing_ok=True)
            return {**asset, "downloadStatus": "failed", "error": result.stderr.decode().strip()}
    payload = target.read_bytes()
    return {**asset, "downloadStatus": "downloaded", "localPath": "assets/source-media/" + target.name,
            "bytes": len(payload), "sha256": hashlib.sha256(payload).hexdigest()}


with ThreadPoolExecutor(max_workers=6) as pool:
    results = list(pool.map(download, business_assets))
# Identical bytes share one authoritative local file.
hashes = {}
for result in results:
    if result["downloadStatus"] != "downloaded":
        continue
    digest = result["sha256"]
    if digest in hashes:
        duplicate = ROOT / result["localPath"]
        if result["localPath"] != hashes[digest]:
            duplicate.unlink(missing_ok=True)
        result["localPath"] = hashes[digest]
    else:
        hashes[digest] = result["localPath"]
(OUT / "downloaded-media.json").write_text(json.dumps(results, indent=2) + "\n")
print(json.dumps({"downloaded": len([r for r in results if r["downloadStatus"] == "downloaded"]),
                  "uniqueFiles": len(hashes),
                  "failed": [r["url"] for r in results if r["downloadStatus"] == "failed"]}, indent=2))
