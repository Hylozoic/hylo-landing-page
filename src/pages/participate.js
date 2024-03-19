import * as React from "react"

import Footer from "../components/footer"
import Layout from "../components/layout"

import meme from "../images/meme.png"

import "../styles/styles.scss"

const ParticipatePage = () => {
  return (
    <Layout pageTitle="Participate in Hylo">
        <div className="hero contentHero">
            <div className="headingStyles">
                <h1>A public good technology commons co-created by you</h1>
            </div>
            <div className="backgroundWrapper">
                <div className={'backgroundImage participate'} style={{backgroundImage: `../images/participate-page-header.png`}}></div>
                <div className="backgroundFade"></div>
            </div>
        </div>
        <div className="contentContainer">
            <h2>There is a place for you at our table.</h2>

            <div className="contentSection">
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
            <p>This is the main group for our open-source community with over 600 participants shaping the future of Hylo.
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
            <h3>Upcoming Calls</h3>
            <ul>
                <li><a target="_blank" rel="noopener noreferrer" href="https://lu.ma/hylo">March 20, 2024 @ 10am PDT (Register Here)</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://lu.ma/hyloapril">April 16, 2024 @ 12pm PDT (Register Here)</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://lu.ma/hylomay">May 23, 2024 @ 3pm PDT (Register Here)</a></li>
            </ul>

            <h2 id="community-stewardship">Get community stewardship support</h2>
            <p><strong>An online community is a living thing</strong>, like a garden -- it needs care and attention to thrive.
                Hylo is designed to help group stewards build engagement and collaboration, but no technology can take the place of dedicated tending from a human.
                If building community online feels daunting, we are here to help! The <a target="_blank" rel="noopener noreferrer" href="https://hylozoic.gitbook.io/hylo/guides/building-engagement-in-your-group">Hylo documentation</a> includes a lot of guidance to help your group thrive and effectively take action toward your goals.</p>
            <p>If you're looking for more support, the Hylo team offer community stewardship support at a variety of levels. Over the years,
                we've learned a lot about what works and what doesn't for growing community online, and we love to share that insight to guide groups toward success.
                You can learn more about our <a target="_blank" rel="noopener noreferrer" href="https://hylozoic.gitbook.io/hylo/about/community-stewardship-support-program-csaas">community stewardship offerings here</a>.
            </p>

            <h2 id="partner-with-us">Partner with us</h2>
            <p>Our partners are purpose-driven groups at the leading edge of creating a culture that works for all. Their sectors are
                as varied as regenerative agriculture, inclusive capital, bioregional organizing, health and wellbeing, climate action,
                and lots more. Each of them were searching for a community platform that could meet their needs, and coming up short until they found Hylo.
                Together, we co-design unique new features for Hylo that help them achieve their purpose, and everyone on Hylo gets to enjoy these tools, too.
            </p>
            <p>Do you have a vision for coordination tools to meet your specific needs? Let's build them together! Our partners contribute
                the resources, experience, and clear need, and our team contributes facilitation, creativity, and technical expertise to manifest
                your vision. <strong>Trust us, this is going to be way more fun than trying to build your own community platform from scratch.</strong>
            </p>
            <p>To explore partnership possibilities, please reach out to <strong><a href="mailto:hello@hylo.com">hello@hylo.com</a></strong>.</p>

            <h2 id="contribute">Contribute to Hylo</h2>
            <p>Hylo is resourced by groups and individuals that receive value from the platform. If Hylo helps you move toward your purpose, please
                become a supporter by signing up for a small recurring contribution. Thanks!
            </p>

            <iframe title="Contribute to Hylo" src="https://opencollective.com/embed/hylo/donate" style={{width: "100%", minHeight: "100vh"}}></iframe>


        </div>
        <Footer />
    </Layout>
  )
}

export default ParticipatePage

export const Head = () => <title>Participate in Hylo</title>