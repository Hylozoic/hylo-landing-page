import React, { useEffect } from "react"
import "../styles/styles.scss"
import Layout from "../components/layout"
import Button from "../components/button"
import Label from "../components/label"
import Contributors from "../components/contributors"
import Tool from "../components/tool"
import Footer from "../components/footer"
import logo from "../images/logos/hylo-logo-white.svg"
import heroImage from "../images/around-the-fire-web.png"
import leaf from "../images/icon/leaf-icon.svg"
import heart from "../images/icon/heart-icon.svg"
import calendar from "../images/icon/calendar-icon.svg"
import logos from "../images/logos/ecosystem-logos.png"
import pin from "../images/icon/map-pin.svg"
import planet from "../images/planet.png"
import grid from "../images/planetary-grid.png"
import handBackground from  "../images/hand-background.jpg"
import notification from "../images/notification.png"
import bikerbg from "../images/bikerbg.jpg"
import biker from "../images/biker.png"

// animation files
import animationSpacer from "../images/groups-animation/spacer.png"
import hyloIcon from "../images/groups-animation/building-hylo-group-icon.png"
import hyloMembrane from "../images/groups-animation/building-hylo-membrane.svg"
import hyloName from "../images/groups-animation/building-hylo-name.svg"
import phaIcon from "../images/groups-animation/pha-group-icon.png"
import phaMembrane from "../images/groups-animation/pha-membrane.svg"
import phaName from "../images/groups-animation/pha-name.svg"
import zebrasIcon from "../images/groups-animation/zebras-unite-group-icon.png"
import zebrasMembrane from "../images/groups-animation/zebras-unite-membrane.svg"
import zebrasName from "../images/groups-animation/zebras-name.svg"
import subgroupMembrane from "../images/groups-animation/subgroup-membrane.svg"
import lookingForHelp from "../images/groups-animation/looking-for-help.svg"
import illContribute from "../images/groups-animation/ill-contribute.svg"
import iCanHelp from "../images/groups-animation/i-can-help.svg"
import meToo from "../images/groups-animation/me-too.svg"
import groupSpread1 from "../images/groups-animation/group-spread-1.svg"
import groupSpread2 from "../images/groups-animation/group-spread-2.svg"
import groupSpread3 from "../images/groups-animation/group-spread-3.svg"
import profileImage1 from "../images/groups-animation/profile_image_01.jpg"
import profileImage2 from "../images/groups-animation/profile_image_02.jpg"
import profileImage3 from "../images/groups-animation/profile_image_03.jpg"
import profileImage4 from "../images/groups-animation/profile_image_04.jpg"
import profileImage5 from "../images/groups-animation/profile_image_05.jpg"
import profileImage6 from "../images/groups-animation/profile_image_06.jpg"
import profileImage7 from "../images/groups-animation/profile_image_07.jpg"
import profileImage8 from "../images/groups-animation/profile_image_08.jpg"
import profileImage9 from "../images/groups-animation/profile_image_09.jpg"
import profileImage10 from "../images/groups-animation/profile_image_10.jpg"
import profileImage11 from "../images/groups-animation/profile_image_11.jpg"
import profileImage12 from "../images/groups-animation/profile_image_12.jpg"
import profileImage13 from "../images/groups-animation/profile_image_13.jpg"
import profileImage14 from "../images/groups-animation/profile_image_14.jpg"
import profileImage15 from "../images/groups-animation/profile_image_15.jpg"
import profileImage16 from "../images/groups-animation/profile_image_16.jpg"
import profileImage17 from "../images/groups-animation/profile_image_17.jpg"
import profileImage18 from "../images/groups-animation/profile_image_18.jpg"
import profileImage19 from "../images/groups-animation/profile_image_19.jpg"
import profileImage20 from "../images/groups-animation/profile_image_20.jpg"
import profileImage21 from "../images/groups-animation/profile_image_21.jpg"
import profileImage22 from "../images/groups-animation/profile_image_22.jpg"
import profileImage23 from "../images/groups-animation/profile_image_23.jpg"
import profileImage24 from "../images/groups-animation/profile_image_24.jpg"
import profileImage25 from "../images/groups-animation/profile_image_25.jpg"
import profileImage26 from "../images/groups-animation/profile_image_26.jpg"
import profileImage27 from "../images/groups-animation/profile_image_27.jpg"
import profileImage28 from "../images/groups-animation/profile_image_28.jpg"
import profileImage29 from "../images/groups-animation/profile_image_29.jpg"
import profileImage30 from "../images/groups-animation/profile_image_30.jpg"
import profileImage31 from "../images/groups-animation/profile_image_31.jpg"
import profileImage32 from "../images/groups-animation/profile_image_32.jpg"
import profileImage33 from "../images/groups-animation/profile_image_33.jpg"
import profileImage34 from "../images/groups-animation/profile_image_34.jpg"
import profileImage35 from "../images/groups-animation/profile_image_35.jpg"
import profileImage36 from "../images/groups-animation/profile_image_36.jpg"
import profileImage37 from "../images/groups-animation/profile_image_37.jpg"
import profileImage38 from "../images/groups-animation/profile_image_38.jpg"
import profileImage39 from "../images/groups-animation/profile_image_39.jpg"
import profileImage40 from "../images/groups-animation/profile_image_40.jpg"
import profileImage41 from "../images/groups-animation/profile_image_41.jpg"
import profileImage42 from "../images/groups-animation/profile_image_42.jpg"
import profileImage43 from "../images/groups-animation/profile_image_43.jpg"
import profileImage44 from "../images/groups-animation/profile_image_44.jpg"
import profileImage45 from "../images/groups-animation/profile_image_45.jpg"
import profileImage46 from "../images/groups-animation/profile_image_46.jpg"
import profileImage47 from "../images/groups-animation/profile_image_47.jpg"
import profileImage48 from "../images/groups-animation/profile_image_48.jpg"
import profileImage49 from "../images/groups-animation/profile_image_49.jpg"
import profileImage50 from "../images/groups-animation/profile_image_50.jpg"
import profileImage51 from "../images/groups-animation/profile_image_51.jpg"
import profileImage52 from "../images/groups-animation/profile_image_52.jpg"

