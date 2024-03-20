import React, { useEffect, useState } from "react"

import Contributors from "../components/contributors"
import ExternalButton from "../components/externalbutton"
import Footer from "../components/footer"
import Label from "../components/label"
import Layout from "../components/layout"
import Tool from "../components/tool"

import leaf from "../images/icon/leaf-icon.svg"
import heart from "../images/icon/heart-icon.svg"
import calendar from "../images/icon/calendar-icon.svg"
import pin from "../images/icon/map-pin.svg"
import planet from "../images/planet-earth.png"
import earthGlow from "../images/earth-glow.svg"
import grid from "../images/planetary-interconnections.svg"
import planetaryMembranes from "../images/planetary-membranes.svg"
import youBelong from "../images/you-belong.svg"
import handBackground from  "../images/hand-background.jpg"
import notification from "../images/notification.png"
import bikerbg from "../images/bikerbg.jpg"
import biker from "../images/biker.png"
import valleyBackground from "../images/bioregion-background.jpg"
import westForkMembrane from "../images/west-fork-membrane.svg"
import northVillageMembrane from "../images/north-village-membrane.svg"
import redMembrane from "../images/red-membrane.svg"
import blueMembrane from "../images/blue-membrane.svg"
import yellowMembrane from "../images/yellow-membrane.svg"
import westForkConnector from "../images/west-fork-connector.svg"
import interconnections from "../images/interconnections.svg"
import blueVillage from "../images/blue-village.svg"
import redVillage from "../images/red-village.svg"
import yellowVillage from "../images/yellow-village.svg"
import northVillage from "../images/north-village.svg"
import westForkRiver from "../images/west-fork-river.svg"
import southVillage from "../images/south-village.svg"
import greenMembrane from "../images/green-membrane.svg"
import toolsBg from "../images/active-bg.svg"
import localHappenings from "../images/local-happenings.svg"
import businesses from "../images/businesses.svg"
import workTogether from "../images/work-together.svg"
import gardenDayUser1 from "../images/garden-day-user-1.png"
import gardenDayUser2 from "../images/garden-day-user-2.png"
import gardenDayUser3 from "../images/garden-day-user-3.png"
import aroundTheFire from "../images/around-the-fire-web.jpg"

// stewards of hylo
import bionutrientFoodAssociation from "../images/stewards/bionutrient-food-association.png"
import newPublic from "../images/stewards/new-public.png"
import openTeam from "../images/stewards/open-team.png"
import pacificIntegral from "../images/stewards/pacific-integral.png"
import planetaryHealthAlliance from "../images/stewards/planetary-health-alliance.png"
import prosocialWorld from "../images/stewards/prosocial-world.png"
import regenNetwork from "../images/stewards/regen-network.png"
import salmonNationTrust from "../images/stewards/salmon-nation-trust.png"
import terranCollective from "../images/stewards/terran-collective.png"
import tribalResourceCenter from "../images/stewards/tribal-resource-center.png"
import zebrasUnite from "../images/stewards/zebras-unite.png"
import holochain from "../images/stewards/holochain.png"

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

