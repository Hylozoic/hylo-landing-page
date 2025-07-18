import React, { useEffect } from "react"
import mixpanel from "mixpanel-browser"
import Footer from "../components/footer"
import Layout from "../components/layout"
import { SEO } from "../components/seo"

import "../styles/styles.scss"

export const Head = ({ location }) => <SEO title="Terms of Use | Hylo" pathname={location.pathname} />

const TermsPage = () => {
  useEffect(() => {
    mixpanel.init("0c3b277514b71b3520723f87fea9c6ad", {
      debug: true,
      track_pageview: true,
      persistence: "localStorage",
    });
  }, []);
  return (
    <Layout pageTitle="Hylo Terms of Use">
        <div className="hero contentHero">
            <div className="headingStyles">
                <h1>Terms of Use</h1>
            </div>
            <div className="backgroundWrapper">
                <div className={'backgroundImage terms'} style={{backgroundImage: `../images/terms-page-header.png`}}></div>
                <div className="backgroundFade"></div>
            </div>
        </div>
        <div className="contentContainer">
            <h2>Hylo Terms of Use, Version 2.0</h2>
            <h3>Effective Date: January 1, 2024</h3>

            <p>Welcome to Hylo.com. Use of and access to this website, associated iOS and Android mobile apps, and the services (together with the website, the “Service”) offered by Terran Collective LLC, a California Corporation , (“Hylo” or the “Company”) is subject to your compliance with the following terms. Hylo reserves the right to limit or terminate your access to our Service for noncompliance.</p>

            <h3>1. Acceptance of Terms</h3>
            <p>Please read these terms of service carefully before using this service. By accessing and using this Service in any manner, including but not limited to, visiting or contributing materials, content or services to the Service, you agree to be bound by these terms of use described in this document ("Terms of Use").</p>

            <p>If you do not agree to all of the terms and conditions herein, please do not use this service in any manner. These Terms of Use are entered into by and between Hylo and you. If you are using the Service on behalf of your employer or business, you represent that you are authorized to accept these Terms of Use on your employer or business' behalf and, in such event, "you" and "your" refer herein to such employer or such business.</p>

            <h3>2. Service</h3>
            <p>Hylo is a platform where certain users ("Posters") can share "Posts", such as  "Discussions", "Offers", and "Requests" in the form of content, including, but not limited to, videos, photographs, images, artwork, graphics, audio clips, comments, data, text, hyperlinks, software, scripts, projects, other material and information, and associated trademarks and copyrightable works (collectively, "Posts") with other users ("Readers"). Posters can choose to make their Content available to specific Groups, which they choose, or any user of the Service through the "Public" context. Posters may receive comments and feedback on the Posts from Posters and react to Posts that they like by clicking an emoji button. Visitors to and users of the Service (collectively, "Users") may have the ability to contribute, add, create, upload, submit, distribute, facilitate the distribution of, collect, post, or otherwise make accessible ("Submit") Content. "User Submissions" means any Content Submitted by Users.</p>

            <p>Users can get access to the Service by establishing an account on our website at http://www.hylo.com, or through the iOS and Android apps.</p>

            <p>All Service users must be at least 13 years old. If you are under 13 years of age, please do not use or access the Service at any time or in any manner. If you are under 18 years of age, you must have the consent of a legal guardian to access the Service.</p>

            <h3>3. Modification of Terms of Use</h3>
            <p>Hylo reserves the right, at Hylo's sole discretion, to change, modify, update, add, or remove portions of these Terms of Use at any time with or without notice. Please check these Terms of Use periodically for changes. Your continued use of this Service following the posting of changes to these Terms of Use will signify your acceptance of those changes.</p>

            <h3>4. Restrictions</h3>
            <p>You agree to use the Service for its intended purpose, and in compliance with these Terms of Service and all applicable law. As a condition of your use of the Service, you will not, [and shall not permit any third party using your account to]:</p>

            <p>a) use the Service for transactions involving illegal activities, or what the Company reasonably believes to be potentially illegal or fraudulent activity;</p>

            <p>b) submit false, deceptive, misleading, fraudulent, inaccurate or unlawful content, or content that is otherwise obscene, offensive, abusive, threatening, harassing, defamatory, tortious or invasive of another's privacy;</p>

            <p>c) infringe any intellectual property right, or other right of any other person or entity, or violate any law or contract;</p>

            <p>d) attempt to or submit a virus to the Service</p>

            <p>e) use any of the Service content in violation of the copyrights to that content. Service content that is posted publicly is licensed under the Creative Commons "Attribution" license. Service content that is posted privately may be subject to other restrictions and in any event may not be re-published publicly without the owner's prior consent;</p>

            <p>f) interfere with or attempt to interfere with the Service;</p>

            <p>g) attempt to or obtain unauthorized access to other users' accounts;</p>

            <p>h) sell, transfer, or assign any of your rights to use the Service to a third party without the express written consent of the Company;</p>

            <p>i) use the Service in any manner that could damage, disable, overburden, or impair any Hylo server, or the network(s) connected to any Hylo server, or interfere with any other party's use and enjoyment of the Service;</p>

            <p>j) remove any copyright notices or substitute any copyright notices that imply that the materials you view, print, copy, or distribute are owned by anyone else; and</p>

            <p>k) access the Service from a jurisdiction where such access is illegal.</p>

            <h3>5. Intellectual Property</h3>
            <p>The Service provides you with the ability to post or create original content and to comment on the posted content of others (your "User Submission"). The Company claims no ownership or control over User Submissions. You retain all intellectual property rights to your User Submissions that you create or submit using the Service, to the extent you have such rights under applicable law and you post your User Submissions in a "private" group area. You agree that User Submissions that you post to the "Public" area are governed exclusively by the Creative Commons "Attribution" license, and you hereby waive and relinquish all limitations and restrictions not included in that license. You are responsible for protecting your rights in your User Submissions. All information publicly posted or privately transmitted through the Service is the sole responsibility of the person from which that content originated. Hylo will not be liable for any errors or omissions in any Content and is not responsible for enforcing your rights in that Content.</p>

            <p>Not withstanding the foregoing, you grant the Company a royalty-free, worldwide, non-exclusive, perpetual, irrevocable, fully paid-up, non-exclusive, sub licensable, transferable right and license to (and allow others acting on Hylo's behalf to): 1) host, display copy, market, analyze, distribute and display your User Submissions and your trademarks, service marks, slogans, logos, and similar proprietary rights (collectively, the " Trademarks") in connection with (a) the Service, (b) the Company's (and its successors' and assigns') businesses, (c) promoting, marketing, and redistributing part or all of the Service; (2) take whatever other action is required to perform and market the Service; (3) allow Hylo users to download, display, feature, distribute, collect, and otherwise use the User Submissions and Trademarks in connection with the Service; (4) use and publish, and permit others to use and publish, your User Submissions, Trademarks in connection with the provision operation, maintenance or marketing of the Service; and delete any or all of your User Content from Company owned, controlled or used servers and from the Service, for any reason or no reason, whether intentional or unintentional, and without any liability of any kind to you or any other party. The foregoing license grant to the Company does not affect your other ownership or license rights in your User Submissions, including the right to grant additional licenses to your User Submissions.</p>

            <p>When you publish any User Submission, you may be identified publicly by your name or User ID in association with your User Submission.</p>

            <p>You grant to each Service user a non-exclusive license to access your User Submissions through the Service, and to post comments about those User Submissions solely for personal, non-commercial use, in connection with participating in the Service.</p>

            <p>You further agree that your User Submissions will not contain third-party copyrighted material, or material that is subject to other third-party proprietary rights, unless you have permission from the rightful owner of the material or you are otherwise legally entitled to post the material and to grant Hylo all of the license rights granted herein. You will pay all royalties and other amounts owed to any person or entity based on your submitting User Submissions to the Service or the Company's publishing or hosting of the User Submissions as contemplated by these Terms of Use. You represent and warrant that the use or other exploitation of your User Submissions by Hylo or other users as contemplated by this Agreement will not infringe or violate the rights of any third party, including without limitation any privacy rights, publicity rights, copyrights, contract rights, or any other intellectual property or proprietary rights.</p>

            <p>Hylo shall have the right to delete any User Submissions.</p>

            <p>Permission to use the Service's contents does not include permission to copy the design elements, look and feel, or layout of this our website or the Service. Those elements are protected by United States, international, and foreign laws and may not be copied or imitated in whole or in part. No logo, graphic, or image from the Service may be copied or retransmitted unless expressly permitted by Hylo.</p>

            <p>Additionally, you shall not: (i) take any action that imposes or may impose (as determined by the Company in its sole discretion) an unreasonable or disproportionately large load on the Company's or its third-party providers' infrastructure; (ii) interfere or attempt to interfere with the proper working of the Service or any activities conducted on the Service; (iii) bypass any measures the Company may use to prevent or restrict access to the Service (or other accounts, computer systems, or networks connected to the Service); (iv) run Maillist, Listserv, or any form of auto-responder or "spam" on the Service; (v) use manual or automated software, devices, or other processes to "crawl" or "spider" any page of the Site; or (vi) copy any Content or User Submissions for training machine learning models.</p>

            <p>You shall not directly or indirectly: Copy, rent, lease, distribute, or otherwise transfer any of the rights that you receive hereunder. You shall abide by all applicable local, state, national, and international laws and regulations.</p>

            <h3>6. DMCA</h3>
            <p>Please notify the Company if you believe a user has violated your copyright using the Service.</p>

            <p>Terran Collective LLC<br/>

            Attn: Tibet Sprague, DMCA Agent<br/>

            390 Euclid Ave<br/>

            Oakland, CA 94610<br/>

            Email: <a href="mailto:hello@hylo.com">hello@hylo.com</a></p>

            <p>Hylo may, in accordance with the Digital Millennium Copyright Act (the "DMCA"), terminate user accounts of registered users who are deemed, in Hylo's sole discretion, to be repeat infringers of any intellectual property rights of others or who violate provisions of this Terms of Service.</p>

            <h4>Copyright Notice</h4>

            <p>Hylo will remove infringing materials in accordance with the DMCA if properly notified of copyright. If you believe that your work has been copied in a way that constitutes copyright infringement, please notify Hylo in writing submitted to the contact information provided above. Your notice must meet the current statutory requirements imposed by the DMCA. Your copyright notice must contain the following information:</p>

            <ul>
                <li>a physical or electronic signature of a person authorized to act on behalf of the owner of the work or works you claim has been infringed;</li>
                <li>identification of the copyrighted work(s) that you claim infringed;</li>
                <li>the location at which the allegedly infringing material is located on the Service, reasonably sufficient to allow Hylo to locate the material on the Service;</li>
                <li>your name, address, telephone number, and email address;</li>
                <li>a statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law; and</li>
                <li>a statement by you that the information in your notice is accurate and, under penalty of perjury, that you are authorized to act on behalf of the copyright's owner or are the copyright owner.</li>
            </ul>

            <p>Please consult with your legal counsel, or see the U.S. Copyright Act, 17 U.S.C. §512(c)(3), for current information about the DMCA.</p>

            <h4>Counter-Notice</h4>

            <p>If you believe that your work has been removed or disabled by mistake or misidentification, the DMCA permits you to send Hylo a counter-notice. Please submit any counter-notice to Hylo in writing submitted to the contact information provided above. Your counter-notice must contain the following information:</p>

            <ul>
                <li>a physical or electronic signature of the user of the Services;</li>
                <li>identification of the work removed or to which access disabled;</li>
                <li>the location at which the material appeared before it was removed or access to it was disabled;</li>
                <li>a statement by you made under penalty of perjury that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification of the material; and</li>
                <li>your name, address, telephone number, and a statement that you consent to the jurisdiction of the Federal District Court for the judicial district in which the address isolated, or if your address is outside of the United States, for any judicial district in which your Internet Service Provider may be found, and that you will accept service of process from the person, or an agent of such person, who provided the copyright notice described above.</li>
            </ul>

            <p>Under the Copyright Act, any person who knowingly materially misrepresents that material is infringing or was removed or disabled by mistake or misidentification may be subject to liability.</p>

            <p>If you fail to comply with these notice requirements, your notification or counter-notification may not be valid.</p>

            <p>Please consult with your legal counsel, or see the U.S. Copyright Act, 17 U.S.C. §512(c)(3), for current information about the DMCA.</p>

            <h3>7. Copyright and Trademarks Information</h3>

            <p>Copyright Notice: Copyright © 2012-2024 Terran Collective, LLC. All Rights Reserved.</p>

            <p>Hylo, Hylos, Hylozoans is/are trademarks or registered trademarks of Hylo. These trademarks are currently held on behalf of Hylo by Terran Collective LLC. All other trademarks, trade names, service marks, service names are the property of their respective holders.</p>

            <h3>8. Privacy Policy</h3>
            <p>Hylo respects your desire for privacy. Hylo's Privacy Policy can be found here. By using the Service, you are consenting to the terms of our Privacy Policy.</p>

            <h3>9. Links to Third Party Websites</h3>
            <p>The Service may contain links to third-party sites which are not under the control of Hylo, and Hylo is not responsible for the contents of any linked site or any link contained in a linked site, or any changes or updates to such sites. Hylo is providing these links to you only as a convenience, and the inclusion of any link does not imply that Hylo endorses or accepts any responsibility for the content on such third-party sites.</p>

            <h3>10. Fees</h3>
            <p>Joining Hylo is free. It is possible that in the future Hylo will charge fees for certain services. When you use a service that has a fee you will have an opportunity to review and accept the fees that you will be charged. Changes to fees are effective after we provide you with notice by posting the changes on the Site. You are responsible for paying all fees and taxes associated with your use of the Service.</p>

            <h3>11. Payments</h3>
            <p>Hylo does not currently process payments. In the future, Hylo may use a third party payment service, such as Stripe, to process payments. In the case of Hylo beginning to process payments via Stripe, then sending or receiving payments for transactions made with or through our Service will be subject to Stripes' Terms of Service, Site Terms, and Acceptable Use Policy (the “Stripe Terms"). You agree that any use of Stripe services through our Service will be subject to both these Terms and Conditions and the Stripe Terms.</p>

            <p>Additionally, as outlined in its Privacy Policy, Stripe will not disclose the personal information it collects from you unless required by law. This information is used solely for:</p>

            <ul>
                <li>facilitating your payments,</li>
                <li>improving your user experience,</li>
                <li>providing updates and communications regarding your payments,</li>
                <li>resolving disputes,</li>
                <li>troubleshooting problems, and</li>
                <li>protecting you and Hylo from fraud.</li>
            </ul>

            <p>You acknowledge that while Hylo provides a link to Stripe, Hylo does not control and is not responsible for payments made or received through Stripe, or the performance of Stripe.</p>

            <h3>12. Disclaimer of Warranty</h3>
            <p>Except as expressly provided otherwise, all information within the service is provided "as-is" without warranty of any kind and Hylo hereby disclaims all warranties either expressed or implied, including but not limited to, implied warranties of merchantability or fitness for a particular purpose. In addition, except as expressly provided otherwise, Hylo disclaims any warranties of non-infringement, title, or quiet enjoyment. In no event shall Hylo be liable for any special, indirect or consequential damages or any damages whatsoever resulting from loss of use, data or profits, whether in an action of contract, negligence or other tortious action, arising out of or in connection with the use of the Service or information available from the Service.</p>

            <p>Except as expressly provided otherwise, you assume all risks concerning the suitability and accuracy of the information within the Service. All content you access through the Service is at your own risk and you will be solely responsible for any resulting damage or loss to any party. The Service may contain technical inaccuracies or typographical errors. Hylo assumes no responsibility for and disclaims all liability for any such inaccuracies, errors, or omissions in the Service.</p>

            <p>The Company cannot guarantee the identity of any other users with whom you may interact while using the Service.</p>

            <p>The Company may make changes to the Service at any time and without notice.</p>

            <h3>13. Indemnity</h3>
            <p>You agree to indemnify, defend, and hold the Company  and its affiliates, officers, agents, co-branders, partners, and employees harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your use of the Service, including without limitation, any use by your employees, your connection to the Service, your violation of these Terms of Use, or your violation of any rights of another.</p>

            <h3>14. General Information</h3>
            <p>These Terms of Use and our Privacy Policy, in addition to the Platform Agreements, together constitute the entire agreement between you and Hylo and govern your use of the Service, superseding any prior agreements between you and Hylo relating to your use of this Service (including, but not limited to, any prior versions of these Terms of Use). You also may be subject to additional terms and conditions that may apply when you use third-party content or third-party software.</p>

            <p>By accessing the Service you agree that the statutes and laws of the United States and the State of California, without regard to any principles of conflicts of law, will apply to all matters relating to the use of this Service, and you further agree that any litigation shall be subject to the exclusive jurisdiction of the state and federal courts located in Oakland, California, USA.</p>

            <p>The failure of Hylo to exercise or enforce any right or provision of these Terms of Use does not constitute a waiver of such right or provision. If a court of competent jurisdiction finds any provision of these Terms of Use to be invalid, the parties nevertheless agree that the court should endeavor to give effect to the parties' intentions as reflected in the provision, and the other provisions of these Terms of Use remain in full force and effect. Regardless of any statute or law to the contrary, any claim or cause of action arising out of or related to use of the Service or these Terms of Use must be filed within one (1) year after such claim or cause of action arose or be forever barred. The section titles in these Terms of Use are for convenience only and have no legal or contractual effect.</p>


            <h3>Effective Date</h3>
            <p>This Terms of Use was last revised on January 1, 2024. This is version 2.0. </p>

        </div>
        <Footer />
    </Layout>
  )
}

export default TermsPage
