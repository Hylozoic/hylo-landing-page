import * as React from "react"
import "../styles/styles.scss"
import Layout from "../components/layout"
import Button from "../components/button"
import Label from "../components/label"
import leaf from "../images/icon/leaf-icon.svg"
import heart from "../images/icon/heart-icon.svg"
import calendar from "../images/icon/calendar-icon.svg"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div className="hero">
        <h1 className="headingStyles">
          Create community<br/>
          with purpose on Hylo
        </h1>
        <div>
          <Button label="Sign Up" link="/sign-up/"/>
          <Button label="Log In" link="/log-in/"/>
        </div>
      </div>
      <section className="passion">
        <div className="passionLeft">
          <Label label="Planning a garden day at the lake!" icon={leaf} />
          <Label label="Anyone have extra shovels?" icon={heart} />
          <Label label="Garden Day" icon={calendar} color="#EB5757" />
        </div>
        <div className="passionRight">
          <h2>Driven by passion,<br/>
          united by purpose</h2>
          <p>Hylo is the place where people who are passionate about their dreams come together to support each other and make them a reality.</p>
          <p>It's a community where you can <strong>connect with others who share your purpose</strong> and work towards achieving your goals together.</p>
          <h3 style={{marginTop: `50px`, textAlign: `center`}}>Ready to find where you belong?<br/>
          <Button label="Explore Groups" link="/explore/"/></h3>      
        </div>
      </section>
      <section className="alive">
        <div className="aliveLeft">
          <h2>Watch your group<br/>come alive</h2>
          <p>Many online groups struggle with engagement and need a lot of management. 
            On Hylo, groups transform into vibrant, self-organized, collaborative networks.</p>
          <p>Hylo makes it easy for group members to step up and lead projects and events, enabling the group to grow and deepen its impact.</p>
          <h3 style={{marginTop: `50px`, textAlign: `center`}}>Ready to gather your people?<br/>
          <Button label="Create a Group" link="/create/"/></h3>   
        </div>
        <div className="aliveRight"></div>
      </section>
      <section className="interdependence">
        <h2>Designed for<br/>interdependence</h2>
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
