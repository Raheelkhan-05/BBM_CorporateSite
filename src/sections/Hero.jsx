import { motion } from "motion/react";
import { Arrow } from "../components/common";
import { HeroScene, HeroWatermark } from "../components/Illustrations";

const ease = [0.22, 1, 0.36, 1];
const up = (d = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: d, ease },
});

function Biz({ href, tag, tagColor, border, iconBg, title, text, cta, icon, delay, x }) {
    return (
        <motion.a
            className="bizcard"
            href={href}
            style={{ borderTopColor: border }}
            initial={{ opacity: 0, x }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay, ease }}
            whileHover={{ y: -4 }}
        >
            <span className="bizcard-ico" style={{ background: iconBg }}>{icon}</span>
            <span className="bizcard-body">
                <span className="bizcard-tag" style={{ color: tagColor }}>{tag}</span>
                <span className="hd bizcard-title">{title}</span>
                <span className="bizcard-text">{text}</span>
                <span className="hd bizcard-cta">{cta} <Arrow size={16} /></span>
            </span>
        </motion.a>
    );
}

const svgp = { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", stroke: "#fff", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };

export default function Hero() {
    return (
        <section id="top" className="hero">
            <HeroWatermark />
            <div className="wrap hero-inner">
                <div className="hero-copy">
                    <motion.div className="pill" {...up(0)}>
                        <span className="pill-dot" /> Registered company · Rajkot, Gujarat, India
                    </motion.div>
                    <motion.h1 className="hd hero-h1" {...up(0.08)}>Export. Marketplace. One trusted company.</motion.h1>
                    <motion.p className="hero-p" {...up(0.16)}>
                        Brand Brigade runs two connected businesses for trade with India: an export house that sources and ships for overseas buyers, and an online B2B marketplace where verified businesses list, quote, buy and sell products.
                    </motion.p>
                    <motion.div className="btn-row" {...up(0.24)}>
                        <a className="btn btn-accent btn-lg" href="#enquiry">Send an export enquiry <Arrow size={20} /></a>
                        <a className="btn btn-ghost btn-lg" href="https://www.bbm.business" target="_blank" rel="noopener">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 9l1-5h16l1 5 M3 9v11h18V9 M3 9a3 3 0 006 0 3 3 0 006 0 3 3 0 006 0 M9 20v-6h6v6" /></svg>
                            Visit the Marketplace
                        </a>
                    </motion.div>
                    <motion.a className="verify-link" href="#verify" {...up(0.3)}>
                        Or verify our credentials first <Arrow size={16} />
                    </motion.a>
                    <motion.div className="welcome" {...up(0.36)}>
                        <b>Welcome</b>
                        <span lang="hi">नमस्ते</span><span lang="es">Bienvenidos</span><span lang="fr">Bienvenue</span>
                        <span lang="ar" dir="rtl">أهلاً وسهلاً</span><span lang="zh">欢迎</span><span lang="de">Willkommen</span>
                    </motion.div>
                </div>

                <div className="biz-stack">
                    <Biz
                        href="#export" tag="Business 1" tagColor="#D2462B" border="#D2462B" iconBg="#006F85"
                        title="BBM Export" text="We source from Indian manufacturers, inspect the goods and ship to your port."
                        cta="Explore export" delay={0.3} x={40}
                        icon={<svg {...svgp}><path d="M2 20a2.4 2.4 0 002 1 2.4 2.4 0 002-1 2.4 2.4 0 012-1 2.4 2.4 0 012 1 2.4 2.4 0 002 1 2.4 2.4 0 002-1 M4 18l-1-5 9-3 9 3-1 5 M12 10V3 M8 7h8" /></svg>}
                    />
                    <div className="biz-link">
                        <span /><span className="hd biz-link-pill">Connected through products</span><span />
                    </div>
                    <Biz
                        href="#marketplace" tag="Business 2" tagColor="#006F85" border="#006F85" iconBg="#D2462B"
                        title="BBM Marketplace" text="bbm.business, our B2B marketplace where verified businesses list, quote, buy and sell."
                        cta="Explore marketplace" delay={0.45} x={40}
                        icon={<svg {...svgp}><path d="M3 9l1-5h16l1 5 M3 9v11h18V9 M3 9a3 3 0 006 0 3 3 0 006 0 3 3 0 006 0 M9 20v-6h6v6" /></svg>}
                    />
                </div>
            </div>
            <HeroScene />
        </section>
    );
}