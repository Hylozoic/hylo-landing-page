import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logoWhite from "../images/logos/hylo-logo-white.svg"
import external from "../images/icon/external.svg"

const Menu = ({ closeMenu }) => (
  <div className="menu">
    <Link to="/">
      <div className="menuHome" onClick={closeMenu} onKeyPress={(e) => e.key === "Enter" ? closeMenu : ''} role="button" tabIndex="0" aria-label="Close Menu">
        <img src={logoWhite} alt="Hylo - Homepage" />
      </div>
    </Link>
    <div className="menuPages">
      <div>
        <h3>
          <Link to="/about/" onClick={closeMenu}>About Hylo</Link>
        </h3>
        <ul>
          <li><Link to="/about/#vision" onClick={closeMenu}>Our Purpose &amp; Vision</Link></li>
          <li><Link to="/about/#how-we-work" onClick={closeMenu}>How We Work: Participatory Design</Link></li>
          <li><Link to="/about/#hylo-stewardship" onClick={closeMenu}>Hylo's Stewardship</Link></li>
          <li><Link to="/about/#team" onClick={closeMenu}>Team</Link></li>
        </ul>
      </div>
      <div>
        <h3>Using Hylo</h3>
        <ul>
          <li><a target="_blank" rel="noopener noreferrer" href="https://hylozoic.gitbook.io/hylo/guides/hylo-user-guide">Member Guide <img src={external} alt="External Link" /></a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://hylozoic.gitbook.io/hylo/guides/onboarding-your-group">Steward Guide <img src={external} alt="External Link" /></a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://hylozoic.gitbook.io/hylo/">Documentation <img src={external} alt="External Link" /></a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://hylozoic.gitbook.io/hylo/about/community-stewardship-support-program-csaas">Community Stewardship Support <img src={external} alt="External Link" /></a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/Hylozoic">Code <img src={external} alt="External Link" /></a></li>
        </ul>
      </div>
      <div>
        <h3>
          <Link to="/participate/" onClick={closeMenu}>Participate</Link>
        </h3>
        <ul>
          <li><Link to="/participate/#join" onClick={closeMenu}>Join our open-source community</Link></li>
          <li><Link to="/participate/#gatherings" onClick={closeMenu}>Attend a community call</Link></li>
          <li><Link to="/participate/#partner-with-us" onClick={closeMenu}>Partner with us</Link></li>
          <li><Link to="/participate/#contribute" onClick={closeMenu}>Contribute to Hylo</Link></li>
        </ul>
      </div>
      <div>
        <h3>
          <Link to="/agreements/" onClick={closeMenu}>Agreements</Link>
        </h3>
        <ul>
          <li><Link to="/agreements/#values" onClick={closeMenu}>Hylo Values</Link></li>
          <li><Link to="/agreements/#code-of-conduct" onClick={closeMenu}>Code of Conduct</Link></li>
          <li><Link to="/agreements/#hylo-platform-agreements" onClick={closeMenu}>Hylo Platform Agreements</Link></li>
          <li><Link to="/terms" onClick={closeMenu}>Terms of Use</Link></li>
          <li><Link to="/privacy" onClick={closeMenu}>Privacy Policy</Link></li>
        </ul>
      </div>
    </div>
  </div>
)

Menu.propTypes = {
  closeMenu: PropTypes.func
}

export default Menu
