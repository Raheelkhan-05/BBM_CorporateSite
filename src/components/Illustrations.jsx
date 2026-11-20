import { motion } from "motion/react";

const bob = {
    animate: { y: [0, -3, 0] },
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
};

const shipRow1 = ["#FFFFFF", "#D2462B", "#C5E0E6", "#FFFFFF", "#D2462B", "#E1F0F3", "#C5E0E6", "#FFFFFF"];
const shipRow2 = ["#D2462B", "#FFFFFF", "#C5E0E6", "#D2462B", "#FFFFFF", "#E1F0F3"];

export function HeroScene() {
    return (
        <svg className="hero-ship" viewBox="0 0 1440 220" preserveAspectRatio="xMidYMax slice" role="img" aria-label="Illustration of a container ship leaving an Indian port at sunset">
            <circle cx="1190" cy="130" r="66" fill="#D2462B" />
            <g stroke="#C5E0E6" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M120 150V52H250" /><path d="M250 52l26-30" /><path d="M190 52V150" /><path d="M120 52L92 82" />
                <path d="M360 150V80H450" /><path d="M450 80l20-22" /><path d="M400 80V150" />
            </g>
            <g>
                <rect x="30" y="118" width="34" height="32" fill="#D2462B" /><rect x="66" y="118" width="34" height="32" fill="#E1F0F3" />
                <rect x="204" y="118" width="34" height="32" fill="#FFFFFF" /><rect x="240" y="118" width="34" height="32" fill="#D2462B" />
                <rect x="222" y="86" width="34" height="32" fill="#C5E0E6" />
            </g>
            <path d="M0 150Q60 136 120 150T240 150T360 150T480 150T600 150T720 150T840 150T960 150T1080 150T1200 150T1320 150T1440 150V220H0Z" fill="#006F85" />
            <motion.g {...bob}>
                <path d="M500 128H950L936 170H540Z" fill="#D2462B" />
                <path d="M506 141H946" stroke="#FFFFFF" strokeWidth="3" />
                {shipRow1.map((c, i) => <rect key={"a" + i} x={560 + i * 36} y="100" width="34" height="28" fill={c} />)}
                {shipRow2.map((c, i) => <rect key={"b" + i} x={596 + i * 36} y="72" width="34" height="28" fill={c} />)}
                <rect x="858" y="56" width="70" height="72" fill="#FFFFFF" />
                <rect x="866" y="66" width="54" height="8" fill="#006F85" />
                <rect x="866" y="84" width="54" height="8" fill="#006F85" />
                <rect x="886" y="34" width="22" height="22" fill="#D2462B" />
                <rect x="886" y="42" width="22" height="5" fill="#FFFFFF" />
            </motion.g>
            <path d="M0 176Q60 162 120 176T240 176T360 176T480 176T600 176T720 176T840 176T960 176T1080 176T1200 176T1320 176T1440 176V220H0Z" fill="#00414E" />
        </svg>
    );
}

export function HeroWatermark() {
    return (
        <svg className="hero-mark" viewBox="0 0 1071 1071" fill="none" aria-hidden="true">
            <path d="M864 845 V225.5 H201.5 V840.5 H600 A128 128 0 0 0 600 584.5 H456" stroke="rgba(255,255,255,.07)" strokeWidth="73" strokeLinecap="round" strokeLinejoin="miter" />
            <path d="M351 654 V367.5 H533 A127.5 127.5 0 0 1 654 470" stroke="rgba(255,255,255,.07)" strokeWidth="73" strokeLinecap="butt" strokeLinejoin="miter" />
        </svg>
    );
}

