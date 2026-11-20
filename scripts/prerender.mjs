import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://www.bbmpvtltd.com";

const template = fs.readFileSync(path.join(root, "dist/index.html"), "utf-8");
const { render, faqs } = await import(pathToFileURL(path.join(root, "dist-ssr/entry-server.js")).href);

const jsonLd = [
    {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Brand Brigade Marketing Private Limited",
        alternateName: "Brand Brigade",
        url: SITE + "/",
        logo: SITE + "/assets/logo.png",
        description:
            "Trading and sourcing company based in Rajkot, Gujarat, India, running BBM Export (managed sourcing, inspection and export) and BBM Marketplace (B2B marketplace at bbm.business).",
        foundingDate: "2017",
        email: "info@bbmpvtltd.com",
        telephone: "+91 84870 47774",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Maninagar, Greenland Circle, Kuvadva Road",
            addressLocality: "Rajkot",
            addressRegion: "Gujarat",
            postalCode: "360005",
            addressCountry: "IN",
        },
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "sales",
            email: "info@bbmpvtltd.com",
            telephone: "+91 84870 47774",
            availableLanguage: ["English", "Hindi"],
        },
    },
    {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Brand Brigade Marketing",
        url: SITE + "/",
    },
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
    },
]
    .map((o) => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, "\\u003c")}</script>`)
    .join("\n    ");

const html = template.replace("<!--app-html-->", render()).replace("<!--jsonld-->", jsonLd);
fs.writeFileSync(path.join(root, "dist/index.html"), html);
fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
console.log("Pre-rendered dist/index.html (" + Math.round(html.length / 1024) + " KB)");