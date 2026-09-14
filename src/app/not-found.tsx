import { Button, Eyebrow } from "@/lib/components/ui";
export default function NotFound() {
  return (
    <section className="not-found">
      <Eyebrow>A different path</Eyebrow>
      <h1>
        Let’s get you
        <br />
        <em>back on track.</em>
      </h1>
      <p>We couldn’t find that page. Your next step is still here.</p>
      <Button href="/">Return home</Button>
    </section>
  );
}