export function ExportPanelArt() {
    return (
        <svg className="panel-art" viewBox="0 0 520 150" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Illustration of a container ship at sea" style={{ background: "#006F85" }}>
            <circle cx="420" cy="92" r="36" fill="#D2462B" />
            <path d="M0 96Q40 84 80 96T160 96T240 96T320 96T400 96T480 96T560 96V150H0Z" fill="#00505F" />
            <motion.g {...bob}>
                <path d="M110 74H420L408 100H132Z" fill="#D2462B" />
                <path d="M114 84H416" stroke="#FFFFFF" strokeWidth="2" />
                <rect x="150" y="54" width="26" height="20" fill="#FFFFFF" /><rect x="178" y="54" width="26" height="20" fill="#C5E0E6" />
                <rect x="206" y="54" width="26" height="20" fill="#D2462B" /><rect x="234" y="54" width="26" height="20" fill="#FFFFFF" />
                <rect x="262" y="54" width="26" height="20" fill="#E1F0F3" /><rect x="290" y="54" width="26" height="20" fill="#C5E0E6" />
                <rect x="178" y="34" width="26" height="20" fill="#D2462B" /><rect x="206" y="34" width="26" height="20" fill="#FFFFFF" />
                <rect x="262" y="34" width="26" height="20" fill="#C5E0E6" />
                <rect x="338" y="30" width="52" height="44" fill="#FFFFFF" />
                <rect x="344" y="38" width="40" height="6" fill="#006F85" /><rect x="344" y="50" width="40" height="6" fill="#006F85" />
                <rect x="356" y="16" width="16" height="14" fill="#D2462B" />
            </motion.g>
            <path d="M0 112Q40 100 80 112T160 112T240 112T320 112T400 112T480 112T560 112V150H0Z" fill="#00414E" />
        </svg>
    );
}

export function MarketPanelArt() {
    return (
        <svg className="panel-art" viewBox="0 0 520 150" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Illustration of an online storefront with products" style={{ background: "#D2462B" }}>
            <rect x="130" y="24" width="260" height="30" fill="#FFFFFF" />
            <g fill="#00505F"><rect x="130" y="24" width="43" height="30" /><rect x="216" y="24" width="43" height="30" /><rect x="302" y="24" width="43" height="30" /></g>
            <g>
                <path d="M130 54a21.6 20 0 0 0 43 0z" fill="#00505F" /><path d="M173 54a21.6 20 0 0 0 43 0z" fill="#FFFFFF" />
                <path d="M216 54a21.6 20 0 0 0 43 0z" fill="#00505F" /><path d="M259 54a21.6 20 0 0 0 43 0z" fill="#FFFFFF" />
                <path d="M302 54a21.6 20 0 0 0 43 0z" fill="#00505F" /><path d="M345 54a21.6 20 0 0 0 45 0z" fill="#FFFFFF" />
            </g>
            <rect x="142" y="82" width="236" height="68" fill="#FBECE8" />
            <rect x="156" y="96" width="46" height="54" fill="#006F85" /><rect x="214" y="104" width="30" height="46" fill="#FFFFFF" />
            <rect x="256" y="96" width="34" height="54" fill="#00505F" /><rect x="302" y="108" width="60" height="42" fill="#FFFFFF" />
            <path d="M302 124h60" stroke="#D2462B" strokeWidth="3" />
        </svg>
    );
}

const F = "Inter, system-ui, sans-serif";
const H = "Plus Jakarta Sans, Inter, sans-serif";

function MockCard({ dx, children }) {
    return (
        <g transform={`translate(${dx} 0)`}>
            <rect x="30" y="172" width="156" height="226" rx="12" fill="#F2F6F7" />
            {children}
            <rect x="42" y="284" width="104" height="10" rx="5" fill="#B9CBD1" />
            <rect x="42" y="302" width="70" height="8" rx="4" fill="#D7E3E7" />
            <rect x="42" y="338" width="132" height="44" rx="10" fill="#D2462B" />
            <text x="108" y="366" textAnchor="middle" fontFamily={H} fontSize="15" fontWeight="700" fill="#FFFFFF">Get quote</text>
        </g>
    );
}

