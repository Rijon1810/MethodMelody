import React, { Component } from "react";
import PageHelmet from "./Helmet.jsx";
import Breadcrumb from "../../elements/common/Breadcrumb.jsx";
import CounterOne from "../../elements/counters/CounterOne";
import Testimonial from "../../elements/Testimonial";
import BrandTwo from "../../elements/BrandTwo.jsx";
import StopOutlinedIcon from "@material-ui/icons/StopOutlined";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  CropSquare,
} from "react-icons/fa";

import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

class Privacy extends Component {
  render() {
    let title = "Our Policy",
      description = `This Privacy Policy describes the data protection practices of MethodMelody (“MethodMelody,”
            “we,” “us,” or “our”). This Privacy Policy applies to information that we collect and use about
            you when you access or use the MethodMelody website, mobile application, or other online or
            mobile service that links to or otherwise presents this Privacy Policy to you. We refer to these
            products and services collectively as the “Services.”
            PLEASE READ THIS PRIVACY POLICY CAREFULLY TO UNDERSTAND HOW WE
            HANDLE YOUR INFORMATION. IF YOU DO NOT AGREE TO THIS PRIVACY
            POLICY, PLEASE DO NOT USE THE SERVICES.`;
    return (
      <React.Fragment>
        <PageHelmet pageTitle="Terms" />

        <Header from="landing" />
        {/* Start Breadcrump Area */}
        <Breadcrumb title={"PRIVACY POLICY"} />
        {/* End Breadcrump Area */}

        {/* Start About Area  */}
        <div className="rn-about-area ptb--120 bg_color--1">
          <div className="rn-about-wrapper">
            <div className="container">
              <div className="row  align-items-center">
                <div className="col-lg-12">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">{title}</h2>
                      <p className="description text-justify">{description}</p>
                      <h4 className="description text-justify font-weight-bold">
                        This Privacy Policy contains the following sections
                      </h4>
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="about-us-list">
                            <p classname="description">
                              {" "}
                              <StopOutlinedIcon fontSize="small" />
                              Information We Collect
                            </p>
                            <p classname="description">
                              {" "}
                              <StopOutlinedIcon fontSize="small" />
                              How We Use Your Information
                            </p>
                            <p classname="description">
                              {" "}
                              <StopOutlinedIcon fontSize="small" />
                              Cookies and Similar Technologies
                            </p>
                            <p classname="description">
                              {" "}
                              <StopOutlinedIcon fontSize="small" />
                              Online Analytics and Advertising
                            </p>
                            <p classname="description">
                              {" "}
                              <StopOutlinedIcon fontSize="small" />
                              How We Share and Disclose Your Information
                            </p>
                            <p classname="description">
                              {" "}
                              <StopOutlinedIcon fontSize="small" />
                              Retention of Your Information
                            </p>
                            <p classname="description">
                              {" "}
                              <StopOutlinedIcon fontSize="small" />
                              How We Protect Your Information
                            </p>
                            <p classname="description">
                              {" "}
                              <StopOutlinedIcon fontSize="small" />
                              Third Party Links and Features
                            </p>
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="about-us-list">
                            <p classname="description">
                              <StopOutlinedIcon fontSize="small" />
                              Children’s Privacy
                            </p>{" "}
                            <p classname="description">
                              {" "}
                              <StopOutlinedIcon fontSize="small" />
                              Data Subject Rights and Choices
                            </p>
                            <p classname="description">
                              {" "}
                              <StopOutlinedIcon fontSize="small" />
                              Legal Bases for Use of Your Information
                            </p>
                            <p classname="description">
                              {" "}
                              <StopOutlinedIcon fontSize="small" />
                              International Transfer and Privacy Shield
                            </p>
                            <p classname="description">
                              {" "}
                              <StopOutlinedIcon fontSize="small" />
                              Privacy Notice for Residents of Certain U.S.
                              States
                            </p>
                            <p classname="description">
                              {" "}
                              <StopOutlinedIcon fontSize="small" />
                              Changes to Our Privacy Policy
                            </p>
                            <p classname="description">
                              {" "}
                              <StopOutlinedIcon fontSize="small" />
                              MethodMelody Contact Information
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mt--150">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">INFORMATION WE COLLECT</h2>
                      <p className="description">
                        We collect information about you through the means
                        discussed below. Please note that we need certain types
                        of information so that we can provide the Services to
                        you. If you do not provide us with such information, or
                        ask us to delete it, you may no longer be able to access
                        or use our Services.
                      </p>
                      <h3 className="description text-justify font-weight-bold mt--50">
                        Information You Provide to Us
                      </h3>
                      <p className="description">
                        We collect a variety of information that you provide
                        directly to us. For example, we collect information from
                        you through:
                      </p>
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="about-us-list">
                            <p classname="description">
                              <StopOutlinedIcon fontSize="small" />
                              The Services you use or processing your orders
                            </p>
                            <p classname="description">
                              <StopOutlinedIcon fontSize="small" />
                              Requests or questions you submit to us via online
                              forms, email, or otherwise
                            </p>
                            <p classname="description">
                              <StopOutlinedIcon fontSize="small" />
                              Your participation in sweepstakes, contests, or
                              surveys
                            </p>
                            <p classname="description">
                              <StopOutlinedIcon fontSize="small" />
                              Any reviews that you submit about the Services
                            </p>
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="about-us-list">
                            <p classname="description">
                              <StopOutlinedIcon fontSize="small" />
                              Account registration and administration of your
                              account
                            </p>
                            <p classname="description">
                              <StopOutlinedIcon fontSize="small" />
                              Uploads or posts to the Services
                            </p>
                            <p classname="description">
                              <StopOutlinedIcon fontSize="small" />
                              Requests for customer support and technical
                              assistance
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="about-us-list">
                            {" "}
                            <p classname="description">
                              Information about you. While parts of the Services
                              may not require you to provide any information
                              that can directly identify you by name (such as if
                              you choose to browse the website without logging
                              in), the specific types of information we collect
                              will depend upon the Services you use, how you use
                              them, and the information you choose to provide.
                            </p>
                            <p className="description text-justify">
                              The types of data we collect directly from you
                              includes:
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="about-us-list">
                            <p classname="description">
                              <StopOutlinedIcon fontSize="small" />
                              Email address
                            </p>
                            <p classname="description">
                              <StopOutlinedIcon fontSize="small" />
                              Name, if you choose to provide it
                            </p>
                            <p classname="description">
                              <StopOutlinedIcon fontSize="small" />
                              Log-in credentials, if you create a MethodMelody
                              account
                            </p>
                            <p classname="description">
                              <StopOutlinedIcon fontSize="small" />
                              Billing information, such as shipping address of a
                              gift card recipient, credit or debit card number,
                              Bkash ad Rocket number, verification number, and
                              expiration date
                            </p>
                            <p classname="description">
                              <StopOutlinedIcon fontSize="small" />
                              Information about purchases or other transactions
                              with us
                            </p>
                            <p classname="description">
                              <StopOutlinedIcon fontSize="small" />
                              Information about your customer service
                              interactions with us
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="about-us-list">
                            <p classname="description">
                              <StopOutlinedIcon fontSize="small" />
                              Demographic information such as your gender or
                              other information you choose to provide as part of
                              your MethodMelody profile
                            </p>
                            <p classname="description">
                              <StopOutlinedIcon fontSize="small" />
                              User-generated content you provide to us, such as
                              when you comment on content on the Services,
                              respond to a survey request, review a class, or
                              participate in the public forums
                            </p>
                            <p classname="description">
                              <StopOutlinedIcon fontSize="small" />
                              Classes in which you enroll
                            </p>
                            <p classname="description">
                              <StopOutlinedIcon fontSize="small" />
                              Any other information you choose to directly
                              provide to us in connection with your use of the
                              Services
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <h3 className="description text-justify font-weight-bold mt--50">
                            Information about others.
                          </h3>
                          <p className="description text-justify">
                            If you request that your purchase be provided to
                            someone other than yourself (such as a gift
                            recipient), we use the information you provide about
                            the other person to fulfill the shipment.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mt--150">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h3 className="description text-justify font-weight-bold">
                        Information We Collect Through Automated Means
                      </h3>
                      <p className="description text-justify">
                        When you use our Services, we collect certain
                        information as described in this Section. As discussed
                        further below, we and our service providers (which are
                        third party companies that work on our behalf) may use a
                        variety of technologies, including cookies and similar
                        tools, to assist in collecting this information.
                      </p>
                      <h4 className="description text-justify font-weight-bold mt--50">
                        Websites.
                      </h4>
                      <p className="description text-justify">
                        When you use our website, we collect and analyze
                        information such as your IP address, browser types,
                        browser language, operating system, software and
                        hardware attributes (including device IDs) referring and
                        exit pages and URLs, the number of clicks, pages viewed
                        and the order of those pages, date and time of use,
                        content watched, total minutes watched, error logs, and
                        other similar information about how you use the website.
                      </p>
                      <h4 className="description text-justify font-weight-bold mt--50">
                        Mobile Applications.
                      </h4>
                      <p className="description text-justify">
                        When you use a MethodMelody mobile application or
                        software ("app"), we automatically receive certain
                        information about the mobile phone, tablet, or computer
                        used to access the app, including device identifiers, IP
                        address, operating system, version, Internet service
                        provider, browser type, domain name and other similar
                        information, whether and when you update the app, date
                        and time of use, content watched, total minutes watched,
                        error logs, and other similar information about how you
                        use the app.
                      </p>
                      <h4 className="description text-justify font-weight-bold mt--50">
                        Location Information.
                      </h4>
                      <p className="description text-justify">
                        When you use the Services, we and our service providers
                        may automatically collect general location information
                        (e.g., IP address, city/state and or postal code
                        associated with an IP address) from your computer or
                        mobile device.
                      </p>
                      <h3 className="description text-justify font-weight-bold mt--50">
                        Information We Collect From Social Media and Other
                        Content Platforms
                      </h3>
                      <p className="description text-justify">
                        If you access the Services through a third-party
                        connection or log-in (e.g., through a social network
                        like Facebook or Twitter), you may allow us to have
                        access to and store certain information from your social
                        network profile. This can include your name, gender,
                        profile picture, your “likes” and check-ins, and your
                        list of friends, depending on your settings on such
                        services. If you do not wish to have this information
                        shared, do not use a social networking connection to
                        access the Services. For a description of how social
                        networking sites handle your information, please refer
                        to their privacy policies and terms of use, which may
                        permit you to modify your privacy settings. You may also
                        have the option of posting your Services activities to
                        Social Networking Services when you access content
                        through the Services (for example, you may post to
                        Facebook that you enrolled in a class on the Service);
                        you acknowledge that if you choose to use this feature,
                        your friends, followers and subscribers on any Social
                        Networking Services you have enabled will be able to
                        view such activity.
                      </p>
                      <h3 className="description text-justify font-weight-bold mt--50">
                        Information We Collect from Others
                      </h3>
                      <p className="description text-justify">
                        We may receive additional information such as
                        demographic and statistical information from third
                        parties, such as business partners, marketers,
                        researchers, analysts, and other parties that we may
                        attribute to you based on your assignment to certain
                        statistical groups. We use this information to
                        supplement the information that we collect directly from
                        you in order to derive your possible interests and to
                        provide more relevant experiences for you and improve
                        our products, analytics, and advertising.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mt--150">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">HOW WE USE YOUR INFORMATION</h2>
                      <p className="description">
                        We, or our service providers, use your information for
                        various purposes depending on the types of information
                        we have collected from and about you, in order to:
                      </p>
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="about-us-list">
                            <p className="description">
                              <StopOutlinedIcon fontSize="small" />
                              Complete a purchase or provide the Services you
                              have requested, including invoicing and accounting
                            </p>
                            <p className="description">
                              <StopOutlinedIcon fontSize="small" />
                              Respond to your request for information and
                              provide you with more effective and efficient
                              customer service
                            </p>
                            <p className="description">
                              <StopOutlinedIcon fontSize="small" />
                              Provide you with updates and information about
                              classes in which you have enrolled
                            </p>
                            <p className="description">
                              <StopOutlinedIcon fontSize="small" />
                              Contact you by email, postal mail, or phone
                              regarding MethodMelody and third-party products,
                              services, surveys, research studies, promotions,
                              special events and other subjects that we think
                              may be of interest to you
                            </p>
                            <p className="description">
                              <StopOutlinedIcon fontSize="small" />
                              Customize the advertising and content you see on
                              the Services
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="about-us-list">
                            <p classname="description">
                              <StopOutlinedIcon fontSize="small" />
                              Help us better understand your interests and
                              needs, and improve the Services, including through
                              research and reports, and test and create new
                              products, features, and services
                            </p>
                            <p classname="description">
                              <StopOutlinedIcon fontSize="small" />
                              Secure our websites and applications, and resolve
                              app crashes and other issues being reported
                            </p>
                            <p classname="description">
                              <StopOutlinedIcon fontSize="small" />
                              Comply with any procedures, laws, and regulations
                              which apply to us where it is necessary for our
                              legitimate interests or the legitimate interests
                              of others
                            </p>
                            <p classname="description">
                              <StopOutlinedIcon fontSize="small" />
                              Establish, exercise, or defend our legal rights
                              where it is necessary for our legitimate interests
                              or the legitimate interests of others
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt--50">
                          <div className="about-us-list">
                            <h4 className="description text-justify font-weight-bold">
                              Combined Information.
                            </h4>
                            <p classname="description">
                              For the purposes discussed in this Privacy Policy,
                              we may combine the information that we collect
                              through the Services with information that we
                              receive from other sources, both online and
                              offline, and use such combined information in
                              accordance with this Privacy Policy.
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt--50">
                          <div className="about-us-list">
                            {" "}
                            <h4 className="description text-justify font-weight-bold">
                              Aggregate/Anonymous Data.
                            </h4>
                            <p classname="description">
                              We may aggregate and/or anonymize any information
                              collected through the Services so that such
                              information can no longer be linked to you or your
                              device. We may use such information for any
                              purpose, including without limitation for research
                              and marketing purposes, and may also share such
                              data with any third parties, including
                              advertisers, promotional partners, and sponsors.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mt--150">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">
                        COOKIES AND SIMILAR TECHNOLOGIES
                      </h2>
                      <p className="description text-justify">
                        To collect the information in the “Information We
                        Collect through Automated Means” section above, we and
                        our service providers use Internet server logs, cookies,
                        tracking pixels, and other similar tracking
                        technologies. We use these technologies in order to
                        offer you a more tailored experience in the future, by
                        understanding and remembering your particular browsing
                        preferences. Cookies are small text files that are
                        placed on your computer or mobile device when you visit
                        a site that enable us to: (i) recognize your computer;
                        (ii) store your preferences and settings; (iii)
                        understand the web pages of the Services you have
                        visited; (iv) enhance your user experience by delivering
                        and measuring the effectiveness of content and
                        advertising tailored to your interests; (v) perform
                        searches and analytics; and (vi) assist with security
                        and administrative functions. Some cookies are placed in
                        your browser cache while those associated with Flash
                        technologies are stored with your Adobe Flash Player
                        files. As we adopt additional technologies, we may also
                        gather information through other methods. Please note
                        that you can change your settings to notify you when a
                        cookie is being set or updated or to block cookies
                        altogether. Please consult the “Help” section of your
                        browser for more information (e.g., Internet Explorer;
                        Google Chrome; Mozilla Firefox; or Apple Safari). You
                        can also manage the use of Flash technologies, including
                        flash cookies and local storage objects, with the Flash
                        management tools available at Adobe's website. Please
                        note that by blocking, disabling, or managing any or all
                        cookies, you may not have access to certain features or
                        offerings of the Services. For more information about
                        our use of cookies, please see our Cookie Policy.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mt--150">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">
                        ONLINE ANALYTICS AND ADVERTISING
                      </h2>
                      <h4 className="description text-justify font-weight-bold mt--50">
                        Analytics
                      </h4>
                      <p className="description text-justify">
                        We may use third-party web analytics services (such as
                        those of Google Analytics) on our Services to collect
                        and analyze usage information through cookies and
                        similar tools; engage in auditing, research, or
                        reporting; assist with fraud prevention; and provide
                        certain features to you. To prevent Google Analytics
                        from using your information for analytics, you may
                        install the Google Analytics Opt-out Browser Add-on by
                        clicking here. If you receive email from us, we may use
                        certain analytics tools, such as clear GIFs to capture
                        data such as when you open our message or click on any
                        links or banners our email contains. This data allows us
                        to gauge the effectiveness of our communications and
                        marketing campaigns.
                      </p>
                      <h4 className="description text-justify font-weight-bold mt--50">
                        Online Advertising
                      </h4>
                      <p className="description text-justify">
                        The Services may integrate third-party advertising
                        technologies that allow for the delivery of relevant
                        content and advertising on the Services, as well as on
                        other websites you visit and other applications you use.
                        The ads may be based on various factors such as the
                        content of the page you are visiting, information you
                        enter such as your age and gender, your searches,
                        demographic data, user-generated content, and other
                        information we collect from you. These ads may be based
                        on your current activity or your activity over time and
                        across other websites and online services and may be
                        tailored to your interests. Third parties may also place
                        cookies or other tracking technologies on your computer,
                        mobile phone, or other device to collect information
                        about you as discussed above. These third parties (e.g.,
                        ad networks and ad servers such as Google Analytics,
                        DoubleClick and others) may also serve tailored ads to
                        you as you use the Internet and Internet-connected
                        applications, and access their own cookies or other
                        tracking technologies on your computer, mobile phone, or
                        other device you use to access the Services to assist in
                        this activity. We neither have access to, nor does this
                        Privacy Policy govern, the use of cookies or other
                        tracking technologies that may be placed on your device
                        you use to access the Services by such non-affiliated
                        third parties. If you are interested in more information
                        about tailored browser advertising and how you can
                        generally control cookies from being put on your
                        computer to deliver tailored advertising, you may visit
                        the Network Advertising Initiative’s Consumer Opt- Out
                        link, the Digital Advertising Alliance’s Consumer
                        Opt-Out link, or Your Online Choices to opt-out of
                        receiving tailored advertising from companies that
                        participate in those programs. To opt out of Google
                        Analytics for display advertising or customize Google
                        display network ads, visit the Google Ads Settings page.
                        We do not control these opt-out links or whether any
                        particular company chooses to participate in these
                        opt-out programs. We are not responsible for any choices
                        you make using these mechanisms or the continued
                        availability or accuracy of these mechanisms. Please
                        note that if you exercise the choices above, you will
                        still see advertising when you use the Services, but it
                        will not be tailored to you based on your online
                        behavior over time.
                      </p>
                      <h4 className="description text-justify font-weight-bold mt--50">
                        Notice Concerning Do Not Track
                      </h4>
                      <p className="description text-justify">
                        Do Not Track (“DNT”) is a privacy preference that users
                        can set in certain web browsers. We are committed to
                        providing you with meaningful choices about the
                        information collected on our website for third party
                        purposes, and that is why we provide the variety of
                        opt-out mechanisms listed above. However, we do not
                        currently recognize or respond to browser-initiated DNT
                        signals. To learn more about Do Not Track, you can do so
                        here.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mt--150">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">
                        HOW WE SHARE AND DISCLOSE YOUR INFORMATION
                      </h2>
                      <p className="text-justify description">
                        MethodMelody will share your information in the
                        following ways:
                      </p>
                      <h4 className="description text-justify font-weight-bold mt--50">
                        Affiliates and Subsidiaries.
                      </h4>
                      <p className="description text-justify">
                        We may share information we collect within MethodMelody
                        to deliver products and services to you, ensure a
                        consistent level of service, and enhance our products,
                        services, and your customer experience.
                      </p>
                      <h4 className="description text-justify font-weight-bold mt--50">
                        Service Providers.
                      </h4>
                      <p className="description text-justify">
                        We provide access to or share your information with
                        select third parties who perform services on our behalf.
                        They have access to perform these services but are
                        prohibited from using your information for other
                        purposes. They provide a variety of services to us,
                        including billing, sales, marketing, product content and
                        features, advertising, analytics, research, customer
                        service, data storage, security, fraud prevention,
                        payment processing, and legal services.
                      </p>
                      <h4 className="description text-justify font-weight-bold mt--50">
                        Protection of MethodMelody and Others.
                      </h4>
                      <p className="description text-justify">
                        By using the Services, you acknowledge and agree that we
                        may access, retain and disclose the information we
                        collect and maintain about you if required to do so by
                        law or in a good faith belief that such access,
                        retention or disclosure is reasonably necessary to: (a)
                        comply with legal process (e.g. a subpoena or court
                        order); (b) enforce our Terms of Service, this Privacy
                        Policy, or other contracts with you, including
                        investigation of potential violations thereof; (c)
                        respond to claims that any content violates the rights
                        of third parties; (d) respond to your requests for
                        customer service; and/or (e) protect the rights,
                        property or personal safety of MethodMelody, its agents
                        and affiliates, its users and/or the public. This
                        includes exchanging information with other companies and
                        organizations for fraud protection, and spam/malware
                        prevention, and similar purposes.
                      </p>
                      <h4 className="description text-justify font-weight-bold mt--50">
                        Business Transfers.
                      </h4>
                      <p className="description text-justify">
                        As we continue to develop our business, we may buy,
                        merge, or partner with other companies. In such
                        transactions (including in contemplation of such
                        transactions), user information may be among the
                        transferred assets. If a portion or all of our assets
                        are sold or transferred to a third-party, customer
                        information (including your email address) would likely
                        be one of the transferred business assets. If such
                        transfer is subject to additional mandatory restrictions
                        under applicable laws, we will comply with such
                        restrictions.
                      </p>
                      <h4 className="description text-justify font-weight-bold mt--50">
                        Public Forums.
                      </h4>
                      <p className="description text-justify">
                        Certain features of our Services make it possible for
                        you to share comments publicly with other users. Any
                        information that you submit through such features is not
                        confidential, and we may use it for any purpose
                        (including in testimonials or other marketing
                        materials). Any information you post openly in these
                        ways will be available to the public at large and
                        potentially accessible through third-party search
                        engines. Accordingly, please take care when using these
                        features.
                      </p>
                      <h4 className="description text-justify font-weight-bold mt--50">
                        Aggregate/Anonymous Information.
                      </h4>
                      <p className="description text-justify">
                        From time to time, we may share Aggregate/Anonymous
                        Information about use of the Services, such as by
                        publishing a report on usage trends. The sharing of such
                        data is unrestricted.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mt--150">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">RETENTION OF YOUR INFORMATION</h2>
                      <p className="text-justify description">
                        We keep your information for no longer than necessary
                        for the purposes for which it is processed. The length
                        of time for which we retain information depends on the
                        purposes for which we collected and use it and/or as
                        required to comply with applicable laws.
                      </p>
                      <h2 className="title mt--150">
                        HOW WE PROTECT YOUR INFORMATION
                      </h2>
                      <p className="text-justify description">
                        MethodMelody takes technical and organizational security
                        measures to protect the information provided via the
                        Services from loss, misuse, and unauthorized access,
                        disclosure, alteration, or destruction. However, no
                        Internet or email transmission is ever fully secure or
                        error free. Please keep this in mind when disclosing any
                        information to MethodMelody via the Internet.
                      </p>
                      <h2 className="title mt--150">
                        THIRD PARTY LINKS AND FEATURES
                      </h2>
                      <p className="text-justify description">
                        The Services contain links to third-party websites such
                        as social media sites, and also contain third-party
                        plug-ins (such as the Facebook “like” button and Twitter
                        “follow” button). If you choose to use these sites or
                        features, you may disclose your information not just to
                        those third- parties, but also to their users and the
                        public more generally depending on how their services
                        function. We are not responsible for the content or
                        practices of those websites or services. The collection,
                        use, and disclosure of your information will be subject
                        to the privacy policies of the third party websites or
                        services, and not this Privacy Policy. We urge you to
                        read the privacy and security policies of these
                        third-parties.
                      </p>
                      <h2 className="title mt--150">CHILDREN’S PRIVACY</h2>
                      <p className="text-justify description">
                        The Services are intended for general audiences and not
                        for children under the age of 13. If we become aware
                        that we have inadvertently collected “personal
                        information” (as defined by Bangladesh Children’s Online
                        Privacy Protection Act of 1998) from children under the
                        age of 13 without valid parental consent, we will take
                        reasonable steps to delete it as soon as possible. We do
                        not knowingly process data of any residents of any
                        country under the age of 13 without parental consent. If
                        we become aware that we have collected data from
                        Bangladeshi resident under the age of 13 without
                        parental consent, we will take reasonable steps to
                        delete it as soon as possible. We also comply with other
                        age restrictions and requirements in accordance with
                        applicable local laws.
                      </p>
                      <h2 className="title mt--150">
                        DATA SUBJECT RIGHTS AND CHOICES
                      </h2>
                      <p className="text-justify description">
                        Depending on your jurisdiction of residence, you may
                        have certain rights with respect to your information as
                        further described in this section.
                      </p>
                      <h4 className="description text-justify font-weight-bold mt--50">
                        Your Legal Rights
                      </h4>
                      <p className="description text-justify">
                        If you would like further information in relation to
                        your legal rights under applicable law or would like to
                        exercise any of them, please contact us using the
                        information in the “Contact Information” section below
                        at any time. Your local laws (e.g., in the EU) may
                        permit you to request that we:
                      </p>
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="about-us-list">
                            <p className="description">
                              <StopOutlinedIcon fontSize="small" />
                              Provide access to and/or a copy of certain
                              information we hold about you
                            </p>
                            <p className="description">
                              <StopOutlinedIcon fontSize="small" />
                              prevent the processing of your information for
                              direct-marketing purposes (including any direct
                              marketing processing based on profiling)
                            </p>
                            <p className="description">
                              <StopOutlinedIcon fontSize="small" />
                              update information which is out of date or
                              incorrect
                            </p>
                            <p className="description">
                              <StopOutlinedIcon fontSize="small" />
                              delete certain information which we are holding
                              about you
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="about-us-list">
                            <p className="description">
                              <StopOutlinedIcon fontSize="small" />
                              restrict the way that we process and disclose
                              certain of your information
                            </p>
                            <p className="description">
                              <StopOutlinedIcon fontSize="small" />
                              transfer your information to a third party
                              provider of services
                            </p>
                            <p className="description">
                              <StopOutlinedIcon fontSize="small" />
                              revoke your consent for the processing of your
                              information
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <p className="description text-justify mt--50">
                            We will consider all requests and provide our
                            response within the time period stated by applicable
                            law. Please note, however, that certain information
                            may be exempt from such requests in some
                            circumstances, which may include if we need to keep
                            processing your information for our legitimate
                            interests or to comply with a legal obligation. We
                            may request you provide us with information
                            necessary to confirm your identity before responding
                            to your request.
                          </p>
                          <h4 className="description text-justify font-weight-bold mt--50">
                            Marketing Communications and Sharing
                          </h4>
                          <p className="description text-justify">
                            You may instruct us not to use your contact
                            information to contact you by email, postal mail, or
                            phone regarding products, services, promotions and
                            special events that might appeal to your interests
                            by contacting us using the information below. In
                            commercial email messages, you can also opt out by
                            following the instructions located at the bottom of
                            such emails. Please note that, regardless of your
                            request, we may still use and share certain
                            information as permitted by applicable law. For
                            example, you may not opt out of certain operational
                            emails, such as those reflecting our relationship or
                            transactions with you, or important notifications
                            regarding classes in which you are enrolled.
                          </p>
                          <h2 className="title mt--150">
                            LEGAL BASES FOR USE OF YOUR INFORMATION
                          </h2>
                          <p className="text-justify description">
                            The legal bases for using your information as set
                            out in this Privacy Policy are as follows: Where use
                            of your information is necessary to perform our
                            obligations under a contract with you (for example,
                            to comply with: the terms of service of our websites
                            which you accept by browsing the
                            websites/registering; and/or our contract to provide
                            our Services to you); Where use of your information
                            is necessary for our legitimate interests or the
                            legitimate interests of others (for example, to
                            provide security for our website and applications;
                            operate our business and our Services; make and
                            receive payments; comply with legal requirements and
                            defend our legal rights; prevent fraud and to know
                            the customer to whom we are providing Services);
                            Where we are required to process information in
                            accordance with an EU Member State legal obligation;
                            or Where we have your consent, in accordance with
                            applicable law.
                          </p>{" "}
                          <h2 className="title mt--150">
                            CHANGES TO OUR PRIVACY POLICY
                          </h2>
                          <p className="text-justify description">
                            We reserve the right to amend this Privacy Policy at
                            any time to reflect changes in the law, our data
                            collection and use practices, the features of our
                            Services, or advances in technology. We will make
                            the revised Privacy Policy accessible through the
                            Services, so you should review the Privacy Policy
                            periodically. You can know if the Privacy Policy has
                            changed since the last time you reviewed it by
                            checking the “Date of Last Revision" included at the
                            beginning of the document. If we make a material
                            change to the Policy, you will be provided with
                            appropriate notice in accordance with legal
                            requirements. By continuing to use the Services, you
                            are confirming that you have read and understood the
                            latest version of this Privacy Policy.
                          </p>
                          <h2 className="title mt--150">CONTACT INFORMATION</h2>
                          <p className="text-justify description">
                            Please feel free to contact us if you have any
                            questions about MethodMelody' Privacy Policy or the
                            information practices of the Services. You may
                            contact us as follows: 538, Solmaid Dhalibari,
                            Bhatara, Gulshan, Dhaka-1212
                            <a> support@MethodMelody.com</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About Area  */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <Footer />
      </React.Fragment>
    );
  }
}
export default Privacy;
