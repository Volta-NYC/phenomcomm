import GrowthSculpture from "./growth-sculpture";
import { Eyebrow, Button } from "./ui";
import { pillars } from "@/lib/site";

export default function Framework() {
  return <section className="framework-section" id="framework"><div className="container framework-grid"><div className="framework-visual" data-reveal><Eyebrow light>The Upgrade Framework™</Eyebrow><h2>Real growth.<br /><em>By design.</em></h2><p>Three connected drivers.<br />One meaningful shift in performance.</p><GrowthSculpture /></div><div className="framework-content" data-reveal><p className="framework-intro">Your people already know better.<br />Let’s help them <strong>do better.</strong></p>{pillars.map((pillar, index) => <div className="pillar" key={pillar.name}><span className={`pillar-number ${pillar.color}`}>{index + 1}</span><div><h3>{pillar.name}<sup>™</sup></h3><p className="pillar-topic">{pillar.topic}</p><p>{pillar.description}</p></div></div>)}<div className="framework-result"><span>Thinking + Skills + Environment</span><strong>= Upgrade Performance™</strong></div><Button href="/how-we-help#framework" variant="text">Explore our approach</Button></div></div></section>;
}
