import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { NAV } from "../data";
import { Arrow } from "./common";

export function TopBar() {
    return (
        <div className="topbar">
            <div className="wrap topbar-in">
                <span className="topbar-main">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 22a10 10 0 100-20 10 10 0 000 20z M2 12h20 M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                    </svg>
                    Overseas enquiries are welcome from every country
                </span>
                <span className="topbar-x">
                    <a href="mailto:info@bbmpvtltd.com">info@bbmpvtltd.com</a>
                    <a href="tel:+918487047774">+91 84870 47774</a>
                    <span>Office time zone: IST (UTC+5:30)</span>
                </span>
            </div>
        </div>
    );
}

export function Header() {
    const [open, setOpen] = useState(false);

    // Lock / unlock page scroll while the menu is open.
    useEffect(() => {
        const html = document.documentElement;
        const lenis = window.__lenis;
        if (open) {
            lenis?.stop();
            html.classList.add("menu-open");
        } else {
            // start() cancels running scroll animations, so only call it if Lenis is really stopped.
            if (lenis?.isStopped) lenis.start();
            html.classList.remove("menu-open");
        }
    }, [open]);

    // Safety net: never leave the page locked if the header unmounts.
    useEffect(
        () => () => {
            const lenis = window.__lenis;
            if (lenis?.isStopped) lenis.start();
            document.documentElement.classList.remove("menu-open");
        },
        []
    );

    // Close on Escape and when the screen becomes wide enough for the desktop nav.
    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && setOpen(false);
        const onResize = () => window.innerWidth > 1040 && setOpen(false);
        window.addEventListener("keydown", onKey);
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("keydown", onKey);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    const close = () => setOpen(false);

    return (
        <header className="header">
            <div className="wrap header-in">
                <a href="#top" className="brand" onClick={close}>
                    <img src="/assets/logo.png" alt="Brand Brigade Marketing logo" />
                    <span className="brand-text">
                        <span className="hd brand-name">Brand Brigade</span>
                        <span className="brand-sub">Marketing Pvt. Ltd.</span>
                    </span>
                </a>

                <nav className="nav-links" aria-label="Primary">
                    {NAV.map(([href, label]) => (
                        <a key={href} className="navl" href={href}>{label}</a>
                    ))}
                </nav>

                <div className="header-cta">
                    <a className="btn btn-outline hide-md" href="https://www.bbm.business" target="_blank" rel="noopener">Visit Marketplace</a>
                    <a className="btn btn-accent btn-sm hide-sm" href="#enquiry">
                        Send an enquiry <Arrow size={16} />
                    </a>
                    <button
                        type="button"
                        className="burger"
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        onClick={() => setOpen((o) => !o)}
                    >
                        <span className={"burger-i" + (open ? " is-open" : "")}><i /><i /><i /></span>
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        key="backdrop"
                        className="menu-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={close}
                        aria-hidden="true"
                    />
                )}
                {open && (
                    <motion.div
                        key="menu"
                        id="mobile-menu"
                        className="mobile-menu"
                        data-lenis-prevent
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <nav className="mm-links" aria-label="Mobile">
                            {NAV.map(([href, label], i) => (
                                <motion.a
                                    key={href}
                                    href={href}
                                    onClick={close}
                                    initial={{ opacity: 0, x: -14 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.05 + i * 0.04 }}
                                >
                                    {label}
                                    <Arrow size={16} />
                                </motion.a>
                            ))}
                        </nav>
                        <div className="mm-cta">
                            <a className="btn btn-accent" href="#enquiry" onClick={close}>
                                Send an enquiry <Arrow />
                            </a>
                            <a className="btn btn-outline" href="https://www.bbm.business" target="_blank" rel="noopener" onClick={close}>Visit Marketplace</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}