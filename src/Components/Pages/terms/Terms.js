import { AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import React from "react";
import Accordion from "@mui/material/Accordion";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import "./terms.css";
import privacy from "./privacy.svg";
import int from "./int.svg";
import users from "./user.svg";
import prohibit from "./prohibit.svg";

import register from "./register.svg";
import contri from "./contri.svg";
import license from "./license.svg";

import guide from "./guide.svg";
import sub from "./sub.svg";
import site from "./site.svg";
import copy from "./copy.svg";
import terms from "./terms.svg";
import modi from "./modi.svg";
import gover from "./gover.svg";

import dis from "./dis.svg";
import correct from "./correct.svg";
import disclaim from "./disclaim.svg";
import limit from "./limit.svg";
import inde from "./inde.svg";
import userdata from "./userdata.svg";
import elect from "./elect.svg";
import mis from "./mis.svg";
import contact from "./contact.svg";

export const Terms = () => {
  const inneraccordionStyle1 = {
    borderRadius: "20px",
    // backgroundColor: expand1 ? "#4C2A76" : "transparent",
    // color: expand1 ? "#FFB8BC" : "#4C2A76",
    backgroundColor: "transparent",
    color: "#4C2A76",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",

    width: "90%",
    "&:before": {
      display: "none",
      border: "none",
    },
    "&:after": {
      display: "none",
      border: "none",
    },
  };

  const accordionDetail = {
    backgroundColor: "transparent",
    "&:before": {
      display: "none",
      border: "none",
    },
    // color: "#FFB8BC",
    color: "black",
    borderRadius: "20px",
    margin: "0px 20px 20px 20px",
  };

  return (
    <div className="policontainer">
      <div className="pheader">
        <h2>TERMS OF SERVICE AGREEMENT</h2>
        <p>
          These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of
          an entity ("you") and TINA ROSARIO THE DESIGN HOUSE ("Company," "we," "us," or "our"), concerning your access
          to and use of the http://www.tinarosario.com website as well as any other media form, media channel, mobile
          website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site"). We
          are registered in India and have our registered office at 112A Nehru Street, Alwar Thiru Nagar,
          Valasarawakkam, Chennai, Tamilnadu 600087. You agree that by accessing the Site, you have read, understood,
          and agreed to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN
          YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
          <br />
          Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby
          expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or
          modifications to these Terms of Use from time to time. We will alert you about any changes by updating the
          "Last updated" date of these Terms of Use, and you waive any right to receive specific notice of each such
          change. Please ensure that you check the applicable Terms every time you use our Site so that you understand
          which Terms apply. You will be subject to, and will be deemed to have been made aware of and to have accepted,
          the changes in any revised Terms of Use by your continued use of the Site after the date such revised Terms of
          Use are posted.
          <br /> The information provided on the Site is not intended for distribution to or use by any person or entity
          in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which
          would subject us to any registration requirement within such jurisdiction or country. Accordingly, those
          persons who choose to access the Site from other locations do so on their own initiative and are solely
          responsible for compliance with local laws, if and to the extent local laws are applicable.
          <br /> The Site is intended for users who are at least 13 years of age. All users who are minors in the
          jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly
          supervised by, their parent or guardian to use the Site. If you are a minor, you must have your parent or
          guardian read and agree to these Terms of Use prior to you using the Site.
        </p>
      </div>

      <Accordion sx={{ display: "none" }} className="outeraccordion">
        <AccordionSummary
          expandIcon={<ControlPointIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        ></AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
      <Accordion style={inneraccordionStyle1}>
        <AccordionSummary
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          expandIcon={<ControlPointIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img
            style={{
              height: "25px",
              marginRight: "10px",
              color: "#4C2A76",
            }}
            src={privacy}
          />
          <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}>I. PRIVACY</Typography>
        </AccordionSummary>
        <AccordionDetails style={accordionDetail}>
          <Typography sx={{ fontSize: "18px" }}>
            We, at “The Design House”, consider our customer’s privacy with utmost importance. Hence, we maintain higher
            standards in designing our features to maintain all data of our customers with high confidentiality. We
            ensure that we would be collecting only the details necessary for our dealings with you. In fact, you have
            complete freedom to visit the site and browse without having to provide any personal details, however,
            please note that the submission of your details is recommended when you wish to do shopping with us. <br />
            By visiting our platform and providing your details, it implies that you expressly agree to stay bound to
            our terms and policies.
            <br />
            The above privacy policy is applicable only to the visitors of our site and their online activities, with
            regards to the details that you have shared to us. These policies do not comply with any information shared
            or collected via channels other than this website or offline mode.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={inneraccordionStyle1}>
        <AccordionSummary
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          expandIcon={<ControlPointIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img
            style={{
              height: "25px",
              marginRight: "10px",
              color: "#4C2A76",
            }}
            src={int}
          />
          <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}>
            II. INTELLECTUAL PROPERTY RIGHTS
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={accordionDetail}>
          <Typography sx={{ fontSize: "18px" }}>
            Unless otherwise indicated, the Site is our proprietary asset and all source code, databases, functionality,
            software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the
            "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or
            controlled by us or licensed to us, and are protected by copyright and trademark laws and various other
            intellectual property rights and unfair competition laws of the India. The Content and the Marks are
            provided on the Site "AS IS" for your information and personal use only. Except as expressly provided in
            these Terms of Use, no part of the Site and no Content or Marks may be copied, reproduced, aggregated,
            republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold,
            licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written
            permission.
            <br />
            Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site
            and to download or print a copy of any portion of the Content to which you have properly gained access
            solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to
            the Site, the Content and the Marks.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={inneraccordionStyle1}>
        <AccordionSummary
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          expandIcon={<ControlPointIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img
            style={{
              height: "25px",
              marginRight: "10px",
              color: "#4C2A76",
            }}
            src={users}
          />
          <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}>
            III. USER REPRESENTATIONS
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={accordionDetail}>
          <Typography sx={{ fontSize: "18px" }}>
            By using the Site, you represent and warrant that: (1 ) all registration information you submit will be
            true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly
            update such registration information as necessary; (3) you have the legal capacity and you agree to comply
            with these Terms of use; (4) you are not under the age of 13; (5) you are not a minor in the jurisdiction in
            which you reside, or if a minor, you have received parental permission to use the Site; (6) you will not
            access the Site through automated or non-human means, whether through a bot, script, or otherwise; (7) you
            will not use the Site for any illegal or unauthorized purpose; and (8) your use of the Site will not violate
            any applicable law or regulation.
            <br />
            If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to
            suspend or terminate your account and refuse any and all current or future use of the Site (or any portion
            thereof).
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={inneraccordionStyle1}>
        <AccordionSummary
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          expandIcon={<ControlPointIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img
            style={{
              height: "25px",
              marginRight: "10px",
              color: "#4C2A76",
            }}
            src={register}
          />
          <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}>
            IV. USER REGISTRATION
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={accordionDetail}>
          <Typography sx={{ fontSize: "18px" }}>
            You may be required to register with the Site. You agree to keep your password confidential and will be
            responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a
            username you select if we determine, in our sole discretion, that such username is inappropriate, obscene,
            or otherwise objectionable.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={inneraccordionStyle1}>
        <AccordionSummary
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          expandIcon={<ControlPointIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img
            style={{
              height: "25px",
              marginRight: "10px",
              color: "#4C2A76",
            }}
            src={prohibit}
          />
          <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}>
            V. PROHIBITED ACTIVITIES
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={accordionDetail}>
          <Typography sx={{ fontSize: "18px" }}>
            You may not access or use the Site for any purpose other than that for which we make the Site available. The
            Site may not be used in connection with any commercial endeavors except those that are specifically endorsed
            or approved by us.
            <br />
            As a user of the Site, you agree not to:
            <br />
            <ul>
              <li>
                Systematically retrieve data or other content from the Site to create or compile, directly or
                indirectly, a collection, compilation, database, or directory without written permission from us.
              </li>
              <li>
                Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account
                information such as user passwords.
              </li>
              <li>
                Circumvent, disable, or otherwise interfere with security-related features of the Site, including
                features that prevent or restrict the use or copying of any Content or enforce limitations on the use of
                the Site and/or the Content contained therein.
              </li>
              <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.</li>
              <li>Use any information obtained from the Site in order to harass, abuse, or harm another person.</li>
              <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
              <li>Use the Site in a manner inconsistent with any applicable laws or regulations.</li>
              <li>Engage in unauthorized framing of or linking to the Site.</li>
              <li>
                Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material,
                including excessive use of capital letters and spamming (continuous posting of repetitive text), that
                interferes with any party's uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts,
                alters, or interferes with the use, features, functions, operation, or maintenance of the Site.
              </li>
              <li>
                Engage in any automated use of the system, such as using scripts to send comments or messages, or using
                any data mining, robots, or similar data gathering and extraction tools.
              </li>
              <li>Delete the copyright or other proprietary rights notice from any Content.</li>
              <li>Attempt to impersonate another user or person or use the username of another user.</li>
              <li>
                Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active
                information collection or transmission mechanism, including without limitation, clear graphics
                interchange formats ("gifs"), 1 xl pixels, web bugs, cookies, or other similar devices (sometimes
                referred to as "spyware" or "passive collection mechanisms" or "pcms").
              </li>
              <li>
                Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to
                the Site.
              </li>
              <li>
                Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion
                of the Site to you.
              </li>
              <li>
                Attempt to bypass any measures of the Site designed to prevent or restrict access to the Site, or any
                portion of the Site.
              </li>
              <li>
                Copy or adapt the Site's software, including but not limited to Flash, PHR HTML, JavaScript, or other
                code.
              </li>
              <li>
                Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the
                software comprising or in any way making up a part of the Site.
              </li>
              <li>
                Except as may be the result of standard search engine or Internet browser usage, use, launch, develop,
                or distribute any automated system, including without limitation, any spider, robot, cheat utility,
                scraper, or offline reader that accesses the Site, or using or launching any unauthorized script or
                other software.
              </li>
              <li>Use a buying agent or purchasing agent to make purchases on the Site.</li>
              <li>
                Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by
                electronic or other means for the purpose of sending unsolicited email, or creating user accounts by
                automated means or under false pretenses.
              </li>
              <li>
                Use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for
                any revenue-generating endeavor or commercial enterprise.
              </li>
              <li>Use the Site to advertise or offer to sell goods and services.</li>
              <li>Sell or otherwise transfer your profile.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={inneraccordionStyle1}>
        <AccordionSummary
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          expandIcon={<ControlPointIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img
            style={{
              height: "25px",
              marginRight: "10px",
              color: "#4C2A76",
            }}
            src={contri}
          />
          <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}>
            VI. USER GENERATED CONTRIBUTIONS
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={accordionDetail}>
          <Typography sx={{ fontSize: "18px" }}>
            The Site may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and
            other functionality, and may provide you with the opportunity to create, submit, post, display, transmit,
            perform, publish, distribute, or broadcast content and materials to us or on the Site, including but not
            limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal
            information or other material (collectively, "Contributions"). Contributions may be viewable by other users
            of the Site and through third-party websites. As such, any Contributions you transmit may be treated as
            non-confidential and nonproprietary. When you create or make available any Contributions, you thereby
            represent and warrant that:
            <br />
            <ul>
              <li>
                The creation, distribution, transmission, public display, or performance, and the accessing,
                downloading, or copying of your Contributions do not and will not infringe the proprietary rights,
                including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any
                third party.
              </li>
              <li>
                You are the creator and owner of or have the necessary licenses, rights, consents, releases, and
                permissions to use and to authorize us, the Site, and other users of the Site to use your Contributions
                in any manner contemplated by the Site and these Terms of Use.
              </li>
              <li>
                You have the written consent, release, and/or permission of each and every identifiable individual
                person in your Contributions to use the name or likeness of each and every such identifiable individual
                person to enable inclusion and use of your Contributions in any manner contemplated by the Site and
                these Terms of Use.
              </li>
              <li>Your Contributions are not false, inaccurate, or misleading.</li>
              <li>
                Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid
                schemes, chain letters, spam, mass mailings, or other forms of solicitation.
              </li>
              <li>
                Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous,
                or otherwise objectionable (as determined by us).
              </li>
              <li>Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</li>

              <li>
                Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other
                person and to promote violence against a specific person or class of people.
              </li>
              <li>Your Contributions do not violate any applicable law, regulation, or rule.</li>
              <li>Your Contributions do not violate the privacy or publicity rights of any third party.</li>
              <li>
                Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended
                to protect the health or well-being of minors.
              </li>
              <li>
                Your Contributions do not include any offensive comments that are connected to race, national origin,
                gender, sexual preference, or physical handicap.
              </li>
              <li>
                Your Contributions do not otherwise violate, or link to material that violates, any provision of these
                Terms of Use, or any applicable law or regulation.
              </li>
            </ul>
            Any use of the Site in violation of the foregoing violates these Terms of Use and may result in, among other
            things, termination or suspension of your rights to use the Site.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={inneraccordionStyle1}>
        <AccordionSummary
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          expandIcon={<ControlPointIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img
            style={{
              height: "25px",
              marginRight: "10px",
              color: "#4C2A76",
            }}
            src={license}
          />
          <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}>
            VII. CONTRIBUTION LICENSE
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={accordionDetail}>
          <Typography sx={{ fontSize: "18px" }}>
            By posting your Contributions to any part of the Site, you automatically grant, and you represent and
            warrant that you have the right to grant, to us an unrestricted, unlimited, irrevocable, perpetual,
            non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to host, use, copy,
            reproduce, disclose, sell, resell, publish, broadcast, retitle, archive, store, cache, publicly perform,
            publicly display, reformat, translate, transmit, excerpt (in whole or in part), and distribute such
            Contributions (including, without limitation, your image and voice) for any purpose, commercial,
            advertising, or otherwise, and to prepare derivative works of, or incorporate into other works, such
            Contributions, and grant and authorize sublicenses of the foregoing. The use and distribution may occur in
            any media formats and through any media channels.
            <br />
            This license will apply to any form, media, or technology now known or hereafter developed, and includes our
            use of your name, company name, and franchise name, as applicable, and any of the trademarks, service marks,
            trade names, logos, and personal and commercial images you provide. You waive all moral rights in your
            Contributions, and you warrant that moral rights have not otherwise been asserted in your Contributions.
            <br />
            We do not assert any ownership over your Contributions. You retain full ownership of all of your
            Contributions and any intellectual property rights or other proprietary rights associated with your
            Contributions. We are not liable for any statements or representations in your Contributions provided by you
            in any area on the Site. You are solely responsible for your Contributions to the Site and you expressly
            agree to exonerate us from any and all responsibility and to refrain from any legal action against us
            regarding your Contributions.
            <br />
            We have the right, in our sole and absolute discretion, (1) to edit, redact, or otherwise change any
            Contributions; (2) to re-categorize any Contributions to place them in more appropriate locations on the
            Site; and (3) to pre-screen or delete any Contributions at any time and for any reason, without notice. We
            have no obligation to monitor your Contributions.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={inneraccordionStyle1}>
        <AccordionSummary
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          expandIcon={<ControlPointIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img
            style={{
              height: "25px",
              marginRight: "10px",
              color: "#4C2A76",
            }}
            src={guide}
          />
          <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}>
            VIII. GUIDELINES FOR REVIEWS
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={accordionDetail}>
          <Typography sx={{ fontSize: "18px" }}>
            We may provide you areas on the Site to leave reviews or ratings. When posting a review, you must comply
            with the following criteria: (1) you should have firsthand experience with the person/entity being reviewed;
            (2) your reviews should not contain offensive profanity, or abusive, racist, offensive, or hate language;
            (3) your reviews should not contain discriminatory references based on religion, race, gender, national
            origin, age, marital status, sexual orientation, or disability; (4) your reviews should not contain
            references to illegal activity; (5) you should not be affiliated with competitors if posting negative
            reviews; (6) you should not make any conclusions as to the legality of conduct; (7) you may not post any
            false or misleading statements; and (8) you may not organize a campaign encouraging others to post reviews,
            whether positive or negative.
            <br />
            We may accept, reject, or remove reviews in our sole discretion. We have absolutely no obligation to screen
            reviews or to delete reviews, even if anyone considers reviews objectionable or inaccurate. Reviews are not
            endorsed by us, and do not necessarily represent our opinions or the views of any of our affiliates or
            partners. We do not assume liability for any review or for any claims, liabilities, or losses resulting from
            any review. By posting a review, you hereby grant to us a perpetual, non-exclusive, worldwide, royalty-free,
            fully-paid, assignable, and sublicensable right and license to reproduce, modify, translate, transmit by any
            means, display, perform, and/or distribute all content relating to reviews.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={inneraccordionStyle1}>
        <AccordionSummary
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          expandIcon={<ControlPointIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img
            style={{
              height: "25px",
              marginRight: "10px",
              color: "#4C2A76",
            }}
            src={sub}
          />
          <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}>IX. SUBMISSIONS</Typography>
        </AccordionSummary>
        <AccordionDetails style={accordionDetail}>
          <Typography sx={{ fontSize: "18px" }}>
            You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information
            regarding the Site ("Submissions") provided by you to us are non-confidential and shall become our sole
            property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled
            to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or
            otherwise, without acknowledgment or compensation to you. You hereby waive all moral rights to any such
            Submissions, and you hereby warrant that any such Submissions are original with you or that you have the
            right to submit such Submissions. You agree there shall be no recourse against us for any alleged or actual
            infringement or misappropriation of any proprietary right in your Submissions.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={inneraccordionStyle1}>
        <AccordionSummary
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          expandIcon={<ControlPointIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img
            style={{
              height: "25px",
              marginRight: "10px",
              color: "#4C2A76",
            }}
            src={site}
          />
          <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}>X. SITE MANAGEMENT</Typography>
        </AccordionSummary>
        <AccordionDetails style={accordionDetail}>
          <Typography sx={{ fontSize: "18px" }}>
            We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Use;
            (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these
            Terms of Use, including without limitation, reporting such user to law enforcement authorities; (3) in our
            sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable
            (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole
            discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all
            files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise
            manage the Site in a manner designed to protect our rights and property and to facilitate the proper
            functioning of the Site.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={inneraccordionStyle1}>
        <AccordionSummary
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          expandIcon={<ControlPointIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img
            style={{
              height: "25px",
              marginRight: "10px",
              color: "#4C2A76",
            }}
            src={copy}
          />
          <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}>
            XI. COPYRIGHT INFRINGEMENTS
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={accordionDetail}>
          <Typography sx={{ fontSize: "18px" }}>
            We respect the intellectual property rights of others. If you believe that any material available on or
            through the Site infringes upon any copyright you own or control, please immediately notify us using the
            contact information provided below (a "Notification"). A copy of your Notification will be sent to the
            person who posted or stored the material addressed in the Notification. Please be advised that pursuant to
            applicable law you may be held liable for damages if you make material misrepresentations in a Notification.
            Thus, if you are not sure that material located on or linked to by the Site infringes your copyright, you
            should consider first contacting an attorney.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={inneraccordionStyle1}>
        <AccordionSummary
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          expandIcon={<ControlPointIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img
            style={{
              height: "25px",
              marginRight: "10px",
              color: "#4C2A76",
            }}
            src={terms}
          />
          <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}>
            XII. TERM AND TERMINATION
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={accordionDetail}>
          <Typography sx={{ fontSize: "18px" }}>
            These Terms of Use shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER
            PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR
            LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR
            ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR
            COVENANT CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE
            OR PARTICIPATION IN THE SITE OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY
            TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION- If we terminate or suspend your account for any reason, you
            are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the
            name of any third party, even if you may be acting on behalf of the third party. In addition to terminating
            or suspending your account, we reserve the right to take appropriate legal action, including without
            limitation pursuing civil, criminal, and injunctive redress.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={inneraccordionStyle1}>
        <AccordionSummary
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          expandIcon={<ControlPointIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img
            style={{
              height: "25px",
              marginRight: "10px",
              color: "#4C2A76",
            }}
            src={modi}
          />
          <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}>
            XIII. MODIFICATIONS AND INTERRUPTIONS
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={accordionDetail}>
          <Typography sx={{ fontSize: "18px" }}>
            We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at
            our sole discretion without notice. However, we have no obligation to update any information on our Site. We
            also reserve the right to modify or discontinue all or part of the Site without notice at any time. We will
            not be liable to you or any third party for any modification, price change, suspension, or discontinuance of
            the Site.
            <br />
            We cannot guarantee the Site will be available at all times. We may experience hardware, software, or other
            problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors.
            We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Site at any
            time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss,
            damage, or inconvenience caused by your inability to access or use the Site during any downtime or
            discontinuance of the Site. Nothing in these Terms of Use will be construed to obligate us to maintain and
            support the Site or to supply any corrections, updates, or releases in connection therewith.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={inneraccordionStyle1}>
        <AccordionSummary
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          expandIcon={<ControlPointIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img
            style={{
              height: "25px",
              marginRight: "10px",
              color: "#4C2A76",
            }}
            src={gover}
          />
          <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}>XIV. GOVERNING LAW</Typography>
        </AccordionSummary>
        <AccordionDetails style={accordionDetail}>
          <Typography sx={{ fontSize: "18px" }}>
            These Terms shall be governed by and defined following the laws of India. TINA ROSARIO THE DESIGN HOUSE and
            yourself irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any
            dispute which may arise in connection with these terms.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={inneraccordionStyle1}>
        <AccordionSummary
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          expandIcon={<ControlPointIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img
            style={{
              height: "25px",
              marginRight: "10px",
              color: "#4C2A76",
            }}
            src={dis}
          />
          <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}>
            XV. DISPUTE RESOLUTION
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={accordionDetail}>
          <Typography sx={{ fontSize: "18px" }}>
            <b>Informal Negotiations</b>
            <br /> To expedite resolution and control the cost of any dispute, controversy, or claim related to these
            Terms of Use (each "Dispute" and collectively, the "Disputes") brought by either you or us (individually, a
            "Party" and collectively, the "Parties"), the Parties agree to first attempt to negotiate any Dispute
            (except those Disputes expressly provided below) informally for at least thirty (30) days before initiating
            arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.
            <br />
            <b>Binding Arbitration</b>
            <br /> Any dispute arising out of or in connection with this contract, including any question regarding its
            existence, validity, or termination, shall be referred to and finally resolved through the governing laws of
            India. The seat, or legal place, of arbitration shall be Chennai, India. The language of the proceedings
            shall be English. The governing law of the contract shall be the substantive law of India.
            <br />
            <b>Restrictions</b>
            <br /> The Parties agree that any arbitration Shall be limited to the Dispute between the Parties
            individually, TO the full extent permitted by law, (a) arbitration Shall be joined with any other
            proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or
            to utilize class action procedures; and (c) there is no right or authority for any Dispute to be brought in
            a purported representative capacity on behalf of the general public or any other persons.
            <br />
            <b>Exceptions to Informal Negotiations and Arbitration</b>
            <br /> The Parties agree that the following Disputes are not subject to the above provisions concerning
            informal negotiations and binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning
            the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising
            from, allegations of theft, piracy, invasion Of privacy, or unauthorized use; and (c) any Claim for
            injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect
            to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable
            and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for
            jurisdiction above, and the Parties agree to submit to the personal jurisdiction Of that court.
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={inneraccordionStyle1}>
        <AccordionSummary
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          expandIcon={<ControlPointIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img
            style={{
              height: "25px",
              marginRight: "10px",
              color: "#4C2A76",
            }}
            src={correct}
          />
          <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}>XVI. CORRECTIONS</Typography>
        </AccordionSummary>
        <AccordionDetails style={accordionDetail}>
          <Typography sx={{ fontSize: "18px" }}>
            There may be information on the Site that contains typographical errors, inaccuracies, or omissions,
            including descriptions, pricing, availability, and various Other information. We reserve the right to
            correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any
            time, without prior notice.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={inneraccordionStyle1}>
        <AccordionSummary
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          expandIcon={<ControlPointIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img
            style={{
              height: "25px",
              marginRight: "10px",
              color: "#4C2A76",
            }}
            src={disclaim}
          />
          <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}>XVII. DISCLAIMER</Typography>
        </AccordionSummary>
        <AccordionDetails style={accordionDetail}>
          <Typography sx={{ fontSize: "18px" }}>
            THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR
            SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES,
            EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE
            IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO
            WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE'S CONTENT OR THE CONTENT OF ANY
            WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES,
            OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER,
            RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE
            SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN , (4) ANY
            INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE
            LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS
            IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY
            CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE, WE DO NOT WARRANT, ENDORSE,
            GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY
            THROUGH THE SITE. ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR
            OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION
            BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR
            SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION
            WHERE APPROPRIATE.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={inneraccordionStyle1}>
        <AccordionSummary
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          expandIcon={<ControlPointIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img
            style={{
              height: "25px",
              marginRight: "10px",
              color: "#4C2A76",
            }}
            src={limit}
          />
          <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}>
            XVIII. LIMITATIONS OF LIABILITY
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={accordionDetail}>
          <Typography sx={{ fontSize: "18px" }}>
            IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY
            DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT,
            LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED
            OF THE POSSIBILITY OF SUCH DAMAGES.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={inneraccordionStyle1}>
        <AccordionSummary
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          expandIcon={<ControlPointIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img
            style={{
              height: "25px",
              marginRight: "10px",
              color: "#4C2A76",
            }}
            src={inde}
          />
          <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}>
            XIX. INDEMNIFICATION
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={accordionDetail}>
          <Typography sx={{ fontSize: "18px" }}>
            You agree to defend, indemnify, and hold us harmless, including Our subsidiaries, affiliates, and all Of our
            respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim,
            or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out
            Of: (1) your Contributions; (2) use Of the Site; (3) breach Of these Terms Of Use; (4) any breach Of your
            representations and warranties set forth in these Terms Of Use; (5) your violation Of the rights Of a third
            party, including but not limited to intellectual property rights; or (6) any overt harmful act toward any
            Other user Of the Site with whom you connected via the Site. Notwithstanding the foregoing, we reserve the
            right, at your expense, to assume the exclusive defense and control Of any matter for which you are required
            to indemnify us, and you agree to cooperate, at your expense, with our defense Of such claims. We will use
            reasonable efforts to notify you Of any such claim, action, or proceeding which is subject to this
            indemnification upon becoming aware Of it.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={inneraccordionStyle1}>
        <AccordionSummary
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          expandIcon={<ControlPointIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img
            style={{
              height: "25px",
              marginRight: "10px",
              color: "#4C2A76",
            }}
            src={userdata}
          />
          <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}>XX. USER DATA</Typography>
        </AccordionSummary>
        <AccordionDetails style={accordionDetail}>
          <Typography sx={{ fontSize: "18px" }}>
            We will maintain certain data that you transmit to the Site for the purpose Of managing the performance Of
            the Site, as well as data relating to your use Of the Site. Although we perform regular routine backups Of
            data, you are solely responsible for all data that you transmit or that relates to any activity you have
            undertaken using the Site. You agree that we shall have no liability to you for any loss or corruption Of
            any such data, and you hereby waive any right Of action against us arising from any such loss or corruption
            Of such data.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={inneraccordionStyle1}>
        <AccordionSummary
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          expandIcon={<ControlPointIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img
            style={{
              height: "25px",
              marginRight: "10px",
              color: "#4C2A76",
            }}
            src={elect}
          />
          <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}>
            XXI. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={accordionDetail}>
          <Typography sx={{ fontSize: "18px" }}>
            Visiting the Site, sending us emails, and completing online forms constitute electronic communications. You
            consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and
            other communications we provide to you electronically, via email and on the Site, satisfy any legal
            requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES,
            CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF
            TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE. You hereby waive any rights or requirements under
            any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original
            signature or delivery or retention of non-electronic records, or to payments or the granting of credits by
            any means other than electronic means.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={inneraccordionStyle1}>
        <AccordionSummary
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          expandIcon={<ControlPointIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img
            style={{
              height: "25px",
              marginRight: "10px",
              color: "#4C2A76",
            }}
            src={mis}
          />
          <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}>
            XXII. MISCELLANEOUS
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={accordionDetail}>
          <Typography sx={{ fontSize: "18px" }}>
            These Terms Of Use and any policies or operating rules posted by us on the Site or in respect to the Site
            constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any
            right or provision Of these Terms Of Use shall not operate as a waiver Of such right or provision. These
            Terms Of Use operate to the fullest extent permissible by law. We may assign any or all Of our rights and
            obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or
            failure to act caused by any cause beyond our reasonable control. If any provision or part Of a provision Of
            these Terms Of Use is determined to be unlawful, void, or unenforceable, that provision or part Of the
            provision is deemed severable from these Terms Of Use and does not affect the validity and enforceability Of
            any remaining provisions. There is no joint venture, partnership, employment or agency relationship created
            between you and us as a result Of these Terms Of Use or use Of the Site. You agree that these Terms Of Use
            will not be construed against us by virtue Of having drafted them. You hereby waive any and all defenses you
            may have based on the electronic form Of these Terms Of Use and the lack Of signing by the parties hereto to
            execute these Terms Of
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={inneraccordionStyle1}>
        <AccordionSummary
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          expandIcon={<ControlPointIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img
            style={{
              height: "25px",
              marginRight: "10px",
              color: "#4C2A76",
            }}
            src={contact}
          />
          <Typography sx={{ alignSelf: "center", fontWeight: "bold", fontSize: "22px" }}>XXIV. CONTACT US</Typography>
        </AccordionSummary>
        <AccordionDetails style={accordionDetail}>
          <Typography sx={{ fontSize: "18px" }}>
            In order to resolve a complaint regarding the Site or to receive further information regarding use Of the
            Site, please contact us at:
            <br />
            TINA ROSARIO
            <br />
            THE DESIGN HOUSE
            <br />
            112 A Nehru Street
            <br />
            Alwar Thiru Nagar,
            <br />
            Valasarawakkam,
            <br />
            Chennai - 600087
            <br />
            Tamilnadu, India
            <br />
            Phone:+917200060540
            <br /> design@tinarosario.com
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ display: "none" }} className="outeraccordion">
        <AccordionSummary
          expandIcon={<ControlPointIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        ></AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
    </div>
  );
};
