import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import YungaLogo from "../../assets/logos/YungaTransLogo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useScrollPositionHook from "../../helpers/useScrollPositionHook";
import NativeListener from "react-native-listener";
import { useState } from "react";

const HeaderNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const scrollPosition = useScrollPositionHook();
  const [toggleSwitch, setToggleSwitch] = useState(false);

  const isActive = (current) =>
    current !== "/"
      ? location.pathname.includes(current)
        ? true
        : false
      : location.pathname === current
      ? true
      : false;

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={
        scrollPosition > 30.0
          ? "nav-header nav-transition"
          : "nav-header-top nav-transition"
      }
      sticky="top"
      onToggle={(event) => setToggleSwitch(event)}
    >
      <Container style={{ transition: "all 4s" }}>
        {/* Branding */}
        <Navbar.Brand href="/">
          <img src={YungaLogo} alt="Yunga-Trans Logo" height={50} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <svg
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
            className={toggleSwitch ? "ham hamRotate ham1 active" : "ham hamRotate ham1"}
            viewBox="0 0 100 100"
            width="auto"
          >
            <path
              className="line top"
              d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
            />
            <path className="line middle" d="m 30,50 h 40" />
            <path
              className="line bottom"
              d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
            />
          </svg>
        </Navbar.Toggle>

        {/* Navigation */}
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav
            variant="underline"
            navbar={true}
            navbarScroll={true}
            defaultActiveKey={
              isActive("services")
                ? "/services"
                : isActive("/company")
                ? "/company"
                : "/"
            }
          >
            <Nav.Link
              as={Link}
              to="/"
              className="me-5"
              eventKey="/"
              active={isActive("/")}
            >
              Home
            </Nav.Link>

            <NativeListener onDoubleClick={() => navigate("/services")}>
              <NavDropdown
                eventKey={"/services"}
                title="Services"
                id="collasible-nav-dropdown"
                active={isActive("/services")}
                className="me-5"
                renderMenuOnMount={true}
              >
                <NavDropdown.Item
                  as={Link}
                  to="/services"
                  eventKey={"/services"}
                  active={location.pathname === "/services"}
                >
                  Overview
                </NavDropdown.Item>

                <p className="nav-small-text">Transportation</p>
                <NavDropdown.Divider />

                <NavDropdown.Item
                  as={Link}
                  to="/services/air"
                  eventKey={"/services/air"}
                >
                  Air
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/services/sea"
                  eventKey={"/services/sea"}
                >
                  Sea
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/services/land"
                  eventKey={"/services/land"}
                >
                  In-Land
                </NavDropdown.Item>

                <p className="nav-small-text">Comprehensive Solutions</p>
                <NavDropdown.Divider />

                <NavDropdown.Item
                  eventKey={"/services/onboard"}
                  as={Link}
                  to="/services/onboard"
                >
                  On-Board Courier
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey={"/services/transloading"}
                  as={Link}
                  to="/services/transloading"
                >
                  Transloading
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey={"/services/multimodal"}
                  as={Link}
                  to="/services/multimodal"
                >
                  Multi-Modal
                </NavDropdown.Item>

                <p className="nav-small-text">Customs & Compliance</p>
                <NavDropdown.Divider />

                <NavDropdown.Item
                  eventKey={"/services/clearance"}
                  as={Link}
                  to="/services/clearance"
                >
                  Customs Clearance
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey={"/services/consultations"}
                  as={Link}
                  to="/services/consultations"
                >
                  Consultation
                </NavDropdown.Item>
              </NavDropdown>
            </NativeListener>

            <Nav.Link
              eventKey="/company"
              as={Link}
              to="/company"
              className="me-5"
              active={isActive("/company")}
            >
              Company
            </Nav.Link>

            <Nav.Link
              eventKey="/connect"
              as={Link}
              to="/connect"
              className="me-5"
              active={isActive("/connect")}
            >
              Connect
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNav;
