import * as React from "react"
import "../styles/styles.scss"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Button from "../components/button"
import Label from "../components/label"
import Tool from "../components/tool"
import leaf from "../images/icon/leaf-icon.svg"
import heart from "../images/icon/heart-icon.svg"
import calendar from "../images/icon/calendar-icon.svg"
import logos from "../images/logos/ecosystem-logos.png"
import pin from "../images/icon/map-pin.svg"
import planet from "../images/planet.png"
import grid from "../images/planetary-grid.png"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div className="hero">
        <div className="headingStyles">
          <h1>Create community<br/>with purpose on Hylo</h1>
          <Button label="Sign Up" link="/sign-up/" background={`linear-gradient(rgba(0,0,0,1), rgba(0,0,0,1)) padding-box,
              linear-gradient(to right, #BB60A8, #40A1DD) border-box`} color="#fff" border={`4px solid transparent`}/>
          <Button label="Log In" link="/log-in/" background={`linear-gradient(rgba(0,0,0,1), rgba(0,0,0,1)) padding-box,
              linear-gradient(to right, #6FCF97, #40A1DD) border-box`} color="#fff" border={`4px solid transparent`}/>
        </div>
      </div>
      <div className="aliveContainer">
        <section className="passion">
          <div className="passionLeft">
            <div data-sal="slide-down"
              data-sal-duration="500"
              data-sal-delay="500"
              data-sal-easing="ease">
              <Label label="Planning a garden day at the lake!" icon={leaf} />
            </div>
            <div data-sal="slide-down"
              data-sal-duration="500"
              data-sal-delay="1000"
              data-sal-easing="ease">
              <Label label="Anyone have extra shovels?" icon={heart} />
            </div>
            <div data-sal="slide-down"
              data-sal-duration="1000"
              data-sal-delay="1500"
              data-sal-easing="easeOutElastic">
              <Label label="Garden Day" icon={calendar} color="#EB5757" />
            </div>
          </div>
          <div className="passionRight">
            <h2>Driven by passion,<br/>
            united by purpose</h2>
            <p>Hylo is the place where people who are passionate about their dreams come together to support each other and make them a reality.</p>
            <p>It's a community where you can <strong>connect with others who share your purpose</strong> and work towards achieving your goals together.</p>
            <div style={{textAlign: `center`}}>
              <h3>Ready to find where you belong?</h3>
              <Button label="Explore Groups" link="/explore/" background={`linear-gradient(93deg, #0DC39F 7.65%, #6FCF97 100%)`} color="#fff" />      
            </div>
          </div>
        </section>
        <section className="alive">
          <div className="aliveLeft">
            <h2>Watch your group<br/>come alive</h2>
            <p>Many online groups struggle with engagement and need a lot of management. 
              On Hylo, groups transform into vibrant, self-organized, collaborative networks.</p>
            <p>Hylo makes it easy for group members to step up and lead projects and events, enabling the group to grow and deepen its impact.</p>
            <div style={{textAlign: `center`}}>
              <h3>Ready to gather your people?</h3>
              <Button label="Create a Group" link="/create/" background={`linear-gradient(93deg, #B162AB 7.65%, #0175D8 100%)`} color="#fff"/>  
            </div>
          </div>
          <div className="aliveRight"></div>
        </section>
      </div>
      <section className="interdependence">
        <div className="interdependenceLeft"></div>
        <div className="interdependenceRight">
          <h2>Designed for<br/>interdependence</h2>
          <p>Work on projects across groups and get help from throughout your network. 
              With cross-group collaboration, you can access more resources and make things happen faster.</p>
        </div>
      </section>
      <section className="toolsContainer">
        <section className="ecosystem">
          <div className="ecosystemContainer">
            <h2>Powering an emerging ecosystem,<br/>building a better world</h2>
            <p>Hylo is an open source project stewarded by Terran Collective alongside partners, contributors and donors from around the world.</p> 
            <p>We build Hylo differently; we work directly with real-world groups solving the problems of the future to co-design exactly what they need, and then share it with the world. 
              Here are just some of the partners and contributors that make Hylo possible.</p>
            <div className="ecosystemLogos">
              <img src={logos} alt="Partner Logos" />
            </div>
            <h3>View Contributors</h3>
            <div className="ecosystemContributors">
              <h2>Hylo is built with care</h2>
              <p>Hylo would not be possible without the generosity, dedication and collaboration of the many contributors 
                that make it all possible. From the current core team, to everyone who has committed code or provided feedback,
                ideas or donations -- you are what makes Hylo possible.</p>
            </div> 
          </div>
        </section>
        <h2 className="toolsTitle">The tools you<br/>need to activate<br/>your group</h2>
        <div className="tools">
          <Tool title="Define your group membrane"
            text="You decide the visibility and accessibility of your group. 
            Whether public and open, or invite-only, create the container that feels right."
            classBg="membrane"
            imgName="membrane-settings.png"
            alt="Group privacy settings"
            index="0" />
          <div className="tool">
            <details closed>
              <summary><h3>Customize your experience</h3></summary>
              <p>Our advanced admin settings make it easy to curate an experience that's perfect for your group culture. 
                Custom views show group members exactly what they need to see and link out to critical resources.</p>
            </details>
          </div>
          <div className="tool">
            <details closed>
              <summary><h3>Grow relationships with collaborators</h3></summary>
              <p>Our web and mobile apps allow community members to deepen relationships and collaborate 
                through discussions, requests, offers, resources, member directories, direct messaging, and chat.</p>
            </details>
          </div>
          <div className="tool">
            <details closed>
              <summary><h3>Host cross-group conversations</h3></summary>
              <p>Share one post with multiple groups, creating a shared conversation for cross-pollination and emergence.</p>
            </details>
          </div>
          <div className="tool">
            <details open>
              <summary><h3>Discover local connections</h3></summary>
              <p>Hylo has a geographic map and specific tools for bioregional and place-based groups, 
                facilitating coordination at the scale regeneration actually happens: locally.</p>
            </details>
          </div>
          <div className="tool">
            <details open>
              <summary><h3>Guide toward action</h3></summary>
              <p>Whether planning an annual meeting or a creek restoration day, 
                Hylo's coordination tools guide groups toward action. 
                Use Projects to kick-start collaboration and Events to gather online or IRL.</p>
            </details>
          </div>
          <div className="tool">
            <details closed>
              <summary><h3>Composable ecosystems</h3></summary>
              <p>Groups can add unlimited subgroups AND join other groups, 
                making it easy to form and navigate large networks. 
                This composability allows people to connect across membranes and work on shared goals.</p>
            </details>
          </div>
          <div className="tool">
            <details closed>
              <summary><h3>Understand your network</h3></summary>
              <p>Hylo is a tool for collective sensemaking, designed to source intelligence from the edges of a network. 
                By aggregating content from nested groups, we help you understand what's alive in your ecosystem.</p>
            </details>
          </div>
          <div className="tool">
            <details open>
              <summary><h3>Nurture a prosocial culture</h3></summary>
              <p>Hylo facilitates the transition from top-down to peer-to-peer coordination, 
                helping your group evolve and scale your impact.</p>
            </details>
          </div>
          <div className="tool">
            <details closed>
              <summary><h3>No ads, no distractions</h3></summary>
              <p>Hylo is a public good; a community-led technology commons. 
                It's free to use, with no extractive revenue model harvesting your data or attention.</p>
            </details>
          </div>
        </div>
      </section>
      <section className="bioregionalContainer">
        <div className="testimonial">
          <div style={{backgroundColor: `#333`, height: `75vh`, width: `100%`}}>Madelynn video here</div>
        </div>
        <div className="bioregional">
          <h2>The future is</h2>
          <h1>bioregional</h1>
          <p>A "bioregion" is a natural membrane expressed by features of the landscape, like watersheds and mountain ranges. Hylo empowers communities to coordinate at the scale of their landscape.</p>
          <div className="bioregionalDetail">
            <p>Get involved in local happenings and celebrate the place you call home.</p>
            <p>Find local businesses and projects to support for a more resilient community.</p>
            <p>Work together to care for the land and restore healthy ecosystems.</p>
          </div>
          <div className="bioregionalCTA">
            <Button label="Explore what's alive near you" link="/map/" background={`linear-gradient(93deg, #B162AB 7.65%, #0175D8 100%)`} color="#fff" />
          </div>
        </div>
      </section>
      <section className="planetaryContainer">
        <div className="planetary">
          <h2>Let's unlock<br/>planetary regeneration</h2>
          <p>By sowing the seeds of a network of Earth's bioregions, 
          we nurture a global regenerative culture that collaborates 
          at the scale of the biosphere to care for our world.</p>
          <div className="planet"
            data-sal="fade"
            data-sal-duration="500"
            data-sal-delay="0"
            data-sal-easing="ease">
            <img src={planet} alt="Spaceship Earth" />
          </div>
          <div className="planetaryGrid"
            data-sal="fade"
            data-sal-duration="2000"
            data-sal-delay="0"
            data-sal-easing="ease">
            <img src={grid} alt="Planetary Grid" />
          </div>
          <div className="planetaryBelonging"
            data-sal="slide-down"
            data-sal-duration="500"
            data-sal-delay="1000"
            data-sal-easing="easeOutBounce">
            <img src={pin} alt="You are here" />
            <h3>You belong here.</h3>
          </div>
          <div className="planetaryDetail">
            <div className="planetaryCTA">
              <p>Are you ready to find your people?</p>
              <Button label="Discover a group to join" link="/explore/" background={`linear-gradient(rgba(0,0,0,1), rgba(0,0,0,1)) padding-box,
                linear-gradient(to right, #BB60A8, #40A1DD) border-box`} color="#fff" border={`4px solid transparent`}/>
            </div>
            <div className="planetaryCTA">
              <p>Are you building purpose-driven community?</p>
              <Button label="Create a group now" link="/create/" background={`linear-gradient(rgba(0,0,0,1), rgba(0,0,0,1)) padding-box,
                linear-gradient(to right, #BB60A8, #40A1DD) border-box`} color="#fff" border={`4px solid transparent`}/>
            </div>
            <div className="planetaryCTA">
              <p>Do you want to help us build Hylo?</p>
              <Button label="Join Building Hylo" link="/participate/" background={`linear-gradient(rgba(0,0,0,1), rgba(0,0,0,1)) padding-box,
                linear-gradient(to right, #BB60A8, #40A1DD) border-box`} color="#fff" border={`4px solid transparent`}/>
            </div>
          </div>
        </div>
      </section>
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
        <h3>Hylo = hylozoism = the idea that matter is alive and in service to life</h3>
        <h2>all . beings . thriving</h2>
      </footer>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
