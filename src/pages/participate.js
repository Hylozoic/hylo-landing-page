import * as React from "react"
import "../styles/styles.scss"
import Layout from "../components/layout"
import Footer from "../components/footer"
import meme from "../images/meme.png"

const ParticipatePage = () => {
  return (
    <Layout pageTitle="Participate in Hylo">
        <div className="hero aboutHero">
            <div className="headingStyles">
                <h1>A public good technology commons co-created by you</h1>
            </div>
        </div>
        <div className="aboutContainer">
            <h2>There is a place for you at our table.</h2> 

            <div className="participateSection">
                <p><strong>You are warmly invited to join the Hylo community</strong> and contribute your unique voice to stewarding this platform. 
                    Hylo is its stakeholders &mdash; this technology is shaped with care by our members, partners, 
                    and our 500+ open source contributors. Come be a part of it!</p>

                <div className="asideImage">
                    <img src={meme} alt="Technology as a public good" width="100%" />
                </div>
            </div>
        
            <h2 id="join">Join our open-source community</h2>
            <p>Everyone says they're tired of social media business as usual, 
                but who's walking the talk and putting energy into the next evolution of social technology? 
                Our community is doing something radically different. Here's how to get involved:</p>

            <h3>Building Hylo</h3>
            <p>This is the main group for our open-source community with almost 600 participants shaping the future of Hylo. 
                Join this group to get the earliest product news, comment on upcoming designs and features, 
                share your ideas for the platform, learn about opportunities to contribute, and ask questions and chat 
                with the Hylo stewardship team and wider community. <br/><a target="_blank" rel="noopener noreferrer" href="https://www.hylo.com/groups/building-hylo/join/RcDe6vcG7u">Join here.</a></p>

            <h3>Hylo Community Organizers</h3>
            <p>This is a community of practice for all-star community stewards on Hylo to connect and learn from each other. 
                In conversation with Hylo's community team, access resources and learn best practices in prosocial group leadership. 
                <br/><a target="_blank" rel="noopener noreferrer" href="https://www.hylo.com/groups/hylo-community-organizing/join/MKC624YdxPHgSim5xx9y"> Join here.</a></p>

            <h3>Collaborative Technology Alliance</h3>
            <p>The CTA facilitates collaboration among those building social technology in service to a thriving world. 
                We envision the future of the social web as an ecosystem of interoperable tools designed to enable 
                communities to collaborate, share resources, sensemake and create at scale. 
                <br/><a target="_blank" rel="noopener noreferrer" href="https://www.collaborative.tech/"> Join here.</a></p>

            <h2 id="gatherings">Join a community call</h2>
            <p>We host a monthly community call for folks in our ecosystem to connect and chat about Hylo and their community, 
                and ask questions and offer input to the Hylo stewardship team. You're invited to join us! </p>
            <div>
                <iframe src="https://hylo.com/groups/building-hylo/events?layoutFlags=hideNav" style={{ position: "relative", width: "500px", height: "100vh"}} title="Building Hylo Events"></iframe>
            </div>

            <h2 id="partner-with-us">Partner with us</h2>
            <p>We host a monthly community call for folks in our ecosystem to connect and chat about Hylo and their community, 
                and ask questions and offer input to the Hylo stewardship team. You're invited to join us! </p>

            <h2 id="contribute">Contribute to Hylo</h2>
            <p>We host a monthly community call for folks in our ecosystem to connect and chat about Hylo and their community, 
                and ask questions and offer input to the Hylo stewardship team. You're invited to join us! </p>

            
        </div>
        <Footer />
    </Layout>
  )
}

export default ParticipatePage

export const Head = () => <title>Participate in Hylo</title>