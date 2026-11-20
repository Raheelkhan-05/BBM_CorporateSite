import { useEffect, useRef, useState } from "react";

const fmt = new Intl.NumberFormat("en-IN");

export default function CountUp({ value, duration = 1200 }) {
    const [shown, setShown] = useState(value);
    const fromRef = useRef(value);

    useEffect(() => {
        const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
        const from = fromRef.current;
        if (reduce || from === value) { setShown(value); fromRef.current = value; return undefined; }

        let raf;
        const t0 = performance.now();
        const tick = (now) => {
            const p = Math.min((now - t0) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setShown(Math.round(from + (value - from) * eased));
            if (p < 1) raf = requestAnimationFrame(tick);
            else fromRef.current = value;
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [value, duration]);

    return <>{fmt.format(shown)}</>;
}