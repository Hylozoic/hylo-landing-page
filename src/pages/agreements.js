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
            <h2 id="values">Our Values &amp; Commitments</h2>

            <p>Alongside our <Link to="/about/#vision">Purpose &amp; Vision</Link>, Hylo is driven by a strong set of values. 
                These values were derived by the current Hylo stewardship team through a prosocial process to 
                identify our most strongly held and shared values that animate our work. We are committed to upholding them
                 in all that we do, and we ask that everyone using the platform uphold them as well.</p>

            <div className="contentImage">
                <img src={values} alt="Hylo values" width="100%" />
            </div>

            <h3>Stewardship</h3>
            <p>We approach our world, our communities, our ecosystems, and our tools (such as Hylo) as shared resources 
                that all people are invited to manage with care and responsibility. We <strong>steward</strong> the places, 
                resources, lands and waters we belong to, for the generations yet to come.</p>

            <p><i>Related: Responsibility, respect, integrity, accountability, maturity, governing the commons, distributing power, "power with"</i></p>

            <h4>Our Commitments</h4>
            <ul>
                <li>Our stewardship of Hylo will always be guided by our purpose of activating the full potential of 
                    purpose-driven groups to create a thriving future for all.</li>
                <li>We will communicate clearly, honestly, and transparently with our users and stakeholders to the best of our ability.</li>
                <li>We are working to create a participatory governance structure for Hylo to include the voices of all stakeholders 
                    and become a true technology commons and public good.</li>
            </ul>

            <h3>Co-Creation</h3>
            <p>The products of our work are higher quality and more beautiful when we create them in partnership with each other. 
                <strong> Co-creation</strong> is the means through which we find ways to give our unique gifts, be part of something greater than ourselves, and meet our need to be part of a group: seen & accepted. We all have a role to play in creating a world that works for all.</p>

            <p><i>Related: Collaboration, cooperation, connection, common ground, relationship-centered design, participatory, interdependence, pluralism</i></p>

            <h4>Our Commitments</h4>
            <ul>
                <li>We facilitate co-creation of Hylo through our participatory design processes, engaging our stakeholders
                     in the development of our tools and platforms.</li>
                <li>We will create opportunities for input and open-source contributions through the Building Hylo group.</li>
                <li>Before building new systems or tools, we look for and integrate or adopt solutions that are already working.</li>
                <li>Our code is open source, and we work to use open standards and protocols whenever possible to enable
                     interoperability with other tools and platforms.</li>
            </ul>

            <h3>Wellbeing</h3>
            <p>We are nurturing a world where individuals, communities, ecosystems, and economies are healthy, joyful, and flourishing. 
                To support the <strong>wellbeing</strong> of our members, Hylo is a place where we grow healthy groups for a healthy world.</p>

            <p><i>Related: Care, thriving, mutual support, safety, belonging, people care, planet care, future care</i></p>

            <h4>Our Commitments</h4>
            <ul>
                <li>We commit to creating technology that nurtures the wellbeing of Hylo members and their communities, 
                    caring for them as whole beings, not just “users.”</li>
                <li>We take responsibility for the impact our technology has on the health of our global ecosystems.</li>
            </ul>

            <h3>Liberation</h3>
            <p>We are consciously building Hylo to support the work to repair harms, end inequity and injustice, and dismantle systems of oppression to create a world that works for all. 
                <strong> "No one of us can be free until everybody is free." - Maya Angelou</strong></p>

            <p><i>Related: Justice, freedom, equity, diversity, inclusion, anti-racism, reconciliation, healing, solidarity</i></p>

            <h4>Our Commitments</h4>
            <ul>
                <li>We commit ourselves to building safe and inclusive digital spaces.</li>
                <li>We commit to equitable distribution of compensation and recognition among Hylo's core stewardship team.</li>
                <li>We are informed by global wisdom traditions including traditional, Indigenous, and place-based knowledge, 
                    and incorporate these learnings into our design, development practices, and product direction.</li>
                <li>We commit to following the <a target="_blank" rel="noopener noreferrer" href="https://designjustice.org/read-the-principles">Design Justice principles</a>.</li>
            </ul>

            <h3>Adaptation</h3>
            <p>We commit to conscious evolution and growth in response to learning more about the needs of our communities on Hylo, what works, and what doesn't. 
                With every interaction, we listen, learn, and <strong>adapt</strong> to better serve our communities.</p>

            <p><i>Related: Learning, listening, iteration, emergence, feedback, evolution</i></p>

            <h4>Our Commitments</h4>
            <ul>
                <li>We incorporate feedback loops into our design processes and are always open to adapt and evolve 
                    our technology and practices according to new voices and ideas.</li>
                <li>We hold Hylo as an emergent, organic, living system that is dynamic and responsive to the needs of our ecosystem.</li>
                <li>We move at the speed of trust, knowing there is always enough time for care, relationship-building, and doing things right.</li>
            </ul>

            <h3>Agency</h3>
            <p>We honor the sovereignty of individuals and groups over their data, their privacy, and how they choose to engage with technology. 
                We are building appropriate technology that gives people <strong>agency</strong> to achieve their goals without getting in the way through extracting data or harvesting attention.</p>

            <p><i>Related: Decentralized, distributed, consent, interoperability, openness, privacy, accessibility</i></p>

            <h4>Our Commitments</h4>
            <ul>
                <li>No hijacking members' experience with black box algorithms. You control your experience on Hylo 
                    by customizing Notifications, Stream ranking, and Post aggregation to suit your needs.</li>
                <li>We never share personal data without informed consent.</li>
                <li>We endeavor to make Hylo usable across ability, culture, and context, by working on 
                    Internationalization, accessibility, and low bandwidth technology.</li>
            </ul>

            <h2 id="code-of-conduct">Cultural Norms &amp; Code of Conduct</h2>

            <p>The culture of Hylo is caring and collaborative. As we welcome new members into the Hylo community, 
            we invite you to embrace this culture and do your part to maintain the vibe. Hylo's Cultural Norms are also our 
            Code of Conduct, focusing on the types of behaviors we want to encourage, through the lens of Hylo's six core values. 
            We also outline behavior that is unacceptable on Hylo, and an accountability and enforcement process for responding to such behavior. 
            We ask all Hylo participants to agree to follow this Code of Conduct in order to use the platform.</p>

            <h4>Practicing <strong>Stewardship</strong> on Hylo</h4>
            <ul>
                <li>If you notice something that could be improved in your group, post a Request or Offer to express your needs and explore solutions.</li>
                <li>If you notice a bug, report it via the Feedback & Support menu so Hylo stewards can resolve it.</li>
                <li>Take on responsibilities in your group and follow through on your commitments.</li>
                <li>Join the <a target="_blank" rel="noopener noreferrer" href="https://www.hylo.com/groups/building-hylo/join/RcDe6vcG7u">Building Hylo</a> group and suggest tools or features that would help your group achieve its purpose.</li>
                <li>Make a <a target="_blank" rel="noopener noreferrer" href="https://opencollective.com/hylo">recurring donation</a> to support Hylo's operations in reciprocity for the value you receive from the platform.</li>
                <li>Message someone who is posting inappropriate content to directly address your concerns with them.</li>
            </ul>

            <h4>Embodying <strong>Co-Creation</strong> on Hylo</h4>
            <ul>
                <li>Start a Project in service to your group's goals, and ask for help from others in your group.</li>
                <li>Comment on others' posts with your reflections to build on their ideas.</li>
                <li>Co-host an event with a few collaborators to bring your group together.</li>
                <li>Bring your group's activities into the real world with an in-person meetup.</li>
                <li>Get involved in Hylo's development by contributing ideas, designs, research or even code!</li>
                <li>Connect your Hylo group with another aligned group on the platform to enable cross-group collaboration.</li>
            </ul>

            <h4>Nurturing <strong>Wellbeing</strong> on Hylo</h4>
            <ul>
                <li>Post Requests to ask for the help you need, and Offers to share assistance you are able to give.</li>
                <li>When communicating on Hylo, think about how you would talk to someone if they were in person with you, and ensure your words are kind and constructive.</li>
                <li>Take regular breaks from technology and go move your body or go outside.</li>
                <li>Reach out to people in your group that look like they might be struggling to check-in and see what support they may need.</li>
            </ul>

            <h4><strong>Liberatory</strong> Practices</h4>
            <ul>
                <li>Invite folks from diverse backgrounds into your group, and create a culture where all feel welcome and safe.</li>
                <li>When encountering strong feelings: pause, breathe, and open to curiosity and compassion.</li>
                <li>Educate oneself on issues of equity and justice, and bring that awareness into your work for positive change.</li>
                <li>Work to create inclusive processes for group discussion and decision making that invite the voices of all the members.</li>
            </ul>

            <h4>Opening to <strong>Adaptation</strong> on Hylo</h4>
            <ul>
                <li>Gather feedback from members of the group and adapt a project according to their input.</li>
                <li>Be flexible with a proposed solution and willing to adjust based on unforeseen circumstances or new information.</li>
                <li>Accept responsibility and apologize to those affected by your mistakes, and learn from the experience.</li>
                <li>Evolve a group's purpose or agreements over time as the community evolves. 
                    Know when a group or project has reached completion, or when a new group is ready to be seeded.</li>
            </ul>

            <h4>Using Your <strong>Agency</strong> on Hylo</h4>
            <ul>
                <li>Take care when deciding what to share in your group; don't overshare or 
                    post private information, or re-share personal stories someone told you without their consent.</li>
                <li>Step forward to suggest or make changes in your group when something isn't working, 
                    instead of waiting for others to do it.</li>
                <li>Adjust Hylo settings to create an experience that works for you in terms of Notifications, Stream ranking, and Post aggregation.</li>
            </ul>

            <h3>Unacceptable Behaviors</h3>
            <p>We've compiled this list by drawing from the exemplary work of the <a target="_blank" rel="noopener noreferrer" href="https://www.contributor-covenant.org/version/2/1/code_of_conduct/">Contributor Covenant</a> and 
                the <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1T_yvFkH24hCkKMoWvGt2iTP4yNDR0vWRkC81tesFEyw/edit#heading=h.iajzjy3x6llo">Inclusive Cultural Covenant</a>.
                These behaviors are not allowed on Hylo. If you see this type of content, please Flag it immediately.</p>

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
            If content that includes these behaviors appears in the Public stream on Hylo, it will be subject to deletion and 
            possibly other Accountability actions at the determination of the Hylo platform stewards. 
            In private group spaces, it is up to group stewards to make determinations about 
            Accountability and Enforcement for violations of the Code of Conduct.</p>

            <p>Community Stewards are responsible for clarifying and enforcing the standards of acceptable behavior in their groups, and 
                are authorized to take appropriate and fair corrective action in response to any behavior that they deem inappropriate, 
                threatening, offensive, or harmful. They have the right and responsibility to remove posts or other 
                contributions that are not aligned with this Code of Conduct, and will communicate reasons for moderation 
                decisions when appropriate.</p>

            <p>Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the community 
                stewards responsible for enforcement by Flagging the content. All complaints should be reviewed and 
                investigated promptly and fairly. Community stewards are obligated to respect the privacy and security 
                of the reporter of any incident.</p>

            <p>Community stewards and members are welcome to reach out to the Hylo stewardship team 
                for support with accountability and enforcement by emailing us at <a href="mailto:hello@hylo.com">hello@hylo.com</a>.</p>

            <h3>Enforcement Guidelines</h3>
            <p>In accordance with the prosocial principle of graduated responding to unhelpful behavior, 
                we endorse the Enforcement process from the <a target="_blank" rel="noopener noreferrer" href="https://www.contributor-covenant.org/version/2/1/code_of_conduct/">Contributor Covenant</a> that 
                suggests escalating consequences in response to increasingly harmful behavior. 
                We suggest that Hylo community stewards follow these Community Impact Guidelines in determining the 
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
            <p>You are warmly invited to be a part of this community! Our invitation to you is to come to the 
                platform and its communities as a contributor and co-creator. We know you have a unique role to play 
                in making this place more enjoyable and more useful for everyone. We ask all Hylo participants
                to commit to upholding our Cultural Norms &amp; Code of Conduct by consenting to the Hylo Platform Agreements.
                We are so happy you are with us on this journey. Welcome to Hylo!</p>

            <ul>
                <li>I pledge to behave on Hylo in ways that contribute to an open, welcoming, diverse, inclusive, 
                    and healthy community, and to support other members in feeling respected, safe, and appreciated.
                    [wellbeing] [liberation]</li>
                <li>I will respect differing opinions, viewpoints, and experiences, and work to find common ground 
                    and shared values with other Hylo members. 
                    [co-creation] [adaptation] [liberation]</li>
                <li>I commit to learning from every interaction. I will listen to feedback, adapt my contributions 
                    based on community needs, and embrace responsibility for mistakes as opportunities for growth. 
                    [adaptation]</li>
                <li>I pledge to share my voice, ideas, and skills in service to my group(s) on Hylo, 
                    recognizing that our collective efforts lead to higher quality and more meaningful outcomes. 
                    [co-creation]</li>
                <li>If I see an opportunity to improve something on the Hylo platform or within my group, 
                    I will take action to make it better.
                    [stewardship] [agency]</li>
                <li>I commit to upholding the Code of Conduct &amp; Cultural Norms, and I agree to participate in the 
                    Accountability & Enforcement when necessary. 
                    [stewardship] [agency]</li>
            </ul>


        </div>
        <Footer />
    </Layout>
  )
}

export default AgreementsPage

export const Head = () => <title>Hylo Agreements</title>