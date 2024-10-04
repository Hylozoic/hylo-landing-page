import * as React from "react"

import Footer from "../components/footer"
import Layout from "../components/layout"
import { SEO } from "../components/seo"

import coevolutionary from "../images/coevolutionary.png"
import sociocracy from "../images/sociocracy.png"
import team from "../images/team.png"

import "../styles/styles.scss"

export const Head = ({ location }) => <SEO title="About | Hylo" pathname={location.pathname} />

const AboutPage = () => {
  return (
    <Layout pageTitle="About Hylo">
        <div className="hero contentHero">
            <div className="headingStyles">
                <h1>Unleashing the capacity of purpose-driven groups to change the world</h1>
            </div>
            <div className="backgroundWrapper">
                <div className={'backgroundImage about'} style={{backgroundImage: `../images/about-page-header.png`}}></div>
                <div className="backgroundFade"></div>
            </div>
        </div>
        <div className="contentContainer">
            <h2>Hylo is a community-led, prosocial coordination platform for purpose-driven groups.</h2>

            <p>Hylo is open-source, non-profit, and driven by participatory design with real-world groups at the forefront of regenerative agriculture, community resilience, peer learning, equity, inclusive capital, and place-based organizing.</p>

            <p>The tech has many unique aspects such as nested groups and cross-group collaboration, which lead to emergent cooperation between groups &mdash; generating broader coalitions with more power to address common goals.</p>

            <p>Hylo is more than a codebase; we are community leaders and prosocial facilitators that guide our member groups
                on best practices in community stewardship. We are learning together alongside our ecosystem of friends and partners,
                 and we know that <strong>successful coordination takes more than technology</strong> &mdash; it requires deep trust, strong relationships,
                  and a lot of human care.
            </p>

            <h2 id="vision">Our Vision &amp; Theory of Change</h2>

            <p>Technologies are products of the culture in which they emerge, and they guide the emergence of new cultures.
                <strong> New culture and new tools are co-evolutionary.</strong> As we work towards the more beautiful world our hearts know is possible,
                we must envision both the culture and corresponding tools that can birth that future.</p>

            <div className="contentImage">
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

            <h3>Bioregions are key to a Just Transition</h3>

            <p>Place-based organizing is central to this vision for change. A <strong>bioregion</strong> is a geographic area
             defined by natural boundaries such as ecosystems, watersheds, and climate, as well as the cultural and community
              practices that arise from living within that environment.</p>

            <p>Organizing at the scale of the bioregion is essential because it aligns human activities with natural ecosystems,
                 fostering sustainability by encouraging resource management and decision-making that respect local ecological limits,
                  while also strengthening community resilience through place-based collaboration and cultural practices rooted in the environment.</p>

            <p>Most humans today are disconnected from the land and each other. People want to help, but many of us don't
                 know what to do when faced with climate chaos, and don't have the skills and tools to organize an effective response.
                 <strong>Through bioregional organizing, we can remember how to be in relationship with the land we live on and each other
                   - taking collective action toward community resilience and climate adaptation, ecological regeneration, and returning to lifeways in harmony with the living world.</strong></p>

            <h2 id="how-we-work">How We Work: Participatory Design</h2>

            <p>Hylo is built through 100% relationship-driven development. We listen to the needs of our partners —
                people already working to grow healthy communities — and collaborate to co-design tools to amplify their work.
                The tools we build into Hylo as a result of these participatory design processes are then available for every
                group on Hylo to use and benefit from.</p>

            <p>Our partners include the <a href='https://www.planetaryhealthalliance.org/' target='_blank' rel="noopener noreferrer">Planetary Health Alliance</a>, <a href='https://www.prosocial.world/' target='_blank' rel="noopener noreferrer">Prosocial World</a>, <a href='https://openteam.community/' target='_blank' rel="noopener noreferrer">OpenTEAM</a>, <a href='https://www.regen.network/' target='_blank' rel="noopener noreferrer">Regen Network</a>, <a href="https://salmonnation.net" target="_blank" rel="noopener noreferrer">Salmon Nation</a>,
                and many other active groups leading the movement to create a world that works for all.
                Because Hylo is built in deep partnership with these groups according to their real-world needs,
                <strong> this platform is a unique expression of these communities and their values. </strong>
                Hylo stands out precisely because it is birthed from and embedded within this web of relationship &mdash;
                it is an integral part of the emerging ecosystem powering the regenerative movement.</p>

            <h2 id="hylo-stewardship">Hylo's Stewardship</h2>

            <p>Hylo is maintained by <a target="_blank" rel="noopener noreferrer" href="http://terran.io">Terran Collective</a>,
                a California Bay Area community of care and practice dedicated to amplifying cooperation among people
                regenerating our communities and the planet. Hylo Foundation is a fiscally-sponsored 501c3, and Terran co-stewards
                Hylo with <a href='https://holo.host' target='_blank' rel="noopener noreferrer">Holo Ltd</a> (the makers of <a href='https://www.holochain.org' target='_blank' rel="noopener noreferrer">Holochain</a>)
                who make the technology available under the open source Apache License 2.0.
                We are in the process of assembling an advisory board and establishing an indepedent business entity for Hylo.
                <strong> Our goal is to transition to a structure that enshrines Hylo as a technology commons with a participatory
                governance model that formally includes stakeholder voices.</strong></p>

            <div className="contentImage">
                <img src={sociocracy} alt="Hylo team structure" width="100%" />
            </div>

            <p id="team">Our team operations follow the dynamic governance framework of Sociocracy, with a General Circle, Purpose Circle,
                Product Circle, Dev Circle, and Community Circle connected to our broader ecosystem of stakeholders.</p>

            <div className="contentImage">
                <img src={team} alt="Hylo team members" width="100%" />
            </div>

            <p><strong><a href="https://tibetsprague.com" target="_blank" rel="noopener noreferrer">Tibet Sprague, Director of Technology</a></strong><br/>
            Tibet Sprague is a systems entrepreneur, communitarian technologist, and passionate evangelist of the more beautiful world our hearts know is possible.
            He is founder and core steward of the Terran Collective, and Director of Technology for Hylo.
            He also stewards the Collaborative Technology Alliance, facilitating collaboration and interoperability among humane social technologists and platforms.
            Tibet loves to weave community, facilitate councils and other prosocial processes, and bring people together to regenerate the Bay Area bioregion he resides in.
            Tibet graduated from Brown University with a degree in Computer Science.
            </p>
            <p><strong><a href="https://www.linkedin.com/in/clarepolitano/" target="_blank" rel="noopener noreferrer">Clare Politano, Director of Product</a></strong><br/>
            Clare is a mother, a technologist, a land steward, and a community organizer weaving systems and tools for a
            regenerative future. With a background in non-profit communications and software engineering, she has spent over
             a decade at the forefront of using technology as a tool to mobilize communities for change.
             Clare leads product development for Hylo, where she facilitates processes to co-design tech solutions for
             real-world groups. Through this work, Clare has developed a specialization in participatory governance and community
             stewardship, guiding numerous groups to grow communities that are equitable and impactful.
             She is a ProSocial facilitator and holds a B.A. in Political Science from the University of Virginia.
            </p>
            <p><strong><a href='https://www.linkedin.com/in/krisha-subramanian-6911a939/' target="_blank" rel="noopener noreferrer">Krisha Subramanian, Community Lead</a></strong><br/>
            Krisha has a background in business development and sales, though her passions lie in holistic wellness,
            regenerative living, social justice, and earth-based traditions. She is a life-long student of Ayurveda
            and is in perpetual inquiry around how we can live in greater harmony with ourselves, our community, and planet.
            She stewards a 50-hectare regenerative land project in the cloud forest of Costa Rica.
            </p>
            <p><strong><a href="https://www.linkedin.com/in/aaronbrodeur/" target="_blank" rel="noopener noreferrer">Aaron Broduer, Director of Design</a></strong><br/>
            Aaron is an interface and systems designer, artist, musician, builder, and entrepreneur.
            His work in technology designing and building social apps, sales systems, satellite solar design tools,
            distributed governance tools, and nationwide activism platforms has touched millions.
            He is dedicated to designing systems and tools for resilience and thriving in an uncertain future.
            He experiments with building closed-loop products with lighting business <a target="_blank" rel="noopener noreferrer" href="https://www.alchemica.ai/">Alchemica</a>,
            and he is a contributor to the Holochain ecosystem through <a target="_blank" rel="noopener noreferrer" href="https://lightningrodlabs.org/">Lightningrod Labs</a>.
            </p>
            <p><strong><a href="https://www.linkedin.com/in/thomasgwatson/" target="_blank" rel="noopener noreferrer">Tom Watson, Senior Software Engineer</a></strong><br/>
            Hailing from Canberra, Australia, Tom arrives into 2024 deeply pondering 1) our relationship to place,
            2) cultural practices that build community (eg: rites of passage) and
            3) What is “regenerative culture”, and can we define it without it being captured by the marketing departments of the hegemony.
            Tom has been focusing on mobile development for the team over the last year.
            </p>
            <p><strong><a href="https://www.linkedin.com/in/yasmineelbaggari/" target="_blank" rel="noopener noreferrer">Yasmine El Baggari, Community Steward</a></strong><br/>
            A native of Morocco, now based in San Francisco, Yasmine is passionate about connecting people and bridging cultures
            to encourage a more peaceful caring world. She launched <a href="https://www.voyaj.com/" target="_blank" rel="noopener noreferrer">Voyaj</a>,
            a platform that connects people from around the globe for one-on-one meaningful exchanges to foster global understanding.
            For the past four years, Yasmine's reach has included work with the World Bank, a Masters in Human Development and Psychology at Harvard Graduate School of Education,
            and with the US State Department as an "Engage America" Ambassador. She has spoken at international conferences,
            including the World Economic Forum, the Middle East Studies Association, and Obama's Global Entrepreneurship Summit.
            Yasmine has traveled to all 50 U.S. states, 40+ countries on her own and was welcomed by 250+ families globally.
            She is simply on a mission to bring back openness, curiosity, and empathy into our world.
            </p>
        </div>
        <Footer />
    </Layout>
  )
}

export default AboutPage
