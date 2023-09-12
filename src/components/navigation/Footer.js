import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import YungaLogo from "../../assets/logos/YungaTransLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <Container className="content justify-content-md-center align-items-md-center">
        <Row sm={12} lg={12} className="footer-nav-row">
          <Col sm={12} lg={4} className="logo-section">
            <img
              src={YungaLogo}
              className="logo"
              alt="Yunga-Trans Logo"
              width={70}
            />
            <p className="logo-text">Yunga-Trans {"(Pvt.)"} Ltd.</p>
            <p className="foot-address">
              No: 105/4, Kudamaduwa Road, Kesbewa,
              <br />
              Greater Colombo, Sri Lanka
            </p>
          </Col>
          <Col sm={12} lg={8} className="sitemap-section">
            <Row className="sitemap-row">
              <Col>
                <p className="sitemap-title">Transportation</p>
                <p className="sitemap-link">
                  <Link to={"/services/air"}>Air</Link>
                </p>
                <p className="sitemap-link">
                  <Link to={"/services/sea"}>Sea</Link>
                </p>
                <p className="sitemap-link">
                  <Link to={"/services/land"}>In-Land</Link>
                </p>
              </Col>
              <Col>
                <p className="sitemap-title">Comprehensive Solutions</p>
                <p className="sitemap-link">
                  <Link to={"/services/onboard"}>On-Board Courier</Link>
                </p>
                <p className="sitemap-link">
                  <Link to={"/services/transloading"}>Transloading</Link>
                </p>
                <p className="sitemap-link">
                  <Link to={"/services/multimodal"}>Multi-Modal</Link>
                </p>
              </Col>
              <Col>
                <p className="sitemap-title">Customs & Compliance</p>
                <p className="sitemap-link">
                  {" "}
                  <Link to={"/services/clearance"}>Customs Clearance</Link>
                </p>
                <p className="sitemap-link">
                  <Link to={"/services/consultations"}>Consultations</Link>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr className="divider" />
        <Row>
          <div className="footer-last-row">
            <div className="copyright-text">
              <p>
                &copy; {new Date().getUTCFullYear()} Yunga-Trans (Pvt) Ltd. All
                rights reserved.
              </p>
              <p> &nbsp;&nbsp; &#x2022; &nbsp;&nbsp;&nbsp;</p>
              <p>
                <a
                  href="https://nuvinga.github.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  👨🏽‍💻 nuvinga
                </a>
              </p>
            </div>

            <div className="footer-nav">
              <p>
                <Link to="/">Home</Link>&nbsp;&nbsp; &#x2022; &nbsp;&nbsp;
              </p>
              <p>
                <Link to="/services">Services</Link>&nbsp;&nbsp; &#x2022;
                &nbsp;&nbsp;
              </p>
              <p>
                <Link to="/company">Company</Link>&nbsp;&nbsp; &#x2022;
                &nbsp;&nbsp;
              </p>
              <p>
                <Link to="/connect">Connect</Link>&nbsp;&nbsp; &#x2022;
                &nbsp;&nbsp;
              </p>
              <p>
                <Link to="/terms-conditions">Terms & Conditions</Link>
                &nbsp;&nbsp; &#x2022; &nbsp;&nbsp;
              </p>
              <p>
                <Link to="/privacy-statement">Privacy Policy</Link>
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
