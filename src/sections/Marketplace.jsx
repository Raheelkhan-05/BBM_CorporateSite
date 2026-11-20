import { Arrow, Eyebrow, ExtArrow, Icon, Reveal } from "../components/common";
import { MarketMock, CategoryArt } from "../components/Illustrations";
import { mkt, CAT_URL } from "../data";

export function Marketplace() {
    return (
        <section id="marketplace" className="sec">
            <div className="wrap split">
                <Reveal className="split-a">
                    <Eyebrow>BBM Marketplace · bbm.business</Eyebrow>
                    <h2 className="h2">Browse, quote, buy and sell, business to business.</h2>
                    <p className="lead">The marketplace is where registered businesses meet. Sellers list products, buyers compare and request quotes, and orders are placed on the platform.</p>
                    <div className="chips">
                        {["Manufacturers", "Brand owners", "Distributors", "Traders", "Exporters"].map((c) => (
                            <span key={c} className="chip chip-blush">{c}</span>
                        ))}
                    </div>
                    <div className="feat-list">
                        {mkt.map((m) => (
                            <div key={m.title} className="feat">
                                <span className="feat-ico"><Icon d={m.icon} /></span>
                                <span>
                                    <span className="hd feat-t">{m.title}</span>
                                    <span className="feat-b">{m.body}</span>
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="btn-row mt34">
                        <a className="btn btn-accent btn-lg" href="https://www.bbm.business" target="_blank" rel="noopener">Visit the Marketplace <Arrow size={20} /></a>
                        <a className="btn btn-outline" href="https://www.bbm.business/pricing" target="_blank" rel="noopener">Pricing &amp; fees</a>
                    </div>
                </Reveal>
                <Reveal className="split-b" delay={0.12}>
                    <MarketMock />
                    <p className="caption">Illustrative screen. Visit bbm.business to see live listings.</p>
                </Reveal>
            </div>
        </section>
    );
}

const cats = [
    { key: "automotive", title: "Automotive & Engineering", desc: "Components, tools and mechanical goods for production, repair and assembly." },
    { key: "packaging", title: "Packaging Materials", desc: "Protective, compliant packaging for storage, handling and transport." },
    { key: "food", title: "Food & Agriculture", desc: "Supplies from farm-level inputs to industrial food manufacturing." },
    { key: "chemicals", title: "Chemicals & Plastics", desc: "Chemical products, raw materials and plastic-based solutions." },
    { key: "fmcg", title: "Consumer & FMCG", desc: "Fast-moving consumer goods and everyday essentials." },
    { key: "industrial", title: "Industrial Supplies", desc: "Tools, hardware and machinery essentials for industry and construction." },
];

export function Categories() {
    return (
        <section id="categories" className="sec bg-blush">
            <div className="wrap">
                <Reveal className="head">
                    <Eyebrow>Product categories</Eyebrow>
                    <h2 className="h2">The same six categories run through both businesses.</h2>
                    <p className="lead">Open a category on the Marketplace to see listed products, or ask our export team to source and ship from that category for you.</p>
                </Reveal>

                <div className="grid g-320">
                    {cats.map((c, i) => {
                        const Art = CategoryArt[c.key];
                        return (
                            <Reveal key={c.key} className="card lift" delay={(i % 3) * 0.08}>
                                <Art />
                                <div className="card-body">
                                    <h3 className="hd card-t">{c.title}</h3>
                                    <p className="card-d">{c.desc}</p>
                                    <div className="card-links">
                                        <a className="hd tl link-teal" href={CAT_URL[c.key]} target="_blank" rel="noopener">View on Marketplace <ExtArrow /></a>
                                        <a className="hd tl link-accent" href="#enquiry">Export enquiry</a>
                                    </div>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>

                <Reveal className="dashed">
                    <div>
                        <h3 className="hd card-t">Can't find your product?</h3>
                        <p className="card-d">What is listed is a starting point, not a limit. Send us a sourcing request and our export team will find suitable manufacturers for you.</p>
                    </div>
                    <a className="btn btn-outline" href="#enquiry">Send a sourcing request <Arrow /></a>
                </Reveal>
            </div>
        </section>
    );
}