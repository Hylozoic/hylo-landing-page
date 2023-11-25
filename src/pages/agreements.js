import * as React from "react"
import "../styles/styles.scss"
import Layout from "../components/layout"
import Footer from "../components/footer"
import values from "../images/hylo-values.png"

const AgreementsPage = () => {
  return (
    <Layout pageTitle="Hylo Agreements">
        <div className="hero aboutHero">
            <div className="headingStyles">
                <h1>A public good technology commons co-created by you</h1>
            </div>
        </div>
        <div className="aboutContainer">
            <h2 id="values">Our Values</h2>

            <div className="aboutImage">
                <img src={values} alt="Hylo values" width="100%" />
            </div>
        </div>
        <Footer />
    </Layout>
  )
}

export default AgreementsPage

export const Head = () => <title>Hylo Agreements</title>