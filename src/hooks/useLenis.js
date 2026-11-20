import { useEffect } from "react";

const HEADER_OFFSET = -72;

export function useLenis() {
    useEffect(() => {
        let cancelled = false;
        let lenis = null;
        let raf = 0;
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (!reduce) {
            import("lenis").then(({ default: Lenis }) => {
                if (cancelled) return;
                lenis = new Lenis({
                    duration: 1.15,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    smoothWheel: true,
                });
                window.__lenis = lenis;
                const loop = (time) => {
                    lenis.raf(time);
                    raf = requestAnimationFrame(loop);
                };
                raf = requestAnimationFrame(loop);
            });
        }

        // Smooth anchor links (#export, #enquiry, ...)
        const onClick = (e) => {
            const a = e.target.closest('a[href^="#"]');
            if (!a) return;
            const hash = a.getAttribute("href");
            const el = hash.length > 1 ? document.querySelector(hash) : null;
            if (!el) return;
            e.preventDefault();
            if (lenis) lenis.scrollTo(el, { offset: HEADER_OFFSET, force: true });
            else el.scrollIntoView({ behavior: "auto" });
            history.replaceState(null, "", hash);
        };
        document.addEventListener("click", onClick);

        return () => {
            cancelled = true;
            document.removeEventListener("click", onClick);
            cancelAnimationFrame(raf);
            if (lenis) lenis.destroy();
            window.__lenis = null;
        };
    }, []);
}