import * as React from "react"
import "../styles/styles.scss"
import Layout from "../components/layout"
import Footer from "../components/footer"

const ParticipatePage = () => {
  return (
    <Layout pageTitle="Participate in Hylo">
        <div className="hero aboutHero">
            <div className="headingStyles">
                <h1>A public good technology commons co-created by you</h1>
            </div>
        </div>
        <div className="aboutContainer">
            <h2>There is a place for you at our table</h2>
            <p>You are warmly invited to join the Hylo community and contribute your unique voice to stewarding this platform. 
                Hylo is its stakeholders - this technology is shaped with care by our members, partners, 
                and our 500+ open source contributors. Come be a part of it!</p> 
        
            <h2>Join our open-source community</h2>

            <p>Everyone says they're tired of social media business as usual, 
                but who's walking the talk and putting energy into the next evolution of social technology? 
                Our community is doing something radically different. Here's how to get involved:</p>

            <h2>Attend a community call</h2>

            <h2>Work with us</h2>

            <h2>Contribute to Hylo</h2>
        </div>
        <Footer />
    </Layout>
  )
}

export default ParticipatePage

export const Head = () => <title>Participate in Hylo</title>