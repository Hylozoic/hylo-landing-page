import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logoWhite from "../images/logos/hylo-logo-white.svg"

const Menu = ({ closeMenu }) => (
  <div className="menu">
    <Link to="/">
      <div onClick={closeMenu} onKeyPress={(e) => e.key === "Enter" ? closeMenu : ''} role="button" tabIndex="0" aria-label="Close Menu">
        <img src={logoWhite} alt="Hylo - Homepage" />
      </div>
    </Link>
    <ul>
      <li>
        <h3>
          <Link to="/about/" onClick={closeMenu}>About Hylo</Link>
        </h3>
        <ul>
          <li><Link to="/about/#vision" onClick={closeMenu}>Vision &amp; Purpose</Link></li>
          <li><Link to="/about/#values" onClick={closeMenu}>Values &amp; Agreements</Link></li>
          <li><Link to="/about/#product-journey" onClick={closeMenu}>Product Journey</Link></li>
          <li><Link to="/about/#team" onClick={closeMenu}>Team</Link></li>
        </ul>
      </li>
      <li>
        <h3>
          <Link to="/guide/" onClick={closeMenu}>Using Hylo</Link>
        </h3>
        <ul>
            <li><Link to="/guide/#community-stewardship" onClick={closeMenu}>Community Stewardship Course</Link></li>
          <li><Link to="/guide/#case-studies" onClick={closeMenu}>Case Studies</Link></li>
          <li><Link to="/guide/#documentation" onClick={closeMenu}>Documentation</Link></li>
          <li><Link to="/guide/#code" onClick={closeMenu}>Code</Link></li>
        </ul>
      </li>
      <li>
        <h3>
          <Link to="/participate/" onClick={closeMenu}>Participate in Building Hylo</Link>
        </h3>
        <ul>
          <li><Link to="/participate/#join" onClick={closeMenu}>Join our open-source community</Link></li>
          <li><Link to="/participate/#gatherings" onClick={closeMenu}>Attend a community call</Link></li>
          <li><Link to="/participate/#how-we-build" onClick={closeMenu}>How we build Hylo</Link></li>
          <li><Link to="/participate/#contribute" onClick={closeMenu}>Contribute to Hylo</Link></li>
        </ul>
      </li>
      <li className="menuButtonWrapper">
        <a className="button menuButton" target="_blank" rel="noopener noreferrer" href="http://eepurl.com/cWIga1">Newsletter</a>
      </li>
    </ul>
    <div className="acknowledgments">
      <p>Terran Collective is based in <a href="http://www.ramaytush.com/" target="_blank" rel="noopener noreferrer">Ramaytush Ohlone territory, in Yelamu</a>, which is also called San Francisco.</p>
    </div>
  </div>
)

Menu.propTypes = {
  closeMenu: PropTypes.func
}

export default Menu
