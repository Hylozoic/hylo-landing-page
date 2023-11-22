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
            <p><Link to="/participate/#work-with-us">Work with us</Link></p>
            <p><Link to="/participate/#contribute">Contribute to Hylo</Link></p>
          </li>
          <li>
            <h4>
              <Link to="/agreements/">Hylo Agreements</Link>
            </h4>
            <p><Link to="/agreements/#values">Hylo Values</Link></p>
            <p><Link to="/agreements/#hylo-platform-agreements">Hylo Platform Agreements</Link></p>
            <p><Link to="/agreements/#terms-of-use">Our Commitments &amp; Terms of Use</Link></p>
            <p><Link to="/agreements/#privacy-policy">Privacy Policy</Link></p>
          </li>
        </ul>
        <div className="footerAcknowledgement">
          <p>Terran Collective acknowledges that we gather on the unceded territory of the Lisjan Ohlone people, 
          who have lived in Huchiun (colonially known as the East Bay of the California Bay Area, USA) from time immemorial. 
          We honor our relationship with our Ohlone neighbors and our shared responsibility 
          to their homeland where we reside today.</p>
        </div>
        <div className="footerSeal">
          <img src={logo} alt="Hylo Logo" />
          <h3>Hylo = hylozoism = the idea that matter is alive and in service to life</h3>
          <h2>all . beings . thriving</h2>
        </div>
      </footer>
  );
}

export default Footer
