import { Arrow, Check, Eyebrow, ExtArrow, Icon, Reveal } from "../components/common";
import { facts, glance, principles, handle, creds, people } from "../data";

export function Facts() {
    return (
        <section id="facts" className="sec bg-soft">
            <div className="wrap">
                <Reveal className="head">
                    <Eyebrow>Facts &amp; figures</Eyebrow>
                    <h2 className="h2">The company in numbers.</h2>
                    <p className="lead">What we are, how long we have been at it, and the scale of both businesses.</p>
                </Reveal>
                <div className="grid g-300">
                    {facts.map((f, i) => (
                        <Reveal key={f.label} className={"fact fact-" + f.tone} delay={(i % 3) * 0.08}>
                            <div className="fact-tag">{f.tag}</div>
                            <div className="hd fact-num">{f.num}</div>
                            <div className="fact-label">{f.label}</div>
                            <div className="fact-note">{f.note}</div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function About() {
    return (
        <section id="about" className="sec">
            <div className="wrap split top">
                <Reveal className="split-a">
                    <Eyebrow>Who we are</Eyebrow>
                    <h2 className="h2">One company, two businesses, one accountable team.</h2>
                    <p className="lead tight">Brand Brigade Marketing is a trading and sourcing company based in Rajkot, Gujarat. Our export business finds manufacturers, checks them, negotiates, follows production and inspects before anything ships. Our marketplace gives registered businesses a place to list, quote, buy and sell.</p>
                    <p className="lead tight2">We are not a factory and we do not pretend to be one. Our value is judgement, follow-through and honest communication, whichever business you meet us through.</p>
                    <div className="feat-list">
                        {principles.map((p) => (
                            <div key={p.title} className="feat">
                                <span className="feat-ico"><Icon d={p.icon} /></span>
                                <span>
                                    <span className="hd feat-t">{p.title}</span>
                                    <span className="feat-b">{p.body}</span>
                                </span>
                            </div>
                        ))}
                    </div>
                </Reveal>

                <div className="split-b about-side">
                    <Reveal className="glance">
                        <div className="glance-head">
                            <span className="hd">Company at a glance</span>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M3 21h18 M5 21V7l7-4 7 4v14 M9 9h2 M13 9h2 M9 13h2 M13 13h2 M10 21v-4h4v4" />
                            </svg>
                        </div>
                        <dl>
                            {glance.map((g) => (
                                <div key={g.k} className="glance-row"><dt>{g.k}</dt><dd>{g.v}</dd></div>
                            ))}
                        </dl>
                    </Reveal>
                    <Reveal className="handle" delay={0.1}>
                        <h3 className="hd card-t">What the export team handles</h3>
                        <ul>
                            {handle.map((h) => (
                                <li key={h}><span className="tick tick-accent sm"><Check size={14} sw={3} /></span><span>{h}</span></li>
                            ))}
                        </ul>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

export function Verify() {
    return (
        <section id="verify" className="sec bg-deep">
            <div className="wrap">
                <Reveal className="head">
                    <Eyebrow bar>Authenticity</Eyebrow>
                    <h2 className="h2">Don't take our word for it. Verify us.</h2>
                    <p className="lead on-dark">Both the export business and the marketplace are run by one registered company. Every identifier below can be searched on the official Government of India portal named beside it.</p>
                </Reveal>
                <div className="grid g-250">
                    {creds.map((c, i) => (
                        <Reveal key={c.name} className="cred" delay={i * 0.08}>
                            <span className="cred-ico">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" />
                                </svg>
                            </span>
                            <div className="cred-name">{c.name}</div>
                            <div className="hd cred-val">{c.value}</div>
                            <div className="cred-where">{c.where}</div>
                            <a className="cred-link" href={c.link} target="_blank" rel="noopener">Open official portal <ExtArrow size={15} /></a>
                        </Reveal>
                    ))}
                </div>
                <Reveal className="paper">
                    <div>
                        <h3 className="hd paper-t">Want the paperwork in your inbox?</h3>
                        <p className="paper-d">Ask for our company profile and registration certificates. Many buyers need them for supplier onboarding or bank checks.</p>
                    </div>
                    <a className="btn btn-accent btn-lg" href="mailto:info@bbmpvtltd.com?subject=Request%20for%20company%20profile%20and%20certificates">Request company profile <Arrow /></a>
                </Reveal>
            </div>
        </section>
    );
}

export function Leadership() {
    return (
        <section className="sec">
            <div className="wrap">
                <Reveal className="head">
                    <Eyebrow>Leadership</Eyebrow>
                    <h2 className="h2">The people who answer your emails.</h2>
                    <p className="lead">Real names and real faces. Overseas buyers trust companies they can put a person to.</p>
                </Reveal>
                <div className="grid g-300">
                    {people.map((p, i) => (
                        <Reveal key={i} className="person" delay={i * 0.08}>
                            <div className="hd avatar">{p.initials}</div>
                            <div>
                                <div className="hd person-n">{p.name}</div>
                                <div className="person-r">{p.role}</div>
                            </div>
                            <p className="card-d sm">{p.bio}</p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function Bridge() {
    return (
        <section className="bridge">
            <div className="wrap bridge-in">
                <Reveal className="bridge-a">
                    <h2 className="hd bridge-h">Browse on the Marketplace. Ship through Export.</h2>
                    <p>Found a product you like? Send us its name, your quantity and your destination, and our export team takes it from there.</p>
                </Reveal>
                <Reveal className="btn-row tight" delay={0.1}>
                    <a className="btn btn-ghost btn-lg" href="https://www.bbm.business" target="_blank" rel="noopener">Visit Marketplace</a>
                    <a className="btn btn-white btn-lg" href="#enquiry">Send an enquiry <Arrow size={20} sw={2.6} /></a>
                </Reveal>
            </div>
        </section>
    );
}