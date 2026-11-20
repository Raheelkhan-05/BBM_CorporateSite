import { motion } from "motion/react";

export const Arrow = ({ size = 18, sw = 2.4 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
);

export const ExtArrow = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7 17L17 7 M8 7h9v9" />
    </svg>
);

export const Check = ({ size = 13, sw = 3.2 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 6L9 17l-5-5" />
    </svg>
);

export const Icon = ({ d, size = 22, sw = 2 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d={d} />
    </svg>
);

/** Fade/slide in when scrolled into view. */
export function Reveal({ as = "div", delay = 0, y = 26, className, children, ...rest }) {
    const Comp = motion[as];
    return (
        <Comp
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: Math.min(delay, 0.5), ease: [0.22, 1, 0.36, 1] }}
            {...rest}
        >
            {children}
        </Comp>
    );
}

export const Eyebrow = ({ children, bar = false }) => (
    <div className={"eyebrow" + (bar ? " eyebrow-bar" : "")}>
        {bar && <span className="bar" />}
        {children}
    </div>
);