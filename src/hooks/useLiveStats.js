import { useEffect, useState } from "react";

const URL_ = import.meta.env.VITE_SUPABASE_URL;
const KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const REFRESH_MS = 60 * 1000;

export function useLiveStats() {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        if (!URL_ || !KEY) return undefined;
        let controller;
        let timer;

        const load = async () => {
            controller?.abort();
            controller = new AbortController();
            try {
                const res = await fetch(`${URL_}/rest/v1/rpc/catalog_public_stats`, {
                    method: "POST",
                    signal: controller.signal,
                    headers: {
                        apikey: KEY,
                        Authorization: `Bearer ${KEY}`,
                        "Content-Type": "application/json",
                    },
                    body: "{}",
                });
                if (!res.ok) return;
                setStats(await res.json());
            } catch { /* keep last value / static fallback */ }
        };

        const start = () => { load(); timer = setInterval(load, REFRESH_MS); };
        const stop = () => { clearInterval(timer); controller?.abort(); };
        const onVisibility = () => {
            stop();
            if (document.visibilityState === "visible") start();
        };

        start();
        document.addEventListener("visibilitychange", onVisibility);
        return () => { stop(); document.removeEventListener("visibilitychange", onVisibility); };
    }, []);

    return stats;
}