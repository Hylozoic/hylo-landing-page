import PropTypes from "prop-types"
import React, { useState } from "react"
import "../styles/styles.scss"
import { Link } from "gatsby"
import Menu from "./menu"
import Button from "./button"
import logo from "../images/logos/hylo-logo-white.svg"
import menuToggleHamburger from "../images/icon/menu_hamburger.svg"
import menuToggleX from "../images/icon/menu_x.svg"

const Header = ({ siteTitle }) => {
  const [isOpen, setOpen] = useState(false);
  const openStyle = isOpen ? `open` : ``;

  return (
    <header className="header">
      <div className="homeMenu">
        <div className="menuCTA">
          <Link to='/' className="homeLogo">
              <img src={logo} alt="Hylo Logo" />
          </Link>
          <h3><strong>Hylo is in open beta.</strong> We build in the open and you can be a part of it!</h3>
          <Button label="Get Involved" link="/participate/" color="#40A1DD" fontSize="16px" />
        </div>
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
