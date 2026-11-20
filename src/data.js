export const ICON = {
    eye: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z M12 15a3 3 0 100-6 3 3 0 000 6z",
    chat: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z",
    search: "M11 19a8 8 0 100-16 8 8 0 000 16z M21 21l-4.3-4.3",
    swap: "M7 17L17 7 M7 7h10v10 M17 17H7V7",
    check: "M9 11l3 3L22 4 M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11",
    tag: "M20.6 13.4l-7.2 7.2a2 2 0 01-2.8 0L2 12V2h10l8.6 8.6a2 2 0 010 2.8z M7 7h.01",
    share:
        "M18 8a3 3 0 100-6 3 3 0 000 6z M6 15a3 3 0 100-6 3 3 0 000 6z M18 22a3 3 0 100-6 3 3 0 000 6z M8.6 13.5l6.8 4 M15.4 6.5l-6.8 4",
    truck:
        "M1 3h15v13H1z M16 8h4l3 3v5h-7z M5.5 21a2.5 2.5 0 100-5 2.5 2.5 0 000 5z M18.5 21a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
    wallet:
        "M21 12V7a2 2 0 00-2-2H5a2 2 0 000 4h14a2 2 0 012 2v0 M3 5v14a2 2 0 002 2h14a2 2 0 002-2v-3 M17 14h4v4h-4a2 2 0 010-4z",
    list: "M8 6h13 M8 12h13 M8 18h13 M3 6h.01 M3 12h.01 M3 18h.01",
    quote: "M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9z M14 3v6h6 M8 13h8 M8 17h5",
    plus: "M12 5v14 M5 12h14",
    minus: "M5 12h14",
};

// CATEGORY LINKS: replace each value with the exact category page on bbm.business.
export const CAT_URL = {
    automotive: "https://www.bbm.business",
    packaging: "https://www.bbm.business",
    food: "https://www.bbm.business",
    chemicals: "https://www.bbm.business",
    fmcg: "https://www.bbm.business",
    industrial: "https://www.bbm.business",
};

export const NAV = [
    ["#export", "Export"],
    ["#marketplace", "Marketplace"],
    ["#connect", "How they connect"],
    ["#categories", "Categories"],
    ["#about", "About"],
    ["#verify", "Verify us"],
];

export const glance = [
    { k: "Legal name", v: "Brand Brigade Marketing Private Limited" },
    { k: "Company type", v: "Private limited company, India" },
    { k: "Incorporated", v: "2017" },
    { k: "Registered office", v: "Rajkot, Gujarat" },
    { k: "Businesses", v: "BBM Export and BBM Marketplace" },
    { k: "Export licence", v: "Import-Export Code (IEC) holder" },
    { k: "MSME status", v: "Udyam registered" },
];

export const journeys = [
    { n: "1", who: "Buyers", title: "Saw it on the Marketplace? We can export it.", body: "Send an enquiry with the product name and your destination. The export team handles inspection, documents and shipment." },
    { n: "2", who: "Buyers", title: "Not listed? We will source it.", body: "Describe what you need and our export team finds manufacturers. Suitable products can then be listed on the Marketplace." },
    { n: "3", who: "Manufacturers and exporters", title: "List once, be found by buyers.", body: "List your products on the Marketplace, and talk to us if you want the export team to help you reach overseas buyers." },
    { n: "4", who: "Everyone", title: "One company behind both.", body: "The registrations on this page apply to both businesses, and one team answers for each. You never deal with strangers." },
];

export const mkt = [
    { title: "List for free", body: "Listing a product costs nothing. Fees are charged only when an order is generated, and the pricing page spells them out.", icon: ICON.list },
    { title: "Compare and request quotes", body: "Buyers browse by category, compare listings and request quotes from sellers.", icon: ICON.quote },
    { title: "Protected advance payments", body: "For advance-paid orders, the payment is held until the order is delivered, and the buyer has time to raise a dispute.", icon: ICON.wallet },
    { title: "One company, one standard", body: "The marketplace is operated by the same registered company as our export business.", icon: ICON.check },
];

export const facts = [
    { tag: "Company", tone: "accent", num: "2017", label: "Year of incorporation", note: "Registered as a private limited company in Gujarat, India." },
    { tag: "Company", tone: "accent", num: "2", label: "Connected businesses", note: "BBM Export and BBM Marketplace, run by one team." },
    { tag: "Both", tone: "teal", num: "6", label: "Product categories", note: "Automotive and engineering, packaging, food, chemicals, FMCG and industrial supplies." },
    { tag: "Export", tone: "accent", num: "21", label: "Countries we have shipped to", note: "Exporting to customers across 21 countries." },
    { tag: "Export", tone: "accent", num: "198", label: "Verified manufacturers in our network", note: "A network of 198 verified manufacturing partners." },
    // { tag: "Marketplace", tone: "teal", num: "15,000+", label: "Products listed", note: "Over 15,000 products listed on bbm.business." },
    { tag: "Marketplace", tone: "teal", num: "15,000+", live: "products", label: "Products listed", note: "Live count of products listed on bbm.business." },
];

export const principles = [
    { title: "One point of contact", body: "A named person owns your order or account from first enquiry onward.", icon: ICON.chat },
    { title: "Checked before it ships", body: "Suppliers are screened up front and goods are inspected before dispatch.", icon: ICON.check },
    { title: "Plain, honest updates", body: "Real timelines and real status. If something slips, you hear it from us first.", icon: ICON.eye },
];