export function MarketMock() {
    return (
        <svg className="mock" viewBox="0 0 560 420" role="img" aria-label="Illustration of the BBM marketplace showing product cards with a Get quote button">
            <rect x="6" y="6" width="548" height="408" rx="18" fill="#FFFFFF" stroke="#B9CBD1" strokeWidth="2" />
            <path d="M6 24a18 18 0 0 1 18-18h512a18 18 0 0 1 18 18v28H6z" fill="#EEF3F5" />
            <circle cx="30" cy="30" r="6" fill="#C4D3D8" /><circle cx="50" cy="30" r="6" fill="#C4D3D8" /><circle cx="70" cy="30" r="6" fill="#C4D3D8" />
            <rect x="96" y="18" width="300" height="24" rx="12" fill="#FFFFFF" />
            <text x="246" y="35" textAnchor="middle" fontFamily={F} fontSize="13" fill="#3E5A63">bbm.business</text>
            <rect x="30" y="72" width="500" height="42" rx="10" fill="#FFFFFF" stroke="#B9CBD1" strokeWidth="2" />
            <circle cx="54" cy="92" r="7" fill="none" stroke="#006F85" strokeWidth="2.4" />
            <path d="M59 97l6 6" stroke="#006F85" strokeWidth="2.4" strokeLinecap="round" />
            <text x="76" y="97" fontFamily={F} fontSize="14" fill="#3E5A63">Search products and sellers</text>
            <rect x="440" y="78" width="82" height="30" rx="8" fill="#D2462B" />
            <text x="481" y="98" textAnchor="middle" fontFamily={H} fontSize="13" fontWeight="700" fill="#FFFFFF">Search</text>
            <rect x="30" y="128" width="64" height="26" rx="8" fill="#006F85" />
            <text x="62" y="146" textAnchor="middle" fontFamily={F} fontSize="12" fontWeight="600" fill="#FFFFFF">All</text>
            {[["Packaging", 102, 104], ["Food", 214, 86], ["Chemicals", 308, 104]].map(([t, x, w]) => (
                <g key={t}>
                    <rect x={x} y="128" width={w} height="26" rx="8" fill="#FFFFFF" stroke="#006F85" strokeWidth="1.5" />
                    <text x={x + w / 2} y="146" textAnchor="middle" fontFamily={F} fontSize="12" fontWeight="600" fill="#006F85">{t}</text>
                </g>
            ))}
            <MockCard dx={0}>
                <rect x="42" y="184" width="132" height="86" rx="8" fill="#D2462B" />
                <rect x="76" y="206" width="64" height="48" fill="#FFFFFF" /><rect x="100" y="206" width="16" height="48" fill="#C5E0E6" />
                <rect x="94" y="192" width="46" height="18" fill="#FBECE8" />
            </MockCard>
            <MockCard dx={172}>
                <rect x="42" y="184" width="132" height="86" rx="8" fill="#006F85" />
                <path d="M108 198v54" stroke="#C5E0E6" strokeWidth="4" />
                <g fill="#E1F0F3">
                    <ellipse cx="96" cy="212" rx="6" ry="12" transform="rotate(-28 96 212)" /><ellipse cx="120" cy="212" rx="6" ry="12" transform="rotate(28 120 212)" />
                    <ellipse cx="96" cy="234" rx="6" ry="12" transform="rotate(-28 96 234)" /><ellipse cx="120" cy="234" rx="6" ry="12" transform="rotate(28 120 234)" />
                </g>
            </MockCard>
            <MockCard dx={344}>
                <rect x="42" y="184" width="132" height="86" rx="8" fill="#00505F" />
                <path d="M88 202h24v22l26 46h-76l26-46z" fill="#E1F0F3" transform="translate(4 -2)" />
                <path d="M76 262h60l-8-14h-44z" fill="#D2462B" transform="translate(4 -2)" />
            </MockCard>
        </svg>
    );
}

const catSvg = (label, bg, children) => (
    <svg className="cat-art" viewBox="0 0 340 150" preserveAspectRatio="xMidYMid slice" role="img" aria-label={label} style={{ background: bg }}>
        {children}
    </svg>
);

