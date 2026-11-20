import { useEffect } from "react";
import { scrollToHash } from "../lib/scroll";

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

                // opened with a #section in the URL
                if (window.location.hash) requestAnimationFrame(() => scrollToHash(window.location.hash));
            });
        }

        // One handler for every in-page link (#export, #enquiry, ...)
        const onClick = (e) => {
            if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
            if (!(e.target instanceof Element)) return;
            const a = e.target.closest('a[href^="#"]');
            if (!a) return;
            if (scrollToHash(a.getAttribute("href"))) e.preventDefault();
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