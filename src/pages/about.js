import * as React from "react"
import "../styles/styles.scss"
import Layout from "../components/layout"
import Footer from "../components/footer"
import coevolutionary from "../images/coevolutionary.png"
import sociocracy from "../images/sociocracy.png"
import team from "../images/team.png"

const AboutPage = () => {
  return (
    <Layout pageTitle="About Hylo">
        <div className="hero aboutHero">
            <div className="headingStyles">
                <h1>Unleashing the capacity of purpose-driven groups to change the world</h1>
            </div>
        </div>
        <div className="aboutContainer">
            <h2>Hylo is a community-led, prosocial coordination platform for purpose-driven groups.</h2>

            <p>Hylo is open-source, non-profit, and driven by participatory design with real-world groups at the forefront of regenerative agriculture, community resilience, peer learning, equity, inclusive capital, and place-based organizing.</p>

            <p>The tech has many unique aspects such as nested groups and cross-group collaboration, which lead to emergent cooperation between groups &mdash; generating broader coalitions with more power to address common goals.</p>

            <p>Hylo is more than a codebase; we are community leaders and prosocial facilitators that guide our member groups 
                on best practices in community stewardship. We are learning together alongside our ecosystem of friends and partners,
                 and we know that <strong>successful coordination takes more than technology</strong> &mdash; it requires deep trust, strong relationships,
                  and a lot of human care.
            </p> 
        
            <h2>Our Vision &amp; Theory of Change</h2>

            <p>Technologies are products of the culture in which they emerge, and they guide the emergence of new cultures. 
                <strong> New culture and new tools are co-evolutionary.</strong> As we work towards the more beautiful world our hearts know is possible, 
                we must envision both the culture and corresponding tools that can birth that future.</p>

            <div className="aboutImage">
                <img src={coevolutionary} alt="Culture and tools evolve together." width="100%" />
            </div>

            <h3>Hylo activates the full potential of purpose-driven groups to create a livable future for all.</h3>

            <p>Hylo does this by helping groups evolve a healthy culture. A healthy group is <strong>prosocial: </strong> 
                productive, equitable, and collaborative. It features a resilient constellation of relationships marked by
                 trust and accountability, with clear agreements including protocols for decision making, distributing resources, 
                 and handling conflict.</p>

            <p>Our theory of change is that <strong>deep trust, strong relationships, and a collaborative culture lead to the most impactful groups. </strong> 
            Before people can successfully engage in complex coordination like making decisions together about money, 
            they need to know each other, and they need to trust each other.</p>

            <p>Technology will be essential to coordinating at a scale necessary to bring our ecosystems back into balance, 
                but tech alone is not enough. The proper place for these tools is to enhance in-person experiences and strengthen 
                face-to-face relationships, not replace them. Hylo is a prosthesis for reconnecting individuals to community 
                and purpose within their local landscape.</p>

            <p><strong>We envision a future where humans are liberated to live a life aligned with purpose; </strong> 
                where everyone is free to give their gifts in service to a greater whole. In this future, 
                human society is aligned with the wellbeing of the living biosphere and the more-than-human world, 
                rights of nature are protected, and Indigenous leadership is respected. In this future, 
                the healing and wellbeing of individuals and communities is prioritized, systems of oppression are dismantled, 
                and human culture deeply embodies care, peace, and unity. In this future, our children are thriving. 
                We offer this work for our ancestors and the ones yet to come.</p>

            <h2>How We Work: Participatory Design</h2>

            <p>Hylo is built through 100% relationship-driven development. We listen to the needs of our partners — 
                people already working to grow healthy communities — and collaborate to co-design tools to amplify their work. 
                The tools we build into Hylo as a result of these participatory design processes are then available for every 
                group on Hylo to use and benefit from.</p>

            <p>Our partners include the Planetary Health Alliance, Prosocial World, OpenTEAM, Regen Network, Salmon Nation, 
                and many other active groups leading the movement to create a world that works for all. 
                Because Hylo is built in deep partnership with these groups according to their real-world needs, 
                <strong> this platform is a unique expression of these communities and their values. </strong> 
                Hylo stands out precisely because it is birthed from and embedded within this web of relationship &mdash; 
                it is an integral part of the emerging ecosystem powering the regenerative movement.</p>

            <h2>Hylo's Stewardship</h2>

            <p>Hylo is maintained by <a target="_blank" rel="noopener noreferrer" href="http://terran.io">Terran Collective</a>, 
                a California Bay Area community of care and practice dedicated to amplifying cooperation among people 
                regenerating our communities and the planet. Hylo Foundation is a fiscally-sponsored 501c3, and Terran co-stewards 
                Hylo with Holo Ltd (the makers of Holochain) who make the technology available under the open source Apache License 2.0. 
                <strong> Our goal is to transition to a structure that enshrines Hylo as a technology commons with a participatory 
                governance model that formally includes stakeholder voices.</strong></p>

            <div className="aboutImage">
                <img src={sociocracy} alt="Hylo team structure" width="100%" />
            </div>

            <p>Our team operations follow the dynamic governance framework of Sociocracy, with a General Circle, Purpose Circle,
                Product Circle, Dev Circle, and Community Circle connected to our broader ecosystem of stakeholders.</p>

            <div className="aboutImage">
                <img src={team} alt="Hylo team members" width="100%" />
            </div>
        </div>
        <Footer />
    </Layout>
  )
}

export default AboutPage

export const Head = () => <title>About Hylo</title>