import "../styles/styles.scss"

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

  const [activeToolId, setActiveToolId] = useState(null);

  const handleSetActive = (id) => {
    console.log("handleSetActive called with id:", id); // Add this line
    setActiveToolId(id === activeToolId ? null : id); // Toggle active state
  };

  useEffect(() => {
    addAnimationOnScroll("interdependenceLeft", "interdependenceElements", "animate", 200);
    addAnimationOnScroll("aliveRight", "holdingPhone", "animate", 400);
    addAnimationOnScroll("passionLeft", "passionMessages", "animate", 400);
    addAnimationOnScroll("passionLeft", "gardenDay", "animate", 600);
    addAnimationOnScroll("valleyBackground", "bioregionElements", "animate", -500);
    addAnimationOnScroll("ecosystemContainer", "bgContainer", "animate", 0);
    addAnimationOnScroll("planetaryDescription", "planetaryCoordination", "animate", -500);
    addAnimationOnScroll("planetaryDescription", "starBg", "animate", -500);
    addAnimationOnScroll("planetaryDescription", "planetaryContainer", "animate", -500);
  }, []);

  return (
    <Layout pageTitle="Hylo: Prosocial Coordination for Purpose-Driven Groups">
      <div className="hero">
        <div className="headingStyles">
          <h1><span>Create</span> <span>community</span><br/><span>with</span> <span>purpose</span> <span>on</span> <span>Hylo</span></h1>
          <div className="actions">
          <ExternalButton label="Sign Up" link="https://www.hylo.com/signup" background={`linear-gradient(rgba(0,0,0,1), rgba(0,0,0,1)) padding-box,
              linear-gradient(to right, #BB60A8, #40A1DD) border-box`} color="#fff" border={`4px solid transparent`}/>
          <ExternalButton label="Log In" link="https://www.hylo.com/login" background={`linear-gradient(rgba(0,0,0,1), rgba(0,0,0,1)) padding-box,
              linear-gradient(to right, #6FCF97, #40A1DD) border-box`} color="#fff" border={`4px solid transparent`}/>
          </div>
        </div>
        <div className="backgroundWrapper">
          <div className={'backgroundImage hero'} style={{backgroundImage: aroundTheFire}}></div>
          <div className="backgroundFade"></div>
        </div>
      </div>
      <div className="aliveContainer">
        <section className="passion">
          <div className="passionLeft">
            <div className="passionMessages">
              <div className="message message1" data-sal="slide-up"
                data-sal-duration="0"
                data-sal-delay="500"
                data-sal-easing="easeOutElastic">
                <Label label="Planning a garden day at the lake!" icon={leaf} />
                <div className="gardenDayUser"><img src={gardenDayUser1} alt="" /></div>
              </div>
              <div className="message message2" data-sal="slide-up"
                data-sal-duration="333"
                data-sal-delay="10s"
                data-sal-easing="easeOutElastic">
                <div className="gardenDayUser user2"><img src={gardenDayUser2} alt="" /></div>
                <Label label="Anyone have extra shovels?" icon={heart} />
              </div>
              <div className="message message3" data-sal="slide-up"
                data-sal-duration="999"
                data-sal-delay="2750"
                data-sal-easing="easeOutElastic">
                <Label label="Garden Day" icon={calendar} color="#EB5757" />
                <div className="gardenDayUser"><img src={gardenDayUser3} alt="" /></div>
              </div>
            </div>
            <div className="backgroundWrapper">
              <div className="backgroundImage gardenDay"></div>
            </div>
          </div>
          <div className="passionRight">
            <div className="sticky">
              <h2 data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="2500"
                data-sal-easing="easeOutElastic">Driven by passion,<br/>
              united by purpose</h2>
              <p data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="2500"
                data-sal-easing="easeOutElastic">Hylo is the place where people who are passionate about their dreams come together to support each other and make them a reality.</p>
              <p data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="2500"
                data-sal-easing="easeOutElastic">It's a community where you can <strong>connect with others who share your purpose</strong> and work towards achieving your goals together.</p>
              <div style={{textAlign: `center`}}>
                <h3>Ready to find where you belong?</h3>
                <ExternalButton label="Explore Groups" link="https://www.hylo.com/public/groups" background={`linear-gradient(93deg, #0DC39F 7.65%, #6FCF97 100%)`} color="#fff" />
              </div>
            </div>
          </div>
        </section>
        <section className="alive">
          <div className="aliveLeft">
            <div className="pad">
              <h2 data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="2500"
                data-sal-easing="easeOutElastic">Watch your group<br/>come alive</h2>
              <p data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="2500"
                data-sal-easing="easeOutElastic">Many online groups struggle with engagement.
                On Hylo, groups transform into vibrant, self-organized, collaborative networks.</p>
              <p data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="2500"
                data-sal-easing="easeOutElastic">Hylo makes it easy for group members to step into leadership, enabling the group to grow and deepen its impact.</p>
              <div style={{textAlign: `center`}}>
                <h3>Ready to gather your people?</h3>
                <ExternalButton label="Create a Group" link="https://www.hylo.com/all/create/group" background={`linear-gradient(93deg, #B162AB 7.65%, #0175D8 100%)`} color="#fff"/>
              </div>
            </div>
          </div>
          <div className="aliveRight">
            <div className="holdingPhone">
              <img src={notification} className="notification" alt=" " />
              <div className="mask">
                <img src={bikerbg} className="bikerbg" alt=" " />
              </div>
              <img src={handBackground} className="handBackground" alt=" " />
              <div className="tallMask">
                <img src={biker} className="biker" alt=" " />
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
                <img className="spacer" src={animationSpacer} width="100%" height="100%" alt=" " />
                <div className="interdependenceElements">
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
                    <img src={profileImage12} className="profileImage12" alt=" " />
                    <img src={profileImage13} className="profileImage13" alt=" " />
                    <img src={profileImage14} className="profileImage14" alt=" " />
                    <img src={profileImage15} className="profileImage15" alt=" " />
                    <img src={profileImage16} className="profileImage16" alt=" " />
                    <img src={profileImage17} className="profileImage17" alt=" " />
                    <img src={profileImage18} className="profileImage18" alt=" " />
                    <img src={profileImage19} className="profileImage19" alt=" " />
                    <img src={profileImage20} className="profileImage20" alt=" " />
                    <img src={profileImage21} className="profileImage21" alt=" " />
                    <img src={profileImage22} className="profileImage22" alt=" " />
                    <img src={profileImage23} className="profileImage23" alt=" " />
                    <img src={profileImage24} className="profileImage24" alt=" " />
                    <img src={profileImage25} className="profileImage25" alt=" " />
                    <img src={profileImage26} className="profileImage26" alt=" " />
                    <img src={profileImage27} className="profileImage27" alt=" " />
                    <img src={profileImage28} className="profileImage28" alt=" " />
                    <img src={profileImage29} className="profileImage29" alt=" " />
                    <img src={profileImage30} className="profileImage30" alt=" " />
                    <img src={profileImage31} className="profileImage31" alt=" " />
                    <img src={profileImage32} className="profileImage32" alt=" " />
                    <img src={profileImage33} className="profileImage33" alt=" " />
                    <img src={profileImage34} className="profileImage34" alt=" " />
                    <img src={profileImage35} className="profileImage35" alt=" " />
                    <img src={profileImage36} className="profileImage36" alt=" " />
                    <img src={profileImage37} className="profileImage37" alt=" " />
                    <img src={profileImage38} className="profileImage38" alt=" " />
                    <img src={profileImage39} className="profileImage39" alt=" " />
                    <img src={profileImage40} className="profileImage40" alt=" " />
                    <img src={profileImage41} className="profileImage41" alt=" " />
                    <img src={profileImage42} className="profileImage42" alt=" " />
                    <img src={profileImage43} className="profileImage43" alt=" " />
                    <img src={profileImage44} className="profileImage44" alt=" " />
                    <img src={profileImage45} className="profileImage45" alt=" " />
                    <img src={profileImage46} className="profileImage46" alt=" " />
                    <img src={profileImage47} className="profileImage47" alt=" " />
                    <img src={profileImage48} className="profileImage48" alt=" " />
                    <img src={profileImage49} className="profileImage49" alt=" " />
                    <img src={profileImage50} className="profileImage50" alt=" " />
                    <img src={profileImage51} className="profileImage51" alt=" " />
                    <img src={profileImage52} className="profileImage52" alt=" " />
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
            <div className="ecosystemDetails">
              <div className="content">
                <h2
                  data-sal="fade-in"
                  data-sal-duration="1000"
                  data-sal-delay="250"
                  data-sal-easing="easeOutElastic">Powering an emerging ecosystem,<br/>building a better world</h2>
                <p
                  data-sal="fade-in"
                  data-sal-duration="1000"
                  data-sal-delay="250"
                  data-sal-easing="easeOutElastic">Hylo is an open source project stewarded by <a href='https://terran.io' target='_blank' rel="noreferrer">Terran Collective</a> alongside partners, contributors, and donors from around the world.</p>
                <p
                  data-sal="fade-in"
                  data-sal-duration="1000"
                  data-sal-delay="250"
                  data-sal-easing="easeOutElastic">Hylo is a not-for-profit, community-led technology commons. We work with real-world groups to co-design technology solutions to their needs, and then share them with the world.
                  Here are just some of the partners and contributors that have shaped Hylo.</p>
                <div className="ecosystemLogos" data-sal="slide-down"
                      data-sal-duration="1000"
                      data-sal-delay="250"
                      data-sal-easing="easeOutElastic">
                  <a href='https://www.zebrasunite.org'
                    target='_blank'
                    rel="noreferrer"
                    data-sal="fade-in"
                    data-sal-duration="1000"
                    data-sal-delay="250"
                    data-sal-easing="easeOutElastic"
                  >
                    <img src={zebrasUnite} alt="Zebras Unite!" />
                  </a>

                  <a href='https://www.bionutrient.org'
                    target='_blank'
                    rel="noreferrer"
                    data-sal="fade-in"
                    data-sal-duration="1000"
                    data-sal-delay="250"
                    data-sal-easing="easeOutElastic"
                  >
                    <img src={bionutrientFoodAssociation} alt="Bionutrient Food Association" />
                  </a>

                  <a href='https://newpublic.org'
                    target='_blank'
                    rel="noreferrer"
                    data-sal="fade-in"
                    data-sal-duration="1000"
                    data-sal-delay="250"
                    data-sal-easing="easeOutElastic"
                  >
                    <img src={newPublic} alt="New_ Public" />
                  </a>

                  <a href='https://openteam.community'
                    target='_blank'
                    rel="noreferrer"
                    data-sal="fade-in"
                    data-sal-duration="1000"
                    data-sal-delay="250"
                    data-sal-easing="easeOutElastic"
                  >
                    <img src={openTeam} alt="Open Team" />
                  </a>

                  <a href='https://www.pacificintegral.com/'
                    target='_blank'
                    rel="noreferrer"
                    data-sal="fade-in"
                    data-sal-duration="1000"
                    data-sal-delay="250"
                    data-sal-easing="easeOutElastic"
                  >
                    <img src={pacificIntegral} alt="Pacific Integral" />
                  </a>

                  <a href='https://www.planetaryhealthalliance.org'
                    target='_blank'
                    rel="noreferrer"
                    data-sal="fade-in"
                    data-sal-duration="1000"
                    data-sal-delay="250"
                    data-sal-easing="easeOutElastic"
                  >
                    <img src={planetaryHealthAlliance} alt="Planetary Health Alliance" />
                  </a>

                  <a href='https://www.prosocial.world'
                    target='_blank'
                    rel="noreferrer"
                    data-sal="fade-in"
                    data-sal-duration="1000"
                    data-sal-delay="250"
                    data-sal-easing="easeOutElastic"
                  >
                    <img src={prosocialWorld} alt="Prosocial World" />
                  </a>

                  <a href='https://regen.network'
                    target='_blank'
                    rel="noreferrer"
                    data-sal="fade-in"
                    data-sal-duration="1000"
                    data-sal-delay="250"
                    data-sal-easing="easeOutElastic"
                  >
                    <img src={regenNetwork} alt="Regen Network" />
                  </a>

                  <a href='https://tribalresourcecenter.net/benefits-of-digital/cultural-preservation/'
                    target='_blank'
                    rel="noreferrer"
                    data-sal="fade-in"
                    data-sal-duration="1000"
                    data-sal-delay="250"
                    data-sal-easing="easeOutElastic"
                  >
                    <img src={tribalResourceCenter} alt="Tribal Resource Center" />
                  </a>

                  <a href='https://www.salmonnation.net'
                    target='_blank'
                    rel="noreferrer"
                    data-sal="fade-in"
                    data-sal-duration="1000"
                    data-sal-delay="250"
                    data-sal-easing="easeOutElastic"
                  >
                    <img src={salmonNationTrust} alt="Salmon Nation Trust" />
                  </a>

                  <a href='https://terran.io'
                    target='_blank'
                    rel="noreferrer"
                    data-sal="fade-in"
                    data-sal-duration="1000"
                    data-sal-delay="250"
                    data-sal-easing="easeOutElastic"
                  >
                    <img src={terranCollective} alt="Terran Collective" />
                  </a>

                  <a href='https://www.holochain.org/'
                    target='_blank'
                    rel="noreferrer"
                    data-sal="fade-in"
                    data-sal-duration="1000"
                    data-sal-delay="250"
                    data-sal-easing="easeOutElastic"
                  >
                    <img src={holochain} alt="Holochain" />
                  </a>
                </div>
              </div>
              <div className="bgContainer">
                <div className="ecosystemBackground"></div>
                <div className="ecosystemFade"></div>
              </div>
            </div>
            <Contributors />
          </div>
        </section>
        <div className="tools">
          <div className="toolsList1">
            <h2 className="toolsTitle">The tools you need to activate your group</h2>
            <div
                data-sal="fade-in"
                data-sal-duration="1000"
                data-sal-delay="250"
                data-sal-easing="easeOutElastic">
                <Tool title="Define your group membrane"
                  text="You decide the visibility and accessibility of your group.
                  Whether public and open, or invite-only, create the container that feels right."
                  classBg="tool0"
                  img1Name="define-membrane-1.jpg"
                  img2Name="define-membrane-2.jpg"
                  alt="Group privacy settings"
                  index={0}
                  id="0"
                  setActive={handleSetActive}
                  isActive={activeToolId === "0"} />
            </div>
            <div
                data-sal="fade-in"
                data-sal-duration="1000"
                data-sal-delay="250"
                data-sal-easing="easeOutElastic">
              <Tool title="Customize your experience"
                text="Our advanced admin settings make it easy to curate an experience that's perfect for your group.
                Custom views show members exactly what they need to see and link out to critical resources."
                classBg="tool1"
                img1Name="customize-experience-1.jpg"
                img2Name="customize-experience-2.jpg"
                img3Name="customize-experience-3.jpg"
                alt="Customization options"
                index={1}
                id="1"
                setActive={handleSetActive}
                isActive={activeToolId === "1"} />
            </div>
            <div
                data-sal="fade-in"
                data-sal-duration="1000"
                data-sal-delay="250"
                data-sal-easing="easeOutElastic">
              <Tool title="Grow relationships with collaborators"
                text="Our web and mobile apps allow community members to deepen relationships and collaborate
                through discussions, requests, offers, resources, member directories, direct messaging, and chat."
                classBg="tool2"
                img1Name="grow-relationships-1.jpg"
                img2Name="grow-relationships-2.jpg"
                img3Name="grow-relationships-3.jpg"
                alt="Relationships"
                index={2}
                id="2"
                setActive={handleSetActive}
                isActive={activeToolId === "2"} />
            </div>
            <div
                data-sal="fade-in"
                data-sal-duration="1000"
                data-sal-delay="250"
                data-sal-easing="easeOutElastic">
              <Tool title="Host cross-group conversations"
                text="Share one post with multiple groups, creating a shared conversation for cross-pollination and emergence."
                classBg="tool3"
                img1Name="cross-group-convo.jpg"
                alt="Cross-group conversation"
                active="true"
                index={3}
                id="3"
                setActive={handleSetActive}
                isActive={activeToolId === "3"} />
            </div>
          </div>

          <div className="toolsList2">
            <div
              data-sal="fade-in"
              data-sal-duration="1000"
              data-sal-delay="250"
              data-sal-easing="easeOutElastic">
              <Tool title="Guide toward action"
                text="Whether planning an online event or a creek restoration day,
                Hylo's coordination tools guide groups toward action.
                Use Projects to kick-start collaboration and Events to gather online or IRL."
                classBg="tool5"
                img1Name="guide-towards-action-1.jpg"
                img2Name="guide-towards-action-2.jpg"
                alt="Guide toward action"
                index={4}
                id="5"
                setActive={handleSetActive}
                isActive={activeToolId === "5"} />
            </div>
            <div
                data-sal="fade-in"
                data-sal-duration="1000"
                data-sal-delay="250"
                data-sal-easing="easeOutElastic">
            <Tool title="Composable ecosystems"
              text="Groups can add unlimited subgroups AND join other groups,
              making it easy to form and navigate large networks.
              This composability allows people to connect across membranes and work on shared goals."
              classBg="tool6"
              img1Name="composable-ecosystems.jpg"
              alt="Composable ecosystems"
              index={5}
              id="6"
              setActive={handleSetActive}
              isActive={activeToolId === "6"} />
            </div>
            <div
                data-sal="fade-in"
                data-sal-duration="1000"
                data-sal-delay="250"
                data-sal-easing="easeOutElastic">
                <Tool title="Discover local connections"
                  text="Hylo has a geographic map and specific tools for bioregional and place-based groups,
                  facilitating coordination at the scale regeneration actually happens: locally."
                  classBg="tool4"
                  img1Name="discover-local.jpg"
                  alt="Local and Place-based"
                  index={9}
                  id="4"
                  setActive={handleSetActive}
                  isActive={activeToolId === "4"}  />
            </div>
            <div
                data-sal="fade-in"
                data-sal-duration="1000"
                data-sal-delay="250"
                data-sal-easing="easeOutElastic">
              <Tool title="Understand your network"
                text="Hylo is a tool for collective sensemaking, designed to source intelligence from the edges of a network.
                By aggregating content from nested groups, we help you understand what's alive in your ecosystem."
                classBg="tool7"
                alt="Sensemaking tools"
                index={6}
                id="7"
                setActive={handleSetActive}
                isActive={activeToolId === "7"} />
            </div>
            <div
                data-sal="fade-in"
                data-sal-duration="1000"
                data-sal-delay="250"
                data-sal-easing="easeOutElastic">
              <Tool title="Nurture a prosocial culture"
                text="Hylo facilitates the transition from top-down to peer-to-peer coordination,
                helping your group evolve and scale your impact."
                classBg="tool8"
                alt="prosocial culture"
                index={7}
                id="8"
                setActive={handleSetActive}
                isActive={activeToolId === "8"} />
            </div>
            <div
                data-sal="fade-in"
                data-sal-duration="1000"
                data-sal-delay="250"
                data-sal-easing="easeOutElastic">
              <Tool title="No ads, no distractions"
                text="Hylo is a public good; a community-led and non-profit technology commons.
                It's free to use, with no extractive revenue model harvesting your data or attention."
                classBg="tool9"
                alt="No ads, no distractions"
                index={8}
                id="9"
                setActive={handleSetActive}
                isActive={activeToolId === "9"} />
            </div>
          </div>

        </div>
        <div className="greenWaves">
          <img src={toolsBg} className="toolsBg" alt=" " />
        </div>
      </section>
      <section className="bioregionalContainer">
        <div className="topSection">
          <div className="testimonial">
            <div style={{backgroundColor: `#333`, height: `75vh`, width: `100%`}}>Madelynn video here</div>
          </div>
          <div className="bioregional">
            <h2
                data-sal="fade-in"
                data-sal-duration="1000"
                data-sal-delay="250"
                data-sal-easing="easeOutElastic">The future is</h2>
            <h1
                data-sal="fade-in"
                data-sal-duration="1000"
                data-sal-delay="250"
                data-sal-easing="easeOutElastic">bioregional</h1>
            <p
                data-sal="fade-in"
                data-sal-duration="1000"
                data-sal-delay="250"
                data-sal-easing="easeOutElastic">The landscape around each of us is alive with activity. Hylo empowers communities to coordinate at the scale of their local landscape -- their bioregion -- and come alive in the places they inhabit.</p>
            <div className="bioregionalDetails">
              <div className="bioregionalDetail"
                data-sal="fade-in"
                data-sal-duration="1000"
                data-sal-delay="250"
                data-sal-easing="easeOutElastic">
                  <img src={localHappenings} alt="" />
                  <p>Get involved in local happenings and celebrate the place you call home.</p>
              </div>
              <div className="bioregionalDetail"
                data-sal="fade-in"
                data-sal-duration="1000"
                data-sal-delay="250"
                data-sal-easing="easeOutElastic">
                  <img src={businesses} alt="" />
                  <p>Find local businesses and projects to support for a more resilient community.</p>
              </div>
              <div className="bioregionalDetail"
                data-sal="fade-in"
                data-sal-duration="1000"
                data-sal-delay="250"
                data-sal-easing="easeOutElastic">
                  <img src={workTogether} alt="" />
                  <p>Work together to care for the land and restore healthy ecosystems.</p>
                </div>
            </div>
          </div>
        </div>
        <div className="bioregionAnimation">
          <div className="bioregionElements">
            <div className="locationMarkers">
              <img src={blueVillage} className="blueVillage" alt=" "  />
              <img src={redVillage} className="redVillage" alt=" " />
              <img src={yellowVillage} className="yellowVillage" alt=" " />
              <img src={northVillage} className="northVillage" alt=" " />
              <img src={southVillage} className="southVillage" alt=" " />
              <img src={westForkRiver} className="westForkRiver" alt=" " />
            </div>
            <div className="membranes">
              <img src={westForkMembrane} className="westForkMembrane" alt=" " />
              <img src={northVillageMembrane} className="northVillageMembrane" alt=" " />
              <img src={redMembrane} className="redMembrane" alt=" " />
              <img src={blueMembrane} className="blueMembrane" alt=" " />
              <img src={yellowMembrane} className="yellowMembrane" alt=" " />
              <img src={greenMembrane} className="greenMembrane" alt=" " />
            </div>
            <div className="connections">
              <img src={westForkConnector} className="westForkConnector" alt=" " />
              <img src={interconnections} className="interconnections" alt=" " />
            </div>
          </div>
          <div className="bioregionalCTA"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="0"
                data-sal-easing="easeOutElastic">
            <ExternalButton label="Explore what's alive near you" link="https://www.hylo.com/public/map/" background={`linear-gradient(93deg, #B162AB 7.65%, #0175D8 100%)`} color="#fff" />
          </div>
          <img src={valleyBackground} className="valleyBackground" alt=" " />
          <div className="valleyFade"></div>
        </div>
      </section>
      <section className="planetaryContainer">
        <div className="starBgContainer">
          <div className="starBg"></div>
        </div>
        <div className="starFade"></div>
        <div className="planetary">
          <h2>Planetary regeneration<br/> is within reach</h2>
          <p className="planetaryDescription">Join us in nurturing a culture of stewardship that unlocks collaboration at the scale of the biosphere.</p>
          <div className="planetAnimationContainer">
            <div className="planetaryCoordination">
              <div className="planet">
                <img src={planet} alt="Spaceship Earth" className="planetEarth" />
                <img src={earthGlow} className="earthGlow" alt=" " />
              </div>
              <div className="planetaryGrid">
                <img src={grid} alt="Planetary Grid" />
              </div>
              <div className="planetaryMembranes">
                <img src={planetaryMembranes} className="planetaryMembranesImage" alt=" " />
              </div>
              <div className="planetaryBelonging">
                <img src={pin} alt="You are here" className="youAreHere" />
                <img src={youBelong} className="youBelong" alt=" " />
              </div>
            </div>
          </div>
          <div className="planetaryDetail">
            <div className="planetaryCTA">
              <p>Are you ready to find your people?</p>
              <a href="https://www.hylo.com/public/groups" className="ctaButton">Explore groups</a>
            </div>
            <div className="planetaryCTA">
              <p>Are you building purpose-driven community?</p>
              <a href="https://www.hylo.com/all/create/group" className="ctaButton">Create a group</a>
            </div>
            <div className="planetaryCTA">
              <p>Do you want to co-create Hylo?</p>
              <a href="https://www.hylo.com/groups/building-hylo/join/RcDe6vcG7u" className="ctaButton">Join Building Hylo</a>

            </div>
          </div>
        </div>
        <div className="starFadeBottom"></div>
      </section>
      <Footer />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