export const CategoryArt = {
    automotive: () =>
        catSvg("Illustration of gears", "#006F85", <>
            <rect y="128" width="340" height="22" fill="#00505F" />
            <circle cx="220" cy="72" r="52" fill="none" stroke="#FFFFFF" strokeWidth="16" strokeDasharray="11 9.4" />
            <circle cx="220" cy="72" r="42" fill="#00505F" />
            <circle cx="220" cy="72" r="16" fill="#FFFFFF" /><circle cx="220" cy="72" r="6" fill="#D2462B" />
            <circle cx="132" cy="104" r="30" fill="none" stroke="#D2462B" strokeWidth="12" strokeDasharray="8 7.2" />
            <circle cx="132" cy="104" r="24" fill="#00505F" /><circle cx="132" cy="104" r="9" fill="#D2462B" />
            <rect x="30" y="118" width="40" height="10" rx="3" fill="#C5E0E6" /><rect x="80" y="118" width="20" height="10" rx="3" fill="#C5E0E6" />
        </>),
    packaging: () =>
        catSvg("Illustration of stacked cartons", "#D2462B", <>
            <rect y="128" width="340" height="22" fill="#B93A20" />
            <rect x="70" y="58" width="104" height="70" fill="#FFFFFF" /><rect x="112" y="58" width="20" height="70" fill="#C5E0E6" />
            <rect x="184" y="78" width="84" height="50" fill="#F2F6F7" /><rect x="216" y="78" width="20" height="50" fill="#C5E0E6" />
            <rect x="92" y="14" width="76" height="44" fill="#FBECE8" /><rect x="120" y="14" width="18" height="44" fill="#C5E0E6" />
            <rect x="196" y="40" width="50" height="38" fill="#FBECE8" /><rect x="214" y="40" width="14" height="38" fill="#C5E0E6" />
            <path d="M82 80h30M146 80h18" stroke="#006F85" strokeWidth="3" />
        </>),
    food: () =>
        catSvg("Illustration of wheat under a setting sun", "#00505F", <>
            <circle cx="250" cy="96" r="40" fill="#D2462B" />
            <rect y="116" width="340" height="34" fill="#00414E" />
            <path d="M170 150V30" stroke="#C5E0E6" strokeWidth="4" />
            <g fill="#E1F0F3">
                <ellipse cx="156" cy="48" rx="8" ry="16" transform="rotate(-28 156 48)" /><ellipse cx="184" cy="48" rx="8" ry="16" transform="rotate(28 184 48)" />
                <ellipse cx="156" cy="74" rx="8" ry="16" transform="rotate(-28 156 74)" /><ellipse cx="184" cy="74" rx="8" ry="16" transform="rotate(28 184 74)" />
                <ellipse cx="156" cy="100" rx="8" ry="16" transform="rotate(-28 156 100)" /><ellipse cx="184" cy="100" rx="8" ry="16" transform="rotate(28 184 100)" />
                <ellipse cx="170" cy="24" rx="7" ry="14" />
            </g>
            <path d="M100 150V70M80 150V92M240 150V80M262 150V98" stroke="#006F85" strokeWidth="3" />
            <g fill="#006F85"><ellipse cx="100" cy="62" rx="6" ry="12" /><ellipse cx="80" cy="84" rx="6" ry="11" /><ellipse cx="240" cy="72" rx="6" ry="12" /><ellipse cx="262" cy="90" rx="6" ry="11" /></g>
        </>),
    chemicals: () =>
        catSvg("Illustration of laboratory flasks", "#00414E", <>
            <path d="M150 14h40v34l42 74a8 8 0 0 1-7 12H115a8 8 0 0 1-7-12l42-74z" fill="#E1F0F3" />
            <path d="M126 96h88l18 28a8 8 0 0 1-7 12H115a8 8 0 0 1-7-12z" fill="#D2462B" />
            <rect x="146" y="10" width="48" height="8" rx="3" fill="#FFFFFF" />
            <circle cx="160" cy="112" r="5" fill="#FFFFFF" opacity=".8" /><circle cx="184" cy="120" r="4" fill="#FFFFFF" opacity=".8" /><circle cx="172" cy="84" r="4" fill="#FFFFFF" opacity=".7" />
            <rect x="258" y="70" width="44" height="66" rx="5" fill="#C5E0E6" /><rect x="258" y="100" width="44" height="36" rx="5" fill="#006F85" />
            <rect x="52" y="86" width="40" height="50" rx="6" fill="#006F85" /><rect x="62" y="70" width="20" height="18" fill="#C5E0E6" />
            <rect y="136" width="340" height="14" fill="#00505F" />
        </>),
    fmcg: () =>
        catSvg("Illustration of a shopping bag, bottle and cans", "#FBECE8", <>
            <rect y="132" width="340" height="18" fill="#F2D3CB" />
            <rect x="56" y="78" width="36" height="54" rx="5" fill="#00505F" /><rect x="56" y="94" width="36" height="14" fill="#FFFFFF" />
            <rect x="98" y="88" width="30" height="44" rx="5" fill="#006F85" /><rect x="98" y="102" width="30" height="10" fill="#FFFFFF" />
            <rect x="146" y="46" width="92" height="86" rx="6" fill="#D2462B" />
            <path d="M170 46v-8a22 22 0 0 1 44 0v8" fill="none" stroke="#00505F" strokeWidth="6" />
            <path d="M170 82l16 16 28-28" fill="none" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="262" y="56" width="30" height="76" rx="8" fill="#006F85" /><rect x="270" y="38" width="14" height="20" rx="3" fill="#00505F" /><rect x="262" y="84" width="30" height="20" fill="#FFFFFF" />
        </>),
    industrial: () =>
        catSvg("Illustration of a wrench and bolt", "#3E5A63", <>
            <rect y="128" width="340" height="22" fill="#2F4850" />
            <g transform="translate(84 14) scale(5)" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
            </g>
            <polygon points="252,44 282,44 297,70 282,96 252,96 237,70" fill="#D2462B" /><circle cx="267" cy="70" r="12" fill="#3E5A63" />
            <rect x="24" y="108" width="14" height="20" fill="#C5E0E6" /><rect x="20" y="102" width="22" height="8" fill="#C5E0E6" />
        </>),
};

