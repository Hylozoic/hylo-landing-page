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
                All of these elements are summarized in the <Link to="/agreements/#hylo-platform-agreements">Hylo Platform Agreements</Link>, 
                which all Hylo participants are invited to affirm in order to use the platform.</p>

            <h3>Stewardship</h3>
            <p>We approach our world, our communities, our ecosystems, and our tools (such as Hylo) as shared resources 
                that all people are invited to manage with care and responsibility. We <strong>steward</strong> the places, 
                resources, lands and waters we belong to, for the generations yet to come.</p>

            <p><i>Related: Responsibility, respect, integrity, accountability, maturity, governing the commons, distributing power, "power with"</i></p>

            <h4>Examples of Stewardship on Hylo</h4>
            <ul>
                <li>Noticing something that could be improved in your group, and posting a Request or Offer to express your needs and explore solutions.</li>
                <li>Noticing a bug and reporting it via the Feedback & Support menu so Hylo stewards can resolve it.</li>
                <li>Taking on responsibilities in your group and following through on your commitments.</li>
                <li>Joining the <a target="_blank" rel="noopener noreferrer" href="https://www.hylo.com/groups/building-hylo/join/RcDe6vcG7u">Building Hylo</a> group and contributing to the future of the platform by suggesting tools or features that would help your group achieve its purpose!</li>
                <li>Making a <a target="_blank" rel="noopener noreferrer" href="https://opencollective.com/hylo">recurring donation</a> to support Hylo's operations in reciprocity for the value you receive from the platform.</li>
                <li>Messaging someone who is posting inappropriate content to directly address your concerns with them.</li>
            </ul>

            <h3>Co-Creation</h3>
            <p>The products of our work are higher quality and more beautiful when we create them in partnership with each other. 
                <strong> Co-creation</strong> is the means through which we find ways to give our unique gifts, be part of something greater than ourselves, and meet our need to be part of a group: seen & accepted. We all have a role to play in creating a world that works for all.</p>

            <p><i>Related: Collaboration, cooperation, connection, common ground, relationship-centered design, participatory, interdependence, pluralism</i></p>

            <h4>Modeling Co-Creation on Hylo</h4>
            <ul>
                <li>Creating a Project in service to your group's goals, and asking for help from others in your group.</li>
                <li>Commenting on others' posts with your reflections to build on their ideas.</li>
                <li>Co-hosting an event with a few collaborators to bring your group together.</li>
                <li>Bringing your group's activities into the real world with an in-person meetup.</li>
                <li>Getting involved in Hylo's development by contributing ideas, designs, research or even code!</li>
            </ul>

            <h3>Wellbeing</h3>
            <p>We are nurturing a world where individuals, communities, ecosystems, and economies are healthy, joyful, and flourishing. 
                To support the <strong>wellbeing</strong> of our members, Hylo is a place where we grow healthy groups for a healthy world.</p>

            <p><i>Related: Care, thriving, mutual support, safety, belonging, people care, planet care, future care</i></p>

            <h4>Growing Wellbeing on Hylo</h4>
            <ul>
                <li>Posting Requests to ask for the help you need, and Offers to share assistance you are able to give.</li>
                <li>When communicating on Hylo, think about how you would talk to someone if they were in person with you, and ensure your words are kind and constructive.</li>
                <li>Take regular breaks from technology and go move your body or go outside.</li>
                <li>Reach out to people in your group that look like they might be struggling to check-in and see what support they may need.</li>
            </ul>

            <h3>Liberation</h3>
            <p>We are consciously building Hylo to support the work to repair harms, end inequity and injustice, and dismantle systems of oppression to create a world that works for all. 
                <strong> "No one of us can be free until everybody is free." - Maya Angelou</strong></p>

            <p><i>Related: Justice, freedom, equity, diversity, inclusion, anti-racism, reconciliation, healing, solidarity</i></p>

            <h4>Contributing to Liberation on Hylo</h4>
            <ul>
                <li>Inviting folks from diverse backgrounds into your group, and creating a culture where all feel welcome and safe.</li>
                <li>When encountering strong feelings: pause, breathe, and open to curiosity and compassion.</li>
                <li>Educating oneself on issues of equity and justice, and bringing that awareness into one's work for positive change.</li>
                <li>Working to create inclusive processes for group discussion and decision making that invite the voices of all the members.</li>
            </ul>

            <h3>Adaptation</h3>
            <p>We commit to conscious evolution and growth in response to learning more about the needs of our communities on Hylo, what works, and what doesn't. 
                With every interaction, we listen, learn, and <strong>adapt</strong> to better serve our communities.</p>

            <p><i>Related: Learning, listening, iteration, emergence, feedback, evolution</i></p>

            <h4>Examples of Adaptation on Hylo</h4>
            <ul>
                <li>Gathering feedback from members of the group and adapting a project according to their input.</li>
                <li>Being flexible with a proposed solution and willing to adjust based on unforeseen circumstances or new information.</li>
                <li>Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience.</li>
                <li>Evolving a group's purpose or agreements over time as the community evolves. 
                    Knowing when a group or project has reached completion, or when a new group is ready to be seeded.</li>
            </ul>

            <h3>Agency</h3>
            <p>We honor the sovereignty of individuals and groups over their data, their privacy, and how they choose to engage with technology. 
                We are building appropriate technology that gives people <strong>agency</strong> to achieve their goals without getting in the way through extracting data or harvesting attention.</p>

            <p><i>Related: Decentralized, distributed, consent, interoperability, openness, privacy, accessibility</i></p>

            <h4>Using Your Agency on Hylo</h4>
            <ul>
                <li>Carefully deciding what you decide to share in your group; not following pressure to overshare or 
                    post private information, or re-share personal stories someone told you without their consent.</li>
                <li>Stepping forward to suggest or make changes in your group when something isn't working, 
                    instead of waiting for others to do it.</li>
                <li>Adjusting Hylo settings to create an experience that works for you in terms of Notifications, Stream ranking, and Post aggregation.</li>
                <li></li>
            </ul>

            <h3>Unacceptable Behaviors</h3>
            <p>We've compiled this list by drawing from the exemplary work of the <a target="_blank" rel="noopener noreferrer" href="https://www.contributor-covenant.org/version/2/1/code_of_conduct/">Contributor Covenant</a> and 
                the <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1T_yvFkH24hCkKMoWvGt2iTP4yNDR0vWRkC81tesFEyw/edit#heading=h.iajzjy3x6llo">Inclusive Cultural Covenant</a>.
                These behaviors are not allowed on Hylo. Content or messages that include these behaviors will be subject to 
                deletion and other Accountability and Enforcement actions at the discretion of group stewards. 
                If you see this type of content, please Flag it immediately.</p>

            <ol>
                <li>The use of sexualized or violent language or imagery, and sexual attention of any kind</li>
                <li>Trolling, insulting, or derogatory comments, and personal or political attacks 
                    (we also recommend avoiding the use of snark, sarcasm, teasing and other things that don't translate well online)</li>
                <li>Public or private harassment such as threats, intimidation, pressure, or unwanted attention</li>
                <li>Publishing others' private information, such as a physical or email address, without their explicit permission</li>
                <li>Other conduct which could reasonably be considered inappropriate in a professional setting</li>
                <li>Threatening or inciting violence against any persons, groups, or 'types' of people</li>
                <li>Characterizing anyone's personality or behaviors, or making jokes about them, 
                    on the basis of inherent traits such as national origin, ethnicity, race, gender, 
                    gender identity and expression, sexual orientation, disability or medical condition, or lifestyle factors 
                    such as parenthood or employment</li>
                <li>Carrying out or advocating for any illegal activities</li>
            </ol>

            <h2>Accountability &amp; Enforcement</h2>
            <p>Violations of the Code of Conduct will be subject to an accountability process to correct the behavior and repair harm. 
                In accordance with the prosocial principle of graduated responding to unhelpful behavior, 
                we endorse the Enforcement process from the <a target="_blank" rel="noopener noreferrer" href="https://www.contributor-covenant.org/version/2/1/code_of_conduct/">Contributor Covenant</a> that 
                suggests escalating consequences in response to increasingly harmful behavior.</p>

            <p>Community Stewards are responsible for clarifying and enforcing the standards of acceptable behavior and 
                will take appropriate and fair corrective action in response to any behavior that they deem inappropriate, 
                threatening, offensive, or harmful. They have the right and responsibility to remove posts or other 
                contributions that are not aligned with this Code of Conduct, and will communicate reasons for moderation 
                decisions when appropriate.</p>

            <p>Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the community 
                stewards responsible for enforcement by Flagging the content. All complaints should be reviewed and 
                investigated promptly and fairly. Community stewards are obligated to respect the privacy and security 
                of the reporter of any incident.</p>

            <p>Community stewards and members are welcome to reach out to the Hylo stewards 
                for support with accountability and enforcement by emailing us at <a href="mailto:hello@hylo.com">hello@hylo.com</a>.</p>

            <h3>Enforcement Guidelines</h3>
            <p>We suggest that Hylo community stewards follow these Community Impact Guidelines in determining the 
                consequences for any action they deem in violation of this Code of Conduct:</p>
            
            <ol>
                <li><strong>Correction</strong><br/>
                    Community Impact: Use of inappropriate language or other behavior deemed unprofessional or unwelcome in the community.<br/><br/>
                    Consequence: A private, written warning from community leaders, providing clarity around the nature of the
                     violation and an explanation of why the behavior was inappropriate. A public apology may be requested.
                </li>
                <li><strong>Warning</strong><br/>
                    Community Impact: A violation through a single incident.<br/><br/>
                    Consequence: A warning with consequences for continued behavior, such as a temporary or permanent ban. 
                </li>
                <li><strong>Temporary Ban</strong><br/>
                    Community Impact: A serious violation of community standards, including sustained inappropriate behavior.<br/><br/>
                    Consequence: A temporary ban from participating in the community for a specified period of time. 
                    This would be a good time for a mediated conversation or conflict resolution process if there 
                    is a pattern of harmful behavior between specific individuals.
                </li>
                <li><strong>Permanent Ban</strong><br/>
                    Community Impact: Demonstrating a pattern of violation of community standards, or a single very serious 
                    violation, or a refusal to apologize and participate in a conflict resolution process to account for the behavior.<br/><br/>
                    Consequence: A permanent ban from the community.
                </li>
            </ol>

            <p>This Code of Conduct is adapted from the Contributor Covenant, version 2.1, available at <a target="_blank" rel="noopener noreferrer" href="https://www.contributor-covenant.org/version/2/1/code_of_conduct/">https://www.contributor-covenant.org/version/2/1/code_of_conduct.html</a>.</p>

            <h2 id="hylo-platform-agreements">Hylo Platform Agreements</h2>


        </div>
        <Footer />
    </Layout>
  )
}

export default AgreementsPage

export const Head = () => <title>Hylo Agreements</title>