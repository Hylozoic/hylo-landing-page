import * as React from "react"
import "../styles/styles.scss"
import Layout from "../components/layout"
import Button from "../components/button"

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
        <div className="passionLeft"></div>
        <div className="passionRight">
          <h2>Driven by passion,<br/>
          united by purpose</h2>
          <p>Hylo is the place where people who are passionate about their dreams come together to support each other and make them a reality.</p>
          <p>It's a community where you can connect with others who share your purpose and work towards achieving your goals together.</p>
          <h3>Ready to find where you belong?</h3>
          <Button label="Explore Groups" link="/explore/"/>        
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