export function WorldMap() {
    const dots = [[240, 90], [80, 190], [262, 310], [560, 110], [560, 322]];
    const labels = [[240, 72, "Europe"], [80, 172, "Americas"], [262, 338, "Middle East & Africa"], [560, 92, "Asia-Pacific"], [560, 350, "Oceania"]];
    return (
        <svg className="world" viewBox="0 0 640 420" role="img" aria-label="Illustrative map of trade routes from Rajkot, India to Europe, the Middle East and Africa, the Americas, Asia-Pacific and Oceania">
            <g fill="none" stroke="rgba(255,255,255,.10)" strokeWidth="1.5">
                <ellipse cx="320" cy="210" rx="290" ry="190" /><ellipse cx="320" cy="210" rx="190" ry="190" /><ellipse cx="320" cy="210" rx="90" ry="190" />
                <path d="M30 210H610M320 20V400M70 120H570M70 300H570" />
            </g>
            <g fill="none" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3 7" strokeLinecap="round" opacity=".9">
                <path d="M410 225Q310 90 240 90" /><path d="M410 225Q240 40 80 190" /><path d="M410 225Q330 250 262 310" />
                <path d="M410 225Q500 130 560 110" /><path d="M410 225Q520 270 560 322" />
            </g>
            <g fill="#FFFFFF">{dots.map(([x, y]) => <circle key={x + "" + y} cx={x} cy={y} r="7" />)}</g>
            <g fill="#FFFFFF" fontFamily={F} fontSize="14" fontWeight="600" textAnchor="middle">
                {labels.map(([x, y, t]) => <text key={t} x={x} y={y}>{t}</text>)}
            </g>
            <circle cx="410" cy="225" r="26" fill="#D2462B" opacity=".25" />
            <circle cx="410" cy="225" r="14" fill="#D2462B" /><circle cx="410" cy="225" r="5" fill="#FFFFFF" />
            <text x="410" y="262" fill="#FFFFFF" fontFamily={H} fontSize="16" fontWeight="800" textAnchor="middle">Rajkot, India</text>
        </svg>
    );
}