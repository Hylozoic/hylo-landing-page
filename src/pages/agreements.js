import * as React from "react"
import { Link } from "gatsby"

import Footer from "../components/footer"
import Layout from "../components/layout"
import { SEO } from "../components/seo"

import values from "../images/hylo-values.png"

import "../styles/styles.scss"

export const Head = ({ location }) => <SEO title="Agreements | Hylo" pathname={location.pathname} />

const AgreementsPage = () => {
  return (
    <Layout pageTitle="Hylo Agreements">
        <div className="hero contentHero">
            <div className="headingStyles">
                <h1>Clear agreements are essential to prosocial coordination</h1>
            </div>
            <div className="backgroundWrapper">
                <div className={'backgroundImage agreements'} style={{backgroundImage: `../images/agreements-page-header.png`}}></div>
                <div className="backgroundFade"></div>
            </div>
        </div>
        <div className="contentContainer">
            <h2 id="values">Our Values &amp; Commitments</h2>

            <p>Alongside our <Link to="/about/#vision">Purpose &amp; Vision</Link>, Hylo is driven by a strong set of values.
                These values were derived by the current Hylo stewardship team through a prosocial process to
                identify the most strongly held and shared values that animate our work. We are committed to upholding them
                 in all that we do, and we ask that everyone using the platform honor them as well.</p>

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
                <li>We create opportunities for input and open-source contributions through the Building Hylo group.</li>
                <li>Before building new systems or tools, we look for and integrate or adopt solutions that are already working.</li>
                <li>Our <a href="https://github.com/hylozoic/" target="_blank" rel="noopener noreferrer">code is open source</a>, and we work to use open standards and protocols whenever possible to enable
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
                <li>We commit to equitable distribution of compensation and recognition among Hylo's core stewardship team and contributors.</li>
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

            <h4>For more information see our <Link to="/privacy">Privacy Policy</Link>.</h4>


            <h2 id="hylo-platform-agreements">Hylo Platform Agreements</h2>
            <p>You are warmly invited to be a part of this community! Our invitation to you is to come to the
                platform and its communities as a contributor and co-creator. We know you have a unique role to play
                in making this place more enjoyable and more useful for everyone. We ask all Hylo participants
                to commit to upholding our <Link to="#code-of-conduct">Cultural Norms &amp; Code of Conduct</Link> and <Link to="/terms">Terms of Use</Link> by consenting to the Hylo Platform Agreements. We are so happy you are with us on this journey. Welcome to Hylo!</p>
            <ul>
                <li>I pledge to behave on Hylo in ways that contribute to an open, welcoming, and healthy community, and to support other members in feeling respected and appreciated.
                    <span className="agreementTag wellbeing">wellbeing</span> <span className="agreementTag liberation">liberation</span></li>
                <li>I will respect differing viewpoints and experiences, and work to find common ground
                    and shared values with other Hylo members.
                    <span className="agreementTag cocreation">co-creation</span> <span className="agreementTag adaptation">adaptation</span> <span className="agreementTag liberation">liberation</span></li>
                <li>I commit to learning from every interaction. I will listen to feedback, adapt, and embrace responsibility for mistakes as opportunities for growth.
                    <span className="agreementTag adaptation">adaptation</span> <span className="agreementTag liberation">liberation</span></li>
                <li>I pledge to share my voice, ideas, and skills in service to my group(s) on Hylo,
                    recognizing that working together leads to better outcomes.
                    <span className="agreementTag cocreation">co-creation</span> <span className="agreementTag stewardship">stewardship</span></li>
                <li>If I see an opportunity to improve something on the Hylo platform or within my group,
                    I will take action to make it better.
                    <span className="agreementTag stewardship">stewardship</span> <span className="agreementTag agency">agency</span></li>
                <li>I commit to upholding the <Link to="#code-of-conduct">Code of Conduct &amp; Cultural Norms</Link>, and <Link to="/terms">Terms of Use</Link>,
                    and I agree to participate in accountability processes when necessary.
                    <span className="agreementTag stewardship">stewardship</span> <span className="agreementTag wellbeing">wellbeing</span></li>
            </ul>


            <h2 id="code-of-conduct">Cultural Norms &amp; Code of Conduct</h2>

            <p>The culture of Hylo is caring and collaborative. As we welcome new members into the Hylo community,
            we invite you to embrace this culture and do your part to maintain the vibe. Hylo's Cultural Norms are also our
            Code of Conduct, focusing on the types of behaviors we want to encourage, through the lens of Hylo's six core values.
            We also outline behavior that is unacceptable on Hylo, and an accountability and enforcement process for responding to such behavior.
            We ask all Hylo participants to agree to follow this Code of Conduct in order to use the platform.</p>

            <h3>How to embody Hylo culture</h3>

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
                <li>Step forward to suggest or make changes in your group when something isn't working,
                    instead of waiting for others to do it.</li>
                <li>Adjust Hylo settings to create an experience that works for you in terms of Notifications, Stream ranking, and Post aggregation.</li>
                <li>Take care when deciding what to share in your group; don't overshare or
                    post private information, or re-share personal stories someone told you without their consent.</li>
            </ul>

            <h3>Hylo's Town Square: The Public Context</h3>
            <p>One way Hylo is unique is that in addition to private group spaces, there is a <a href="https://hylo.com/public" target="_blank" rel="noopener noreferrer">Public stream</a>.
            The Public stream is a fun and inspiring look at collaborations happening all over the world. To honor this special collaborative space,
            <strong> we ask that you only share content in Public that is appropriate for a general audience.</strong></p>

            <p><strong>The Public Context is for cross-pollination, not for advertising or promotion.</strong> If you share a post to the Public stream,
                it should include a clear invitation for folks to participate in a meaningful way. For example:</p>

            <ul>
                <li><span className="agreementTag liberation">OK</span> "I'm hosting a workshop on permaculture. What topics are you most interested in learning about?"</li>
                <li><span className="agreementTag liberation">OK</span> "I'm offering a legal clinic for cooperatives. Can folks please share this with co-ops in your community or mention them in the comments?"</li>
                <li><span className="agreementTag liberation">OK</span> "Here's an article I found. I thought it was interesting that “......”. What do you think about this topic?"</li>
            </ul>

            <ul>
                <li><span className="agreementTag cocreation">NOT OK</span> "Rereve Health Family Healthcare is a patient-focused medical facility. Call now!"</li>
                <li><span className="agreementTag cocreation">NOT OK</span> "Taxi service to Prague! Taxi service to Berlin!"</li>
                <li><span className="agreementTag cocreation">NOT OK</span> [video title] [video link] [hashtags] [no other commentary]</li>
            </ul>

            <p>The Public Context also includes the <a href="https://www.hylo.com/public/groups" target="_blank" rel="noopener noreferrer">Group Explorer</a>, where you can discover groups to join.
            <strong>To earn the privilege of appearing in the Group Explorer and the ability to share public posts, <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLScuxRGl65OMCVkjjsFllWwK4TQjddkufMu9rukIocgmhyHL7w/viewform?usp=sf_link">groups may apply via this form</a></strong> and
            affirm their commitment to upholding the Cultural Norms & Code of Conduct. Public content and public groups are monitored by the Hylo platform stewards.</p>

            <h3>Unacceptable Behavior in Public Posts or Groups</h3>
            <ol>
                <li><strong>Sexual or Violent Content:</strong> Do not use sexualized or violent language or imagery, or express sexual attention or advances of any kind, within any publicly visible areas such as posts, comments, user profile images, group icons, or header images.</li>
                <li><strong>Trolling:</strong> Please do not make deliberately antagonistic, insulting, or derogatory comments, or personal or political attacks (we also recommend avoiding the use of snark, sarcasm, teasing and other things that don't translate well online). Please keep discussions respectful.</li>
                <li><strong>Inappropriate Content:</strong> Please refrain from conduct which could reasonably be considered inappropriate in a professional setting.</li>
                <li><strong>Spam, Advertising, or Promotion:</strong> No promoting products, services, or links without making an earnest attempt to collaborate with others around the content.</li>
            </ol>

            <h3>Unacceptable Behavior Anywhere on Hylo</h3>
            <p>These behaviors are not allowed on Hylo, period. If you see this type of content, please flag it immediately.</p>

            <div><strong>Violence, Abuse, &amp; Self-Harm</strong>
                <ol>
                    <li>We do not allow public or private harassment such as threats, intimidation, pressure, or unwanted attention.</li>
                    <li>It is never ok to threaten or incite violence against any persons, groups, or 'types' of people, or glorify, or express desire for violence or harm, or to promote violent and hateful entities.</li>
                    <li>It is unacceptable to characterize anyone's personality or behaviors, or make jokes about them, on the basis of inherent traits such as national origin, ethnicity, race, gender, gender identity and expression, sexual orientation, disability or medical condition, or lifestyle factors such as parenthood or employment.</li>
                    <li>Characterizing anyone's personality or behaviors, or making jokes about them,
                        on the basis of inherent traits such as national origin, ethnicity, race, gender,
                        gender identity and expression, sexual orientation, disability or medical condition, or lifestyle factors
                        such as parenthood or employment.</li>
                    <li>Suicide: We want Hylo to remain a safe space that encourages mental health and wellbeing, so you may not promote or encourage suicide or self-harm.</li>
                </ol>
            </div>

            <div><strong>Privacy &amp; Consent</strong>
                <ol>
                    <li>You may not publish or post others' private information, such as a physical or email address, without their explicit permission, nor threaten to expose private information or incentivize others to do so.</li>
                    <li>Non-Consensual Nudity: You may not post or share intimate photos or videos of someone that were produced or distributed without their consent.</li>
                </ol>
            </div>

            <div><strong>Illegal Activities</strong>
                <ol>
                    <li>You may not use our service for any unlawful purpose or promotion of illegal activities. This includes selling, buying, or facilitating transactions in illegal goods or services, as well as certain types of regulated goods or services.</li>
                    <li>We have zero tolerance for Child Sexual Exploitation of any kind.</li>
                    <li>Copyright and Trademark: You may not violate others' intellectual property rights, including copyright and trademark.</li>
                </ol>
            </div>

            <div><strong>Lying and Manipulation</strong>
                <ol>
                    <li>Platform Manipulation and Spam: You may not use Hylo's services in a manner intended to artificially amplify or suppress information or engage in behavior that manipulates or disrupts people's experiences, or deceptively share synthetic or manipulated media that are likely to cause harm.</li>
                    <li>Civic Integrity: You may not use Hylo's services for the purpose of manipulating or interfering in elections or other civic processes. This includes posting or sharing content that may suppress participation or mislead people about when, where, or how to participate in a civic process.</li>
                    <li>Misleading and Deceptive Identities: You may not impersonate individuals, groups, or organizations to mislead, confuse, or deceive others, nor use a fake identity in a manner that disrupts the experience of others on Hylo.</li>
                    <li>Account Compromise: You may not use or attempt to use credentials, passwords, tokens, keys, cookies or other data to log into or otherwise access, add, delete or modify the private information or account features of any user account other than your own (or those you have been directly authorized to do so via OAuth authorization or similar mechanism).</li>
                </ol>
            </div>

            <p>We've compiled this list by drawing from the exemplary work of the <a target="_blank" rel="noopener noreferrer" href="https://www.contributor-covenant.org/version/2/1/code_of_conduct/">Contributor Covenant</a> and
                the <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1T_yvFkH24hCkKMoWvGt2iTP4yNDR0vWRkC81tesFEyw/edit#heading=h.iajzjy3x6llo">Inclusive Cultural Covenant</a>, as well as Twitter's and Instagram's guidelines.</p>

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

        </div>
        <Footer />
    </Layout>
  )
}

export default AgreementsPage
