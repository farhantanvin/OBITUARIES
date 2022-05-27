import React from "react";
import { withRouter } from "react-router";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import MenuIcon from "../../assets/menu.svg";
import CrossIcon from "../../assets/cross.svg";
import Styles from "./navbar.module.scss";

class AppNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileNavBar: false,
      showNavbar: false,
    };
  }

  setMobileNav(option) {
    this.setState({ mobileNavBar: option });
  }

  setShowNavbar(option) {
    this.setState({ showNavbar: option });
  }

  render() {
    const getLink = (path, text) => (
      <LinkContainer
        onClick={() => {
          this.setMobileNav(false);
        }}
        to={path}
        className={Styles.navLink}
        activeClassName={Styles.activeLink}
      >
        <Nav.Link>{text}</Nav.Link>
      </LinkContainer>
    );

    return (
      <Navbar
        collapseOnSelect
        expand="md"
        variant="dark"
        className={Styles.navbar}
      >
        <Link
          to="/dashboard"
          onClick={() => {
            this.setMobileNav(false);
          }}
          className={Styles.navLogo}
        >
          <img
            src={Logo}
            alt="May Cherished  Memories Bring You Moments of Comfort"
          />
        </Link>
        <Navbar.Toggle
          className={Styles.navbarToggle}
          onClick={() => {
            this.setMobileNav(true);
          }}
          data-toggle="collapse"
          data-target="#navbar-collapse"
          aria-controls="navbar-collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img className={Styles.menuIcon} src={MenuIcon} alt="menu" />
        </Navbar.Toggle>
        <Navbar.Collapse
          id="navbar-collapse"
          className={`navbar-collapse ${Styles.navbarCollapse} ${
            this.state.mobileNavBar ? Styles.showNavbar : Styles.collapseNavbar
          }`}
        >
          <Navbar.Toggle
            className={Styles.closeNavbarToggle}
            onClick={() => {
              this.setMobileNav(false);
            }}
          >
            <img className={Styles.closeIcon} src={CrossIcon} alt="close" />
          </Navbar.Toggle>
          <Nav className={`ml-auto ${Styles.navLinks}`}>
            {getLink("/dashboard", "Home")}
            {getLink("/obituaries", "Obituaries")}
            {getLink("/plans-and-pricing", "Plans & Pricing")}
          </Nav>
          <Nav className={`ml-auto ${Styles.navLinks}`}>
            <button className={Styles.recent_loss}>Recent Loss</button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(AppNavbar);
