import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Arrow, Eyebrow, Icon, Reveal } from "../components/common";
import { faqs, interests, ICON } from "../data";

const initial = { name: "", company: "", country: "", email: "", phone: "", role: "", listing: "", message: "" };

const contactIco = (d, extra) => (
    <span className="contact-ico">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d={d} />{extra}
        </svg>
    </span>
);

// IMPORTANT: defined OUTSIDE Enquiry so React keeps the same input mounted between keystrokes.
function Field({ label, full, ...inputProps }) {
    return (
        <label className={"field" + (full ? " full" : "")}>
            {label}
            <input {...inputProps} />
        </label>
    );
}

export function Enquiry() {
    const [interest, setInterest] = useState(0);
    const [f, setF] = useState(initial);
    const set = (k) => (e) => {
        const { value } = e.target;
        setF((s) => ({ ...s, [k]: value }));
    };

    const subject = interest === 0 ? "Export enquiry" : "Marketplace enquiry";
    const body = [
        `Interested in: ${interests[interest].title}`,
        `Name: ${f.name}`,
        `Company: ${f.company}`,
        `Country: ${f.country}`,
        `Email: ${f.email}`,
        `Phone/WhatsApp: ${f.phone}`,
        `I am a: ${f.role}`,
        `Marketplace listing: ${f.listing}`,
        "",
        "Product, specifications and quantity:",
        f.message,
    ].join("\n");
    const mailto = `mailto:info@bbmpvtltd.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return (
        <section id="enquiry" className="sec bg-deep">
            <div className="wrap split top">
                <Reveal className="split-a">
                    <Eyebrow bar>International enquiries</Eyebrow>
                    <h2 className="h2">Write to us from wherever you are.</h2>
                    <p className="lead on-dark">Whether you want us to run a purchase for you or you want to trade on the marketplace, a short note is enough to begin. A real person reads every enquiry and replies.</p>
                    <div className="contacts">
                        <a href="mailto:info@bbmpvtltd.com" className="contact">
                            {contactIco("M3 7l9 6 9-6", <rect x="3" y="5" width="18" height="14" rx="2" />)}
                            info@bbmpvtltd.com
                        </a>
                        <a href="tel:+918487047774" className="contact">
                            {contactIco("M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z")}
                            +91 84870 47774
                        </a>
                        <div className="contact top">
                            {contactIco("M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z", <circle cx="12" cy="10" r="3" />)}
                            <span className="contact-t">Maninagar, Greenland Circle, Kuvadva Road,<br />Rajkot, Gujarat, India 360005</span>
                        </div>
                        <div className="contact top">
                            {contactIco("M12 6v6l4 2", <circle cx="12" cy="12" r="10" />)}
                            <span className="contact-t">Office hours: [09:30 to 18:30] IST, Monday to Saturday<br /><span className="contact-s">Write any time; we reply on the next working day.</span></span>
                        </div>
                    </div>
                </Reveal>

                <Reveal className="split-b form" delay={0.1}>
                    <h3 className="hd form-h">Send an enquiry</h3>
                    <p className="form-sub">Takes about two minutes.</p>
                    <div className="form-lbl">I am interested in</div>
                    <div className="interests">
                        {interests.map((it, i) => (
                            <button key={it.title} type="button" className={"interest" + (i === interest ? " on" : "")} aria-pressed={i === interest} onClick={() => setInterest(i)}>
                                <span className="hd interest-t">{it.title}</span>
                                <span className="interest-d">{it.desc}</span>
                            </button>
                        ))}
                    </div>
                    <div className="fields">
                        <Field label="Your name" name="name" autoComplete="name" placeholder="Full name" value={f.name} onChange={set("name")} />
                        <Field label="Company" name="company" autoComplete="organization" placeholder="Company name" value={f.company} onChange={set("company")} />
                        <Field label="Country" name="country" autoComplete="country-name" placeholder="Where are you based?" value={f.country} onChange={set("country")} />
                        <Field label="Email" name="email" type="email" autoComplete="email" placeholder="you@company.com" value={f.email} onChange={set("email")} />
                        <Field label="Phone or WhatsApp (optional)" name="phone" type="tel" autoComplete="tel" placeholder="+ country code" value={f.phone} onChange={set("phone")} />
                        <Field label="You are a" name="role" placeholder="Importer, distributor, retailer, brand…" value={f.role} onChange={set("role")} />
                        <Field full label="Marketplace listing or product you saw (optional)" name="listing" placeholder="Product name or link from bbm.business" value={f.listing} onChange={set("listing")} />
                        <label className="field full">
                            Product, specifications and quantity
                            <textarea name="message" rows="4" value={f.message} onChange={set("message")} placeholder="What do you want to buy or sell? Add specs, quantity, destination port and timeline if you have them." />
                        </label>
                    </div>
                    <a className="btn btn-accent btn-lg btn-full" href={mailto}>Send enquiry <Arrow size={20} /></a>
                    <p className="form-note">Your details are used only to respond to your enquiry.</p>
                </Reveal>
            </div>
        </section>
    );
}

export function Faq() {
    const [cur, setCur] = useState(0);
    return (
        <section id="faq" className="sec bg-soft">
            <div className="wrap narrow">
                <Reveal>
                    <Eyebrow>Questions buyers ask</Eyebrow>
                    <h2 className="h2">Before you write to us.</h2>
                </Reveal>
                <div className="faqs">
                    {faqs.map((q, i) => {
                        const open = i === cur;
                        return (
                            <Reveal key={q.q} className="faq" delay={Math.min(i * 0.04, 0.3)}>
                                <button className="faq-q" aria-expanded={open} onClick={() => setCur(open ? -1 : i)}>
                                    <span className="hd faq-qt">{q.q}</span>
                                    <span className="faq-ico"><Icon d={open ? ICON.minus : ICON.plus} size={16} sw={2.8} /></span>
                                </button>
                                <AnimatePresence initial={false}>
                                    {open && (
                                        <motion.div
                                            key="a"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                            style={{ overflow: "hidden" }}
                                        >
                                            <p className="faq-a">{q.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}