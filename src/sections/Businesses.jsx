import { Arrow, Check, Eyebrow, ExtArrow, Icon, Reveal } from "../components/common";
import { ExportPanelArt, MarketPanelArt } from "../components/Illustrations";
import { journeys } from "../data";

const exportPoints = [
    "Supplier screening, negotiation and samples",
    "Pre-dispatch inspection of every order",
    "Export documents and shipment to your port",
    "One named contact from enquiry to delivery",
];
const marketPoints = [
    "For manufacturers, brand owners, distributors, traders and exporters",
    "Listing a product is free; fees apply only when an order is generated",
    "Advance payments are held until delivery",
    "Run by the same registered company",
];

export function Businesses() {
    return (
        <section id="businesses" className="sec">
            <div className="wrap">
                <Reveal className="head">
                    <Eyebrow>Two businesses, one company</Eyebrow>
                    <h2 className="h2">Two ways to trade with India. One accountable team.</h2>
                    <p className="lead">Use the export business when you want us to run the purchase for you. Use the marketplace when you want to browse, quote and trade directly. Both draw on the same products.</p>
                </Reveal>

                <div className="panels">
                    <Reveal className="panel panel-export" id="export-panel">
                        <ExportPanelArt />
                        <div className="panel-body">
                            <div className="panel-tag" style={{ color: "#C5E0E6" }}>Business 1</div>
                            <h3 className="hd panel-title">BBM Export</h3>
                            <p className="panel-lead">A managed purchase from India. Tell us what you need and we run the whole chain: find the manufacturer, agree terms, check the goods and ship them.</p>
                            <ul className="ticks">
                                {exportPoints.map((t) => (
                                    <li key={t}><span className="tick tick-accent"><Check /></span>{t}</li>
                                ))}
                            </ul>
                            <div className="grow" />
                            <div className="best"><strong>Best for:</strong> importers who want a managed, end-to-end purchase.</div>
                            <a className="btn btn-accent btn-lg self-start" href="#enquiry">Send an export enquiry <Arrow /></a>
                        </div>
                    </Reveal>

                    <Reveal className="panel panel-market" id="marketplace-panel" delay={0.12}>
                        <MarketPanelArt />
                        <div className="panel-body">
                            <div className="panel-tag" style={{ color: "#B93A20" }}>Business 2</div>
                            <h3 className="hd panel-title">BBM Marketplace</h3>
                            <p className="panel-lead">bbm.business is our online B2B marketplace for registered businesses. Browse products, request quotes, and buy or sell directly.</p>
                            <ul className="ticks">
                                {marketPoints.map((t) => (
                                    <li key={t}><span className="tick tick-teal"><Check /></span>{t}</li>
                                ))}
                            </ul>
                            <div className="grow" />
                            <div className="best"><strong>Best for:</strong> buyers who like to browse, and sellers who want reach.</div>
                            <div className="btn-row tight">
                                <a className="btn btn-teal btn-lg" href="https://www.bbm.business" target="_blank" rel="noopener">Visit the Marketplace <Arrow /></a>
                                <a className="hd tl link-teal" href="https://www.bbm.business/pricing" target="_blank" rel="noopener">Pricing &amp; fees</a>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

export function Connect() {
    return (
        <section id="connect" className="sec bg-soft">
            <div className="wrap">
                <Reveal className="head">
                    <Eyebrow>Connected by products</Eyebrow>
                    <h2 className="h2">Every product can travel either way.</h2>
                    <p className="lead">The marketplace shows the product. The export business delivers it. Start at either door and cross to the other whenever you need.</p>
                </Reveal>

                <div className="diagram">
                    <Reveal className="node node-market">
                        <div className="node-tag" style={{ color: "#006F85" }}>Marketplace</div>
                        <div className="hd node-title">See it. Compare it.</div>
                        <div className="node-text">Products listed by verified businesses on bbm.business.</div>
                    </Reveal>
                    <svg className="conn-arrow" width="48" height="24" viewBox="0 0 48 24" fill="none" stroke="#D2462B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 8h38M34 2l8 6-8 6" /><path d="M44 18H6M14 12l-8 6 8 6" />
                    </svg>
                    <Reveal className="node-mid" delay={0.1}>
                        <span className="node-ball">
                            <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M21 16V8a2 2 0 00-1-1.7l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.7l7 4a2 2 0 002 0l7-4a2 2 0 001-1.7z M3.3 7L12 12l8.7-5 M12 22V12" />
                            </svg>
                        </span>
                        <div className="hd node-title">The product</div>
                        <div className="node-text sm">One product, two ways to buy it</div>
                    </Reveal>
                    <svg className="conn-arrow" width="48" height="24" viewBox="0 0 48 24" fill="none" stroke="#D2462B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 8h38M34 2l8 6-8 6" /><path d="M44 18H6M14 12l-8 6 8 6" />
                    </svg>
                    <Reveal className="node node-export" delay={0.2}>
                        <div className="node-tag" style={{ color: "#C5E0E6" }}>Export</div>
                        <div className="hd node-title">Source it. Ship it.</div>
                        <div className="node-text">Our team checks the goods and delivers them to your port.</div>
                    </Reveal>
                </div>

                <div className="grid g-260">
                    {journeys.map((j, i) => (
                        <Reveal key={j.n} className="journey" delay={i * 0.08}>
                            <div className="hd num">{j.n}</div>
                            <div className="mini-tag">{j.who}</div>
                            <h3 className="hd journey-title">{j.title}</h3>
                            <p className="journey-body">{j.body}</p>
                        </Reveal>
                    ))}
                </div>

                <div className="btn-row mt36">
                    <a className="btn btn-teal btn-lg" href="https://www.bbm.business" target="_blank" rel="noopener">Start on the Marketplace <Arrow /></a>
                    <a className="btn btn-accent btn-lg" href="#enquiry">Start with an export enquiry <Arrow /></a>
                </div>
            </div>
        </section>
    );
}