import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import Menu from "./menu"

import logo from "../images/logos/hylo-logo-white.svg"
import menuToggleHamburger from "../images/icon/menu_hamburger.svg"
import menuToggleX from "../images/icon/menu_x.svg"

import "../styles/styles.scss"

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
          {/* <h3><strong>Hylo is in open beta.</strong> We build in the open and you can be a part of it!</h3> */}
          <h3>
            <a href='https://opencollective.com/hylo/contribute/matching-grant-2024-80795' target='_blank'>Support Hylo</a> before the end of the year with a tax-deductible donation and have it <a href='https://opencollective.com/hylo/contribute/matching-grant-2024-80795' target='_blank'>matched by a generous donor!</a>
          </h3>
          <a href='https://opencollective.com/hylo/contribute/matching-grant-2024-80795' target='_blank' className="participateCTA">Donate</a>
          {/* <Link to="/participate/" className="participateCTA">Get involved</Link> */}
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
