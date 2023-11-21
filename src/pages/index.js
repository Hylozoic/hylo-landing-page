import * as React from "react"
import "../styles/styles.scss"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Button from "../components/button"
import Label from "../components/label"
import Contributors from "../components/contributors"
import Tool from "../components/tool"
import Footer from "../components/footer"
import logo from "../images/logos/hylo-logo-white.svg"
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
          <div className="homeLogo">
              <img src={logo} alt="Hylo Logo" />
          </div>
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
            <p>Many online groups struggle with engagement. 
              On Hylo, groups transform into vibrant, self-organized, collaborative networks.</p>
            <p>Hylo makes it easy for group members to step into leadership, enabling the group to grow and deepen its impact.</p>
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
              With cross-group collaboration, you'll access more resources and make things happen faster.</p>
        </div>
      </section>
      <section className="toolsContainer">
        <section className="ecosystem">
          <div className="ecosystemContainer">
            <div className="ecosystemBg">
              <h2>Powering an emerging ecosystem,<br/>building a better world</h2>
              <p>Hylo is an open source project stewarded by Terran Collective alongside partners, contributors, and donors from around the world.</p> 
              <p>Hylo is a not-for-profit, community-led technology commons. We work with real-world groups to co-design technology solutions to their needs, and then share them with the world. 
                Here are just some of the partners and contributors that have shaped Hylo.</p>
              <div className="ecosystemLogos">
                <img src={logos} alt="Partner Logos" />
              </div>
            </div>
            <Contributors />
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
          <Tool title="Customize your experience"
            text="Our advanced admin settings make it easy to curate an experience that's perfect for your group. 
            Custom views show members exactly what they need to see and link out to critical resources."
            classBg="customize"
            imgName="customize-ui.png"
            alt="Customization options"
            index="1" />  
          <Tool title="Grow relationships with collaborators"
            text="Our web and mobile apps allow community members to deepen relationships and collaborate 
            through discussions, requests, offers, resources, member directories, direct messaging, and chat."
            classBg="relationship"
            imgName="relationships-ui-feature.png"
            alt="Relationships"
            index="2" />
          <Tool title="Host cross-group conversations"
            text="Share one post with multiple groups, creating a shared conversation for cross-pollination and emergence."
            classBg="crossgroup"
            imgName="crossgroup.png"
            alt="Cross-group conversation"
            index="3" />
          <Tool title="Discover local connections"
            text="Hylo has a geographic map and specific tools for bioregional and place-based groups, 
            facilitating coordination at the scale regeneration actually happens: locally."
            classBg="local"
            imgName="local.png"
            alt="Local and Place-based"
            index="4" />
          <Tool title="Guide toward action"
            text="Whether planning an online event or a creek restoration day, 
            Hylo's coordination tools guide groups toward action. 
            Use Projects to kick-start collaboration and Events to gather online or IRL."
            classBg="action"
            imgName="action.png"
            alt="Guide toward action"
            index="5" />
          <Tool title="Composable ecosystems"
            text="Groups can add unlimited subgroups AND join other groups, 
            making it easy to form and navigate large networks. 
            This composability allows people to connect across membranes and work on shared goals."
            classBg="composable"
            imgName="composable.png"
            alt="Composable ecosystems"
            index="6" />
          <Tool title="Understand your network"
            text="Hylo is a tool for collective sensemaking, designed to source intelligence from the edges of a network. 
            By aggregating content from nested groups, we help you understand what's alive in your ecosystem."
            classBg="sensemaking"
            imgName="sensemaking.png"
            alt="Sensemaking tools"
            index="7" />
          <Tool title="Nurture a prosocial culture"
            text="Hylo facilitates the transition from top-down to peer-to-peer coordination, 
            helping your group evolve and scale your impact."
            classBg="prosocial"
            imgName="prosocial.png"
            alt="prosocial culture"
            index="8" />
          <Tool title="No ads, no distractions"
            text="Hylo is a public good; a community-led and non-profit technology commons. 
            It's free to use, with no extractive revenue model harvesting your data or attention."
            classBg="publicgood"
            imgName="publicgood.png"
            alt="No ads, no distractions"
            index="9" />
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
              <Button label="Explore groups" link="/explore/" background={`linear-gradient(rgba(0,0,0,1), rgba(0,0,0,1)) padding-box,
                linear-gradient(to right, #BB60A8, #40A1DD) border-box`} color="#fff" border={`4px solid transparent`}/>
            </div>
            <div className="planetaryCTA">
              <p>Are you building purpose-driven community?</p>
              <Button label="Create a group" link="/create/" background={`linear-gradient(rgba(0,0,0,1), rgba(0,0,0,1)) padding-box,
                linear-gradient(to right, #BB60A8, #40A1DD) border-box`} color="#fff" border={`4px solid transparent`}/>
            </div>
            <div className="planetaryCTA">
              <p>Do you want to co-create Hylo?</p>
              <Button label="Join Building Hylo" link="/participate/" background={`linear-gradient(rgba(0,0,0,1), rgba(0,0,0,1)) padding-box,
                linear-gradient(to right, #BB60A8, #40A1DD) border-box`} color="#fff" border={`4px solid transparent`}/>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
