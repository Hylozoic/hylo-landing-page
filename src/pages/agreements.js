import * as React from "react"
import "../styles/styles.scss"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Footer from "../components/footer"
import values from "../images/hylo-values.png"

const AgreementsPage = () => {
  return (
    <Layout pageTitle="Hylo Agreements">
        <div className="hero contentHero">
            <div className="headingStyles">
                <h1>A public good technology commons co-created by you</h1>
            </div>
        </div>
        <div className="contentContainer">
            <h2 id="values">Our Values</h2>

            <p>Alongside our <Link to="/about/#vision">Purpose &amp; Vision</Link>, Hylo is driven by a strong set of values. 
                These values were derived by the current Hylo stewardship team through a prosocial process to 
                identify our most strongly held and shared values that animate our work.</p>

            <div className="contentImage">
                <img src={values} alt="Hylo values" width="100%" />
            </div>

            <h2 id="code-of-conduct">Cultural Norms &amp; Code of Conduct</h2>

            <p>The culture of Hylo is caring and collaborative. As we welcome new members into the Hylo community, 
                we invite you to embrace this culture and do your part to maintain the vibe. Hylo's Cultural Norms are also our 
                Code of Conduct, focusing on the types of behaviors we want to encourage, through the lens of Hylo's six core values. 
                We also outline behavior that is unacceptable on Hylo, and an accountability and enforcement process for responding to such behavior. 
                All of these elements are summarized in the <Link to="/agreements/#hylo-platform-agreements">Hylo Platform Agreements</Link>, which all Hylo participants are invited to affirm in order to use the platform.</p>

            <h3>Stewardship</h3>
            <p>We approach our world, our communities, our ecosystems, and our tools (such as Hylo) as shared resources 
                that all people are invited to manage with care and responsibility. We <strong>steward</strong> the places, 
                resources, lands and waters we belong to, for the generations yet to come.</p>

            <p><i>Related: Responsibility, respect, integrity, accountability, maturity, governing the commons, distributing power, empowering, "power with"</i></p>

            <h4>Example Behaviors</h4>
            <ul>
                <li>Noticing something that could be improved in your group, and posting a Request or Offer to express your needs and explore solutions.</li>
                <li>Taking on responsibilities in your group and following through on your commitments.</li>
                <li>Joining <a target="_blank" rel="noopener noreferrer" href="https://www.hylo.com/groups/building-hylo/join/RcDe6vcG7u">Building Hylo</a> and contributing to the future of the platform by suggesting tools or features that would help your group achieve its purpose!</li>
                <li>Making a <a target="_blank" rel="noopener noreferrer" href="https://opencollective.com/hylo">recurring donation</a> to support Hylo's operations in reciprocity for the value you receive from the platform.</li>
            </ul>

            <h3>Co-Creation</h3>
            <p>The products of our work are higher quality and more beautiful when we create them in partnership with each other. 
                <strong> Co-creation</strong> is the means through which we find ways to give our unique gifts, be part of something greater than ourselves, and meet our need to be part of a group: seen & accepted. We all have a role to play in creating a world that works for all.</p>

            <p><i>Related: Collaboration, cooperation, connection, common ground, relationship-centered design, participatory, interdependence, pluralism</i></p>

            <h4>Example Behaviors</h4>
            <ul>
                <li>Creating a Project in service to your group's goals, and asking for help from others in your group.</li>
                <li>Commenting on others' posts with your reflections to build on their ideas.</li>
                <li>Co-hosting an event with a few collaborators to bring your group together.</li>
                <li>Bringing your group's activities into the real world with an in-person meetup.</li>
            </ul>

            <h3>Wellbeing</h3>
            <p>We are nurturing a world where individuals, communities, ecosystems, and economies are healthy, joyful, and flourishing. 
                To support the <strong>wellbeing</strong> of our members, Hylo is a place where we grow healthy groups for a healthy world.</p>

            <p><i>Related: Care, thriving, mutual support, safety, belonging, people care, planet care, future care</i></p>

            <h4>Example Behaviors</h4>
            <ul>
                <li>Posting Requests to ask for the help you need, and Offers to share assistance you are able to give.</li>
                <li>When communicating on Hylo, think about how you would talk to someone if they were in person with you, and ensure your words are kind and constructive.</li>
                <li>Caring for yourself: move your body, go outside, eat well, and have fun!</li>
                <li>Caring for the people around you: cook a meal, do the dishes, help a neighbor, call your parents!</li>
            </ul>

            <h3>Liberation</h3>
            <p>We are consciously building Hylo to support the work to repair harms, end inequity and injustice, and dismantle systems of oppression to create a world that works for all. 
                <strong> "No one of us can be free until everybody is free." - Maya Angelou</strong></p>

            <p><i>Related: Justice, freedom, equity, diversity, inclusion, anti-racism, reconciliation, healing, solidarity</i></p>

            <h4>Example Behaviors</h4>
            <ul>
                <li>Inviting folks from diverse backgrounds into your group, and creating a culture where all feel welcome and safe.</li>
                <li>When encountering strong feelings, we pause, breathe, and open ourselves to curiosity and compassion.</li>
                <li>Educating oneself on issues of equity and justice, and bringing that awareness into one's work for positive change.</li>
                <li>Focusing on what is best not just for us as individuals, but for the overall community.</li>
            </ul>

            <h3>Adaptation</h3>
            <p>We commit to conscious evolution and growth in response to learning more about the needs of the communities around us, what works, and what doesn't. 
                With every interaction, we listen, learn, and <strong>adapt</strong> to better serve our community.</p>

            <p><i>Related: Learning, listening, iteration, emergence, feedback, evolution</i></p>

            <h4>Example Behaviors</h4>
            <ul>
                <li>Gathering feedback from members of the group and adapting a project according to their input.</li>
                <li>Being flexible with a proposed solution and willing to adjust based on unforeseen circumstances or new information.</li>
                <li>Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience.</li>
            </ul>

            <h3>Agency</h3>
            <p>We honor the sovereignty of individuals and groups over their data, their privacy, and how they choose to engage with technology. 
                We are building appropriate technology that gives people <strong>agency</strong> to achieve their goals without getting in the way through extracting data or harvesting attention.</p>

            <p><i>Related: Decentralized, distributed, consent, interoperability, openness, privacy, accessibility</i></p>

            <h4>Example Behaviors</h4>
            <ul>
                <li>Choosing technology tools that align with your values.</li>
                <li>Supporting communities in choosing the appropriate technology tools for their context.</li>
                <li>Adjusting Hylo settings to create an experience that works for you in terms of Notifications, Stream ranking, and Post aggregation.</li>
                <li>Engaging in your group's decision making-process to voice your opinions, provide feedback, and make choices to influence the direction of the group.</li>
            </ul>





            <h2 id="hylo-platform-agreements">Hylo Platform Agreements</h2>

        </div>
        <Footer />
    </Layout>
  )
}

export default AgreementsPage

export const Head = () => <title>Hylo Agreements</title>