const addAnimationOnScroll = (listenerClass, targetClass, animationClass, pixelOffset) => {
  let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const handleScroll = () => {
                  const targetElement = document.querySelector(`.${targetClass}`);
                  if (!targetElement) return;
                  const targetPosition = entry.target.getBoundingClientRect().top + window.scrollY;
                  const viewportBottom = window.scrollY + window.innerHeight;
                  // Check if the bottom of the listener element is at or above the bottom of the viewport
                  if (targetPosition - pixelOffset <= viewportBottom) {
                      targetElement.classList.add(animationClass);
                      observer.unobserve(entry.target);
                      window.removeEventListener('scroll', handleScroll);
                  }
              };
              window.addEventListener('scroll', handleScroll, { passive: true });
          }
      });
  }, {
      rootMargin: '0px 0px -200px 0px', // Adjusts the bottom of the root's bounding box
      threshold: 0.01 // A very small threshold to detect the start of intersection
  });

  // Start observing the listener element
  const listenerElement = document.querySelector(`.${listenerClass}`);
  if (listenerElement) {
      observer.observe(listenerElement);
  }
};

const IndexPage = () => {
    useEffect(() => {
      addAnimationOnScroll("interdependenceLeft", "interdependenceAnimation", "animate", 200);
      addAnimationOnScroll("aliveRight", "holdingPhone", "animate", 400);
      addAnimationOnScroll("passionLeft", "passionMessages", "animate", 400);
      addAnimationOnScroll("passionLeft", "gardenDay", "animate", 600);
  }, []);
  return (
    <Layout pageTitle="Home Page">
      <div className="hero">
        <div className="headingStyles">
          <div className="homeLogo">
              <img src={logo} alt="Hylo Logo" />
          </div>
          <h1><span>Create</span> <span>community</span><br/><span>with</span> <span>purpose</span> <span>on</span> <span>Hylo</span></h1>
          <div className="actions">
          <Button label="Sign Up" link="/sign-up/" background={`linear-gradient(rgba(0,0,0,1), rgba(0,0,0,1)) padding-box,
              linear-gradient(to right, #BB60A8, #40A1DD) border-box`} color="#fff" border={`4px solid transparent`}/>
          <Button label="Log In" link="/log-in/" background={`linear-gradient(rgba(0,0,0,1), rgba(0,0,0,1)) padding-box,
              linear-gradient(to right, #6FCF97, #40A1DD) border-box`} color="#fff" border={`4px solid transparent`}/>
          </div>
        </div>
        <div className="backgroundWrapper">
          <div className={'backgroundImage hero'} style={{backgroundImage: `../images/around-the-fire-web.png`}}></div>
          <div className="backgroundFade"></div>
        </div>
      </div>
      <div className="aliveContainer">
        <section className="passion">
          <div className="passionLeft">
            <div className="passionMessages">
              <div className="message" data-sal="slide-down"
                data-sal-duration="500"
                data-sal-delay="500"
                data-sal-easing="easeOutElastic">
                <Label label="Planning a garden day at the lake!" icon={leaf} />
              </div>
              <div className="message" data-sal="slide-down"
                data-sal-duration="500"
                data-sal-delay="1000"
                data-sal-easing="easeOutElastic">
                <Label label="Anyone have extra shovels?" icon={heart} />
              </div>
              <div className="message" data-sal="slide-down"
                data-sal-duration="1000"
                data-sal-delay="2500"
                data-sal-easing="easeOutElastic">
                <Label label="Garden Day" icon={calendar} color="#EB5757" />
              </div>
            </div>
            <div className="backgroundWrapper">
              <div className="backgroundImage gardenDay"></div>
            </div>
          </div>
          <div className="passionRight">
            <div className="sticky">
              <h2>Driven by passion,<br/>
              united by purpose</h2>
              <p>Hylo is the place where people who are passionate about their dreams come together to support each other and make them a reality.</p>
              <p>It's a community where you can <strong>connect with others who share your purpose</strong> and work towards achieving your goals together.</p>
              <div style={{textAlign: `center`}}>
                <h3>Ready to find where you belong?</h3>
                <Button label="Explore Groups" link="/explore/" background={`linear-gradient(93deg, #0DC39F 7.65%, #6FCF97 100%)`} color="#fff" />      
              </div>
            </div>
          </div>
        </section>
        <section className="alive">
          <div className="aliveLeft">
            <div className="pad">
              <h2>Watch your group<br/>come alive</h2>
              <p>Many online groups struggle with engagement. 
                On Hylo, groups transform into vibrant, self-organized, collaborative networks.</p>
              <p>Hylo makes it easy for group members to step into leadership, enabling the group to grow and deepen its impact.</p>
              <div style={{textAlign: `center`}}>
                <h3>Ready to gather your people?</h3>
                <Button label="Create a Group" link="/create/" background={`linear-gradient(93deg, #B162AB 7.65%, #0175D8 100%)`} color="#fff"/>  
              </div>
            </div>
          </div>
          <div className="aliveRight">
            <div className="holdingPhone">
              <img src={notification} className="notification" />
              <div className="mask">
                <img src={bikerbg} className="bikerbg" />
              </div>
              <img src={handBackground} className="handBackground" />
              <div className="tallMask">
                <img src={biker} className="biker" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="interdependence">
        <div className="topBg" style={{backgroundImage: "../images/alive-bottom-bg.svg"}}></div>
        <div className="interdependenceLeft">
          <div className="pad">
            <div className="interdependenceAnimation">
              <div className="animationWrapper">
                <img className="spacer" src={animationSpacer} width="100%" height="100%" />
                <div className="elements">
                  <img src={hyloIcon} className="hyloIcon" alt=" " />
                  <img src={hyloMembrane} className="hyloMembrane" alt=" " />
                  <img src={hyloName} className="hyloName" alt=" " />
                  <img src={phaIcon} className="phaIcon" alt=" " />
                  <img src={phaMembrane} className="phaMembrane" alt=" " />
                  <img src={phaName} className="phaName" alt=" " />
                  <img src={zebrasIcon} className="zebrasIcon" alt=" " />
                  <img src={zebrasMembrane} className="zebrasMembrane" alt=" " />
                  <img src={zebrasName} className="zebrasName" alt=" " />
                  <img src={subgroupMembrane} className="subgroupMembrane" alt=" " />
                  <img src={groupSpread1} className="groupSpread1" alt=" " />
                  <img src={groupSpread2} className="groupSpread2" alt=" " />
                  <img src={groupSpread3} className="groupSpread3" alt=" " />
                  <div className="messages">
                    <img src={lookingForHelp} className="lookingForHelp" alt=" " />
                    <img src={illContribute} className="illContribute" alt=" " />
                    <img src={iCanHelp} className="iCanHelp" alt=" " />
                    <img src={meToo} className="meToo" alt=" " />
                  </div>
                  <div className="profileImages">
                    <img src={profileImage1} className="profileImage1" alt=" " />
                    <img src={profileImage2} className="profileImage2" alt=" " />
                    <img src={profileImage3} className="profileImage3" alt=" " />
                    <img src={profileImage4} className="profileImage4" alt=" " />
                    <img src={profileImage5} className="profileImage5" alt=" " />
                    <img src={profileImage6} className="profileImage6" alt=" " />
                    <img src={profileImage7} className="profileImage7" alt=" " />
                    <img src={profileImage8} className="profileImage8" alt=" " />
                    <img src={profileImage9} className="profileImage9" alt=" " />
                    <img src={profileImage10} className="profileImage10" alt=" " />
                    <img src={profileImage11} className="profileImage11" alt=" " />
                    <img src={profileImage12} className="profileImage12" />
                    <img src={profileImage13} className="profileImage13" />
                    <img src={profileImage14} className="profileImage14" />
                    <img src={profileImage15} className="profileImage15" />
                    <img src={profileImage16} className="profileImage16" />
                    <img src={profileImage17} className="profileImage17" />
                    <img src={profileImage18} className="profileImage18" />
                    <img src={profileImage19} className="profileImage19" />
                    <img src={profileImage20} className="profileImage20" />
                    <img src={profileImage21} className="profileImage21" />
                    <img src={profileImage22} className="profileImage22" />
                    <img src={profileImage23} className="profileImage23" />
                    <img src={profileImage24} className="profileImage24" />
                    <img src={profileImage25} className="profileImage25" />
                    <img src={profileImage26} className="profileImage26" />
                    <img src={profileImage27} className="profileImage27" />
                    <img src={profileImage28} className="profileImage28" />
                    <img src={profileImage29} className="profileImage29" />
                    <img src={profileImage30} className="profileImage30" />
                    <img src={profileImage31} className="profileImage31" />
                    <img src={profileImage32} className="profileImage32" />
                    <img src={profileImage33} className="profileImage33" />
                    <img src={profileImage34} className="profileImage34" />
                    <img src={profileImage35} className="profileImage35" />
                    <img src={profileImage36} className="profileImage36" />
                    <img src={profileImage37} className="profileImage37" />
                    <img src={profileImage38} className="profileImage38" />
                    <img src={profileImage39} className="profileImage39" />
                    <img src={profileImage40} className="profileImage40" />
                    <img src={profileImage41} className="profileImage41" />
                    <img src={profileImage42} className="profileImage42" />
                    <img src={profileImage43} className="profileImage43" />
                    <img src={profileImage44} className="profileImage44" />
                    <img src={profileImage45} className="profileImage45" />
                    <img src={profileImage46} className="profileImage46" />
                    <img src={profileImage47} className="profileImage47" />
                    <img src={profileImage48} className="profileImage48" />
                    <img src={profileImage49} className="profileImage49" />
                    <img src={profileImage50} className="profileImage50" />
                    <img src={profileImage51} className="profileImage51" />
                    <img src={profileImage52} className="profileImage52" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="interdependenceRight">
          <div className="pad"
                data-sal="fade-in"
                data-sal-duration="1000"
                data-sal-delay="0"
                data-sal-easing="easeOutElastic">
            <h2>Designed for<br/>interdependence</h2>
            <p>Work on projects across groups and get help from throughout your network. 
                With cross-group collaboration, you'll access more resources and make things happen faster.</p>
          </div>
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
