import { Link } from "gatsby"
import * as React from "react"
import logo from "../images/logos/hylo-logo-white.svg"
import external from "../images/icon/external.svg"

const Footer = () => {

  return (
    <footer>
        <h3>There is a place set for you at our table.</h3>
        <ul>
          <li>
            <h4>
              <Link to="/about/">About Hylo</Link>
            </h4>
            <p><Link to="/about/#vision">Our Purpose &amp; Vision</Link></p>
            <p><Link to="/about/#how-we-work">How We Work: Participatory Design</Link></p>
            <p><Link to="/about/#hylo-stewardship">Hylo's Stewardship</Link></p>
            <p><Link to="/about/#team">Team</Link></p>
          </li>
          <li>
            <h4>
              <Link to="/guide/">Using Hylo</Link>
            </h4>
            <p><a target="_blank" rel="noopener noreferrer" href="https://hylozoic.gitbook.io/hylo/guides/hylo-user-guide">Member Guide <img src={external} alt="External Link" /></a></p>
            <p><a target="_blank" rel="noopener noreferrer" href="https://hylozoic.gitbook.io/hylo/guides/onboarding-your-group">Steward Guide <img src={external} alt="External Link" /></a></p>
            <p><a target="_blank" rel="noopener noreferrer" href="https://hylozoic.gitbook.io/hylo/">Documentation <img src={external} alt="External Link" /></a></p>
            <p><a target="_blank" rel="noopener noreferrer" href="https://hylozoic.gitbook.io/hylo/about/community-stewardship-support-program-csaas">Community Stewardship Support <img src={external} alt="External Link" /></a></p>
            <p><a target="_blank" rel="noopener noreferrer" href="https://github.com/Hylozoic">Code <img src={external} alt="External Link" /></a></p>
          </li>
          <li>
            <h4>
              <Link to="/participate/">Participate in Building Hylo</Link>
            </h4>
            <p><Link to="/participate/#join">Join our open-source community</Link></p>
            <p><Link to="/participate/#gatherings">Attend a community call</Link></p>
            <p><Link to="/participate/#partner-with-us">Partner with us</Link></p>
            <p><Link to="/participate/#contribute">Contribute to Hylo</Link></p>
          </li>
          <li>
            <h4>
              <Link to="/agreements/">Hylo Agreements</Link>
            </h4>
            <p><Link to="/agreements/#values">Hylo Values</Link></p>
            <p><Link to="/agreements/#code-of-conduct">Code of Conduct</Link></p>
            <p><Link to="/agreements/#hylo-platform-agreements">Hylo Platform Agreements</Link></p>
            <p><Link to="/terms">Terms of Use</Link></p>
            <p><Link to="/privacy">Privacy Policy</Link></p>
          </li>
        </ul>
        <div className="footerSeal">
          <img src={logo} alt="Hylo Logo" />
          <h3>The name "hylo" comes from <a href="https://en.wikipedia.org/wiki/Hylozoism">hylozoism</a>, which means: <em>everything is alive</em></h3>
        </div>
        <div className="footerAcknowledgement">
          <p>Hylo emerged from the Bay Area Bioregion, supported and sustained by the mighty Sacramento River. This territory has been stewarded since before time by the peoples here. The place that birthed Hylo is known to the Lisjan Ohlone as Huichin. Hylo now receives contributions from all over the world. Wherever we builders go, we will honor truth in history. Wherever we we builders are we seek to be in right relationship -- to the living world, and its stewards.</p>
        </div>
      </footer>
  );
}

export default Footer
