import React, { useEffect } from "react"
import mixpanel from "mixpanel-browser"
import Footer from "../components/footer"
import Layout from "../components/layout"
import { SEO } from "../components/seo"

import "../styles/styles.scss"

export const Head = ({ location }) => <SEO title="Privacy Policy | Hylo" pathname={location.pathname} />

const PrivacyPage = () => {
  useEffect(() => {
    mixpanel.init("0c3b277514b71b3520723f87fea9c6ad", {
      debug: true,
      track_pageview: true,
      persistence: "localStorage",
    });
  }, []);
  return (
    <Layout pageTitle="Hylo Privacy Policy">
        <div className="hero contentHero">
            <div className="headingStyles">
                <h1>Privacy Policy</h1>
            </div>
            <div className="backgroundWrapper">
                <div className={'backgroundImage terms'} style={{backgroundImage: `../images/terms-page-header.png`}}></div>
                <div className="backgroundFade"></div>
            </div>
        </div>
        <div className="contentContainer">
            <h2>Hylo Privacy Policy, Version 2.0</h2>
            <h3>Effective Date: January 1, 2024</h3>

            <p>At Terran Collective LLC, we the maintainers of Hylo (“Hylo”) respect your right to privacy and we understand that visitors to www.hylo.com need to control the use of their personal information. Hylo is a platform where certain users (“Posters”) can share “Discussions,” “Offers,” and “Requests” in the form of content, including, but not limited to, videos, photographs, images, artwork, graphics, audio clips, comments, data, text, hyperlinks, software, scripts, projects, other material and information, and associated trademarks and copyrightable works (collectively, “Posts”) with other users (“Readers”). Posters can choose to make their Content available to specific Readers, which they choose, or any user of the site. Posters may receive comments and feedback on the Posts from Posters and react to Posts that they like by clicking an emoji button. Visitors to and users of the Service (collectively, “Users”) may have the ability to contribute, add, create, upload, submit, distribute, facilitate the distribution of, collect, post, or otherwise make accessible ("Submit") Content. “User Submissions” means any Content Submitted by Users.</p>

            <p>Users can get access to the Service by establishing an account through Google, directly from our website at www.hylo.com, or through the iOS or Android mobile apps.</p>

            <p>The privacy policy below describes the measures taken by us to protect your privacy in connection with your use of our Service.</p>

            <h3>What personally identifiable information do we collect, and when do we collect it?</h3>

            <ul>
                <li><strong>Registration</strong>. You may create an account directly on the Site, or through the iOS or Android mobile apps. When you register, we will ask for your email address and your user name. Once you are a registered user you can update your profile and you may elect to provide additional information ( e.g. a location and certain user preferences).</li>

                <li><strong>IP Address</strong>. An Internet Protocol (IP) address is a unique string of numbers that is assigned to your computer by your Internet Service Provider. Web servers automatically identify your computer by its IP address. We will use your IP address to help diagnose problems with our server and to administer our Service.
                Cookies. A “cookie” is a small data file that can be placed on your hard drive when you visit certain websites. We use cookies to collect, store and sometimes track information for statistical purposes to improve the services we provide. If you are a registered user, we will use a cookie to save your settings and to provide customizable and personalized services. These cookies do not enable third parties to access any of your personally identifiable information. Additionally, be aware that if you visit other websites you may be required to accept cookies. We do not control use of these cookies and expressly disclaim responsibility for information collected through them.</li>
            </ul>

            <h3>Do we use your personally identifiable information, and in what circumstances?</h3>

            <ul>
                <li><strong>Customized experience</strong>. We gather your personally identifiable information to provide you with a customized experience on our Service. Your personally identifiable information helps us tailor the content and services to your current and future needs.</li>

                <li><strong>Email</strong>. From time to time, we may send you email messages informing you of changes to our Service, such as new features and services and updated information.</li>
            </ul>

            <h3>With whom do we share your personally identifiable information, and in what circumstances?</h3>

            <p>We will not share your personally identifiable information with third parties (aside from entities that perform services for us, such as processing credit card payments, that either are bound to comply with our privacy policy or have privacy policies that protect your information) unless you have “opted-in” to such sharing.</p>

            <p>However, we may disclose information you provide if required to do so by law or if we have a good faith belief that disclosure is necessary to (1) comply with the law or with legal process served on us; (2) protect and defend our rights or property; or (3) act in an emergency to protect someone's safety.</p>

            <p>We may gather demographic information from you (for example, your age, education level or household income) from time to time through opt-in activities like you choosing to participate in a survey or user research. We will not share such information with any other person or entity in a manner that identifies you as an individual, unless we let you know that at the time of collection or we have your permission. When we share demographic information with third parties, we will give them aggregate information only.</p>

            <p>As we develop our business, we may buy or sell assets, and, depending upon the transaction, your personally identifiable information may be one of the transferred assets. In the event that we are acquired by another company, your personal information may be part of the assets transferred to the acquiring party.</p>

            <h3>How can I update my Profile?</h3>

            <p>You can help us maintain the accuracy of your profile by keeping profile information up-to-date. If at any time you wish to update your information or stop receiving communication from us, you may visit hylo.com and update your profile.</p>

            <h3>How can I delete my Profile and all data associated with it?</h3>

                <p>To completely remove all your data from Hylo you can delete your account here: https://www.hylo.com/settings/account. Or you can email us your request at hello@hylo.com from the email address associated with the account you wish to remove.</p>

            <h3>What about kids' personally identifiable information?</h3>

                <p>Our Service is not directed to children under the age of 13. We respect the privacy of parents and children and are committed to complying with the Children's Online Privacy Protection Act (COPPA). On those areas of our Site that ask for age, we do not collect personal information from individuals who identify themselves as under the age of 13 except in those limited circumstances where we believe that such collection is permitted under COPPA.</p>

                <p>We may ask prospective users to provide their age during the registration process and on other areas of our Service. If a user indicates that he or she is under the age of 13 then all personal data collected during the registration process is automatically deleted except that we may retain and use limited information, such as the child's email address, for a limited period of time, in those cases where we believe that the collection and use of such information is permitted under COPPA.</p>

                <p>If a parent believes that his or her child has provided us with personal information, he or she can contact us via email or postal mail as listed below. We will promptly delete the information upon learning that it relates to a child under the age of 13.</p>

                <p>We believe that parents should supervise their children's online activities and consider using parental control tools available from online services and software manufacturers that help provide a kid-friendly online environment. These tools can also prevent children from otherwise disclosing online their name, address and other personal information without parental permission.</p>

            <h3>What else should you know about your privacy?</h3>

                <p><strong>Security</strong>. We have security measures in place to protect the loss, misuse and alteration of the information under our control. These security measures include a firewall to prevent unauthorized access to our systems. Although we will exercise reasonable care in providing secure transmission of information between your computer and our servers, we cannot ensure or warrant the security of any information transmitted to us over the Internet and we accept no liability for any unintentional disclosure. We protect the transmission of all data through industry standard, SSL (secure socket layer) encryption.</p>

                <p><strong>Links to Other Sites</strong>. Our Service contains hyperlinks and pointers to Internet sites maintained by third parties. These links are provided for your reference only. We do not control, operate or endorse in any respect information, products or services on such third-party sites and are not responsible for their content. Many third-party sites have their own privacy policies that differ from ours. This privacy policy only covers our Service and does not cover any other site. While we make every effort to keep your information secure, we do not control the policies of other sites.</p>

            <h3>Changes to this privacy policy?</h3>

            <p>We may make changes in our privacy policy from time to time. When we do so, we will post the revised privacy policy on our Site with a link at the bottom of our home page. Our home page will also contain a statement notifying readers that the policy has changed and the effective date of that change.</p>

            <h3>Contacting Hylo</h3>

            <p>We would like to receive your comments and questions about this Privacy Policy and any other matter you have regarding our Service. Please address comments or questions to us via e-mail or postal mail.</p>

            <p>You can email us:<br/>

                hello@hylo.com
            </p>

            <p>You may also contact us by mail at:<br/>

                Hylo<br/>
                Attn: Tibet Sprague<br/>
                390 Euclid Ave<br/>
                Oakland, CA 94610
            </p>

            <h3>Acceptance of Privacy Policy</h3>

            <p>Your use of our Service, including any dispute concerning privacy, is subject to this Privacy Policy and the User Agreement. By using our site or mobile apps, you are accepting the practices set out in this Privacy Policy and in our Terms of Use. We reserve the right to modify this Privacy Policy at any time by posting the changes on this page. Please check the revision date at the bottom of this page to determine if the policy has been modified since you last reviewed it. Your continued use of any portion of our Service following posting of the updated Privacy Policy will constitute your acceptance of the changes.</p>

            <h3>Effective Date</h3>
            <p>This privacy policy was last revised on January 1, 2024. This is version 2.0.</p>

        </div>
        <Footer />
    </Layout>
  )
}

export default PrivacyPage
