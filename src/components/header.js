import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import logo from "../images/logos/hylo-logo-white.svg"
import Menu from "./menu"
import Button from "./button"
import menuToggleHamburger from "../images/icon/menu_hamburger.svg"
import menuToggleX from "../images/icon/menu_x.svg"

const Header = ({ siteTitle }) => {
  const [isOpen, setOpen] = useState(false);
  const openStyle = isOpen ? `open` : ``;

  return (
    <header style={{
      backgroundColor: `#40A1DD`,
      display: `flex`,
      justifyContent: `space-between`,
      alignItems: `center`,
      margin: `0 auto`,
      padding: `0 25px`,
      position: `absolute`,
      top: 0,
      width: `100%`,
      zIndex: `100000`,
    }}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#2b80f0`,
            textDecoration: `none`,
          }}
        >
          <img src={logo} alt="Hylo Logo" />
        </Link>
      </h1>
      <div className="homeMenu">
        <h3><strong>Hylo is in open beta.</strong> We build in the open and you can be a part of it! <Button label="Get Involved" link="/participate/" color={`#40A1DD`} fontSize="16px" /></h3>
        <div className={`menuWrapper ${openStyle}`}>
          <button className="menuToggle" onClick={() => setOpen(!isOpen)}>
            <img src={menuToggleHamburger} alt="Open menu icon" className="openMenu" />
            <img src={menuToggleX} alt="Close menu icon" className="closeMenu" />
          </button>
          <div className="menuBg"
            onClick={() => setOpen(false)}
            onKeyPress={(e) => e.key === "Enter" ? setOpen(false) : ''}
            role="button"
            tabIndex={0}
            aria-label="Close Menu"></div>
          <div className="menuContainer">
            <Menu closeMenu={() => setOpen(false)} />
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  logo: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  logo: ``,
}

export default Header
