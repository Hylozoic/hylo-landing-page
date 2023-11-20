import * as React from "react"
import "../styles/styles.scss"
import Layout from "../components/layout"
import Footer from "../components/footer"

const ParticipatePage = () => {
  return (
    <Layout pageTitle="Participate in Hylo">
        <div className="hero aboutHero">
            <div className="headingStyles">
                <h1>Unleashing the capacity of purpose-driven groups to change the world</h1>
            </div>
        </div>
        <div className="aboutContainer">
            <h2>There is a place for you at our table</h2>
            <p>Hylo is a community-led, prosocial coordination platform for purpose-driven groups.</p> 
        
            <h2>Join our open-source community</h2>

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