export const handle = [
    "Finding and screening suitable manufacturers",
    "Negotiating price, minimum order and lead time",
    "Arranging samples for your approval",
    "Following production and packaging",
    "Pre-dispatch inspection of goods and labelling",
    "Export paperwork and shipment coordination",
];

export const creds = [
    { name: "Company Identification Number", value: "U74999GJ2017PTC097922", where: "Confirms the company is incorporated. Search the company master data on the Ministry of Corporate Affairs portal.", link: "https://www.mca.gov.in" },
    { name: "GST Registration", value: "24AAHCB3512C1ZD", where: "Confirms the legal name and active tax registration. Use the Search Taxpayer tool on the GST portal.", link: "https://www.gst.gov.in" },
    { name: "Import Export Code", value: "AAHCB3512C", where: "The licence needed to import and export from India. Issued by the Directorate General of Foreign Trade.", link: "https://www.dgft.gov.in" },
    { name: "MSME / Udyam Registration", value: "UDYAM-GJ-20-0031382", where: "Confirms registration as a micro, small or medium enterprise on the Udyam portal.", link: "https://udyamregistration.gov.in" },
];

export const caps = [
    { title: "Export and import trade", desc: "We move goods across borders for both directions of trade, handling the commercial and shipping detail.", icon: ICON.swap },
    { title: "Supplier sourcing", desc: "We shortlist manufacturers against your specification and compare quotations side by side.", icon: ICON.search },
    { title: "Quality inspection", desc: "Checks on specification, quantity, packing and labelling before goods leave the factory.", icon: ICON.check },
    { title: "Private label and contract manufacturing", desc: "We match your brand with a capable manufacturer and coordinate packaging and quality checkpoints.", icon: ICON.tag },
    { title: "Distribution partnerships", desc: "We connect brands with distributors, wholesalers and retailers and keep orders moving.", icon: ICON.share },
    { title: "Documentation and logistics", desc: "Export documents prepared and checked, with shipment coordinated to your destination.", icon: ICON.truck },
];

export const steps = [
    { n: "1", title: "Browse or write to us", desc: "Look through the Marketplace, or simply describe what you need. A short email is enough." },
    { n: "2", title: "We scope it with you", desc: "We confirm specification, quantity and timeline, and ask only what we need." },
    { n: "3", title: "Shortlist and quotation", desc: "You receive screened supplier options with clear pricing and terms." },
    { n: "4", title: "Samples and agreement", desc: "You approve samples, then we finalise terms before production begins." },
    { n: "5", title: "Production to shipment", desc: "We follow production, inspect the goods and coordinate documents and dispatch." },
];

export const needs = [
    "Product name or listing you saw",
    "Quantity you plan to order",
    "Destination country or port",
    "Target delivery timeline",
    "Packaging or labelling needs",
    "Any certifications required",
];

export const people = [
    { initials: "--", name: "[Full name]", role: "[Director / Managing Director]", bio: "[Two lines on background, years in trade, and what this person looks after.]" },
    { initials: "--", name: "[Full name]", role: "[Director / Head of Sourcing]", bio: "[Two lines on background, years in trade, and what this person looks after.]" },
    { initials: "--", name: "[Full name]", role: "[Head of Export Operations]", bio: "[Two lines on background, years in trade, and what this person looks after.]" },
];

export const faqs = [
    { q: "What is the difference between BBM Export and BBM Marketplace?", a: "BBM Export is a managed service: you tell us what you need and our team sources, inspects and ships it. BBM Marketplace is an online platform at bbm.business where registered businesses list, browse, quote, buy and sell directly. Both are run by the same company." },
    { q: "I found a product on the Marketplace. Can you export it to me?", a: "Yes. Send an enquiry with the product name or link, your quantity and your destination. Our export team will confirm details and manage inspection, documents and shipment." },
    { q: "Can I use both businesses?", a: "Yes. Many buyers start on the Marketplace to see what is available and bring in the export team when they want help with sourcing, inspection or shipping. Sellers can list on the Marketplace and ask us about export support." },
    { q: "Does it cost anything to list on the Marketplace?", a: "Listing a product is free. Fees are charged only when an order is generated. The current fee structure is on the pricing page of bbm.business." },
    { q: "Are you a manufacturer or a trading company?", a: "We are a trading and sourcing company. We work with manufacturers and manage the coordination, so you have a single accountable contact." },
    { q: "How can I check that your company is genuine?", a: "Each registration in the Verify section can be searched on the official government portal. We are also happy to send copies of certificates and our company profile on request." },
    { q: "Can I see samples before committing?", a: "Sampling is a standard step before production wherever the product allows it. We coordinate it and you approve before we proceed." },
    { q: "Which countries can enquire?", a: "Enquiries from every country are welcome, subject to the trade laws, sanctions and export controls that apply to the goods and the destination." },
    { q: "What should I include in my first message?", a: "The product, specifications, quantity, destination and timeline. If you are missing any of these, send what you have and we will help fill the gaps." },
];

export const interests = [
    { title: "Export", desc: "Source, inspect and ship for me" },
    { title: "Marketplace", desc: "Buy or sell on bbm.business" },
];