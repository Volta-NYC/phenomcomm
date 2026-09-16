import Image from "next/image";

export default function GrowthSculpture() {
  return (
    <figure
      className="sculpture"
      aria-label="Three interlocking rings surrounding a pearl, representing connected drivers of growth."
    >
      <Image
        src="/images/upgrade-framework-rings.png"
        alt=""
        width={1280}
        height={1280}
        sizes="(max-width: 760px) 84vw, 520px"
      />
      <figcaption className="sculpture-caption">
        Individual growth.
        <br />
        <strong>Collective performance.</strong>
      </figcaption>
    </figure>
  );
}
