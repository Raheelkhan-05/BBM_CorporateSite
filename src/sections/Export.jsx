import { Arrow, Check, Eyebrow, Icon, Reveal } from "../components/common";
import { WorldMap } from "../components/Illustrations";
import { caps, steps, needs } from "../data";

export function ExportSection() {
    return (
        <section id="export" className="sec">
            <div className="wrap">
                <Reveal className="head">
                    <Eyebrow>BBM Export</Eyebrow>
                    <h2 className="h2">Six ways our export team takes work off your plate.</h2>
                    <p className="lead">Whether the product came from the Marketplace or from your own brief, the export team takes it from requirement to port.</p>
                </Reveal>
                <div className="grid g-320">
                    {caps.map((c, i) => (
                        <Reveal key={c.title} className="cap lift" delay={(i % 3) * 0.08}>
                            <span className="cap-ico"><Icon d={c.icon} size={24} /></span>
                            <h3 className="hd card-t">{c.title}</h3>
                            <p className="card-d">{c.desc}</p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function Reach() {
    return (
        <section id="reach" className="sec bg-soft">
            <div className="wrap split">
                <Reveal className="split-a">
                    <Eyebrow>Global reach</Eyebrow>
                    <h2 className="h2">Enquiries welcome from every region.</h2>
                    <p className="lead">From Rajkot we coordinate sourcing, inspection and shipment for buyers around the world. Tell us your destination and we will plan the route with you.</p>
                    <div className="chips">
                        {["Europe", "Middle East & Africa", "Americas", "Asia-Pacific", "Oceania"].map((c) => (
                            <span key={c} className="chip chip-teal">{c}</span>
                        ))}
                    </div>
                    <a className="btn btn-accent btn-lg mt32" href="#enquiry">Tell us your destination <Arrow /></a>
                </Reveal>
                <Reveal className="split-b" delay={0.12}>
                    <WorldMap />
                    <p className="caption">Illustrative map. It shows the regions we welcome enquiries from, not a list of past shipments.</p>
                </Reveal>
            </div>
        </section>
    );
}

export function Process() {
    return (
        <section id="process" className="sec">
            <div className="wrap">
                <Reveal className="head">
                    <Eyebrow>For overseas buyers</Eyebrow>
                    <h2 className="h2">From first enquiry to your port, in five clear stages.</h2>
                    <p className="lead">No surprises. At each stage you know what we are doing, what we need from you and what comes next.</p>
                </Reveal>
                <div className="grid g-220 steps">
                    {steps.map((s, i) => (
                        <Reveal key={s.n} className="step" delay={i * 0.07}>
                            <div className="hd num">{s.n}</div>
                            <h3 className="hd step-t">{s.title}</h3>
                            <p className="step-d">{s.desc}</p>
                        </Reveal>
                    ))}
                </div>
                <Reveal className="needs">
                    <div className="needs-a">
                        <h3 className="hd card-t">To get a quote quickly, tell us:</h3>
                        <p className="card-d sm">The more you share, the faster and sharper our first reply.</p>
                    </div>
                    <ul className="needs-list">
                        {needs.map((n) => (
                            <li key={n}>
                                <span style={{ color: "#006F85", display: "flex" }}><Check size={18} sw={2.6} /></span>
                                {n}
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </div>
        </section>
    );
}