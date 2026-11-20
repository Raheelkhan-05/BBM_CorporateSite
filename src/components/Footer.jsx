export default function Footer() {
    return (
        <footer className="footer">
            <div className="wrap">
                <div className="foot-grid">
                    <div className="foot-brand">
                        <div className="brand brand-light">
                            <img src="/assets/logo-white.png" alt="Brand Brigade Marketing logo in white" />
                            <span className="brand-text">
                                <span className="hd brand-name">Brand Brigade</span>
                                <span className="brand-sub">Marketing Pvt. Ltd.</span>
                            </span>
                        </div>
                        <p>A registered Indian trading and sourcing company running two connected businesses: BBM Export and BBM Marketplace.</p>
                    </div>
                    <div>
                        <div className="hd foot-h">Export</div>
                        <div className="foot-links">
                            <a href="#export">What we do</a><a href="#reach">Global reach</a><a href="#process">How we work</a><a href="#enquiry">Send an enquiry</a>
                        </div>
                    </div>
                    <div>
                        <div className="hd foot-h">Marketplace</div>
                        <div className="foot-links">
                            <a href="https://www.bbm.business" target="_blank" rel="noopener">Visit bbm.business</a>
                            <a href="#categories">Product categories</a>
                            <a href="https://www.bbm.business/pricing" target="_blank" rel="noopener">Pricing &amp; fees</a>
                            <a href="#connect">How they connect</a>
                        </div>
                    </div>
                    <div>
                        <div className="hd foot-h">Company</div>
                        <div className="foot-links">
                            <a href="#about">About us</a><a href="#facts">Facts &amp; figures</a><a href="#verify">Verify us</a><a href="#faq">FAQ</a>
                            <a href="https://bbmpvtltd.com/terms-conditions" target="_blank" rel="noopener">Terms &amp; Conditions</a>
                            <a href="https://bbmpvtltd.com/privacy-policy" target="_blank" rel="noopener">Privacy Policy</a>
                        </div>
                    </div>
                    <div>
                        <div className="hd foot-h">Reach us</div>
                        <div className="foot-links">
                            <a href="mailto:info@bbmpvtltd.com">info@bbmpvtltd.com</a>
                            <a href="tel:+918487047774">+91 84870 47774</a>
                            <span>Rajkot, Gujarat, India</span>
                        </div>
                    </div>
                </div>
                <div className="foot-legal">
                    <p>Brand Brigade Marketing Private Limited operates an export and sourcing business and an online B2B marketplace at bbm.business. It is not a manufacturer, customs authority or financial institution. All trade is conducted in line with the laws of India and of the destination country, including applicable sanctions and export controls. Third-party brand names mentioned belong to their owners and imply no endorsement.</p>
                    <p>© Brand Brigade Marketing Private Limited · CIN U74999GJ2017PTC097922</p>
                </div>
            </div>
        </footer>
    );
}