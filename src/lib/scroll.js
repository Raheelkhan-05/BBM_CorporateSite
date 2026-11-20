/** Smoothly scrolls to "#id". Safe to call whether or not Lenis is loaded or stopped. */
export function scrollToHash(hash) {
    if (typeof window === "undefined" || !hash || hash.length < 2) return false;

    let id = hash.slice(1);
    try {
        id = decodeURIComponent(id);
    } catch { }
    const el = document.getElementById(id);
    if (!el) return false;

    const header = document.querySelector(".header");
    const offset = -(header ? header.offsetHeight : 72) + 100;
    const lenis = window.__lenis;

    if (lenis) {
        // start() resets Lenis (cancels running animations), so only call it when it is actually stopped,
        // and always BEFORE scrollTo.
        if (lenis.isStopped) lenis.start();
        lenis.scrollTo(el, { offset, duration: 1.2 });
    } else {
        const top = el.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
    }

    history.replaceState(null, "", hash);
    return true;
}