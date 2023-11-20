import { Link } from "gatsby"
import * as React from "react"
import logo from "../images/logos/hylo-logo-white.svg"

const Footer = () => {

  return (
    <footer>
        <h3>There is a place set for you at our table.</h3>
        <ul>
          <li>
            <h4>
              <Link to="/about/">About Hylo</Link>
            </h4>
            <p><Link to="/about/#vision">Vision &amp; Purpose</Link></p>
            <p><Link to="/about/#values">Values &amp; Agreements</Link></p>
            <p><Link to="/about/#product-journey">Product Journey</Link></p>
            <p><Link to="/about/#team">Team</Link></p>
          </li>
          <li>
            <h4>
              <Link to="/guide/">Using Hylo</Link>
            </h4>
            <p><Link to="/guide/#community-stewardship">Community Stewardship Course</Link></p>
            <p><Link to="/guide/#case-studies">Case Studies</Link></p>
            <p><Link to="/guide/#documentation">Documentation</Link></p>
            <p><Link to="/guide/#code">Code</Link></p>
          </li>
          <li>
            <h4>
              <Link to="/participate/">Participate in Building Hylo</Link>
            </h4>
            <p><Link to="/participate/#join">Join our open-source community</Link></p>
            <p><Link to="/participate/#gatherings">Attend a community call</Link></p>
            <p><Link to="/participate/#how-we-build">How we build Hylo</Link></p>
            <p><Link to="/participate/#contribute">Contribute to Hylo</Link></p>
          </li>
          <li>
            <h4>
              <Link to="/agreements/">Hylo Agreements</Link>
            </h4>
            <p><Link to="/agreements/#agreements">Hylo Platform Agreements</Link></p>
            <p><Link to="/agreements/#code-of-conduct">Code of Conduct</Link></p>
            <p><Link to="/agreements/#terms">Terms of Service</Link></p>
            <p><Link to="/agreements/#privacy-policy">Privacy Policy</Link></p>
          </li>
        </ul>
        <div className="footerAcknowledgement">
          <p>Terran Collective acknowledges that we gather on the traditional territory of the Lisjan Ohlone people, 
          who have lived in Huchiun (colonially known as the East Bay of the California Bay Area, USA) from time immemorial. 
          We honor our relationship with our Ohlone neighbors and our shared responsibility 
          to their homeland where we reside today.</p>
        </div>
        <img src={logo} alt="Hylo Logo" />
        <h3>Hylo = hylozoism = the idea that matter is alive and in service to life</h3>
        <h2>all . beings . thriving</h2>
      </footer>
  );
}

export default Footer
