// React Required
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Brand from "./blocks/Brand";
import Columns from "./blocks/Columns";
import ContactForm from "./blocks/ContactForm";
import Counters from "./blocks/Counters";
import Gallery from "./blocks/Gallery";
import GoogleMap from "./blocks/GoogleMap";
import Portfolio from "./blocks/Portfolio";
import PricingTable from "./blocks/PricingTable";
import ProgressBar from "./blocks/ProgressBar";
// Blocks Layout
import Team from "./blocks/Team";
import Testimonial from "./blocks/Testimonial";
import VideoPopup from "./blocks/VideoPopup";
// Dark Home Layout
import DarkMainDemo from "./dark/MainDemo";
import DarkPortfolioLanding from "./dark/PortfolioLanding";
import About from "./elements/About";
import BlogDetails from "./elements/BlogDetails";
import Contact from "./elements/Contact";
import error404 from "./elements/error404";
import PortfolioDetails from "./elements/PortfolioDetails";
// Element Layout
import Service from "./elements/Service";
import ServiceDetails from "./elements/ServiceDetails";
import Business from "./home/Business";
import CorporateBusiness from "./home/CorporateBusiness";
import CreativeAgency from "./home/CreativeAgency";
import CreativeLanding from "./home/CreativeLanding";
import CreativePortfolio from "./home/CreativePortfolio";
import DesignerPortfolio from "./home/DesignerPortfolio";
import DigitalAgency from "./home/DigitalAgency";
import HomeParticles from "./home/HomeParticles";
import HomePortfolio from "./home/HomePortfolio";
import InteriorLanding from "./home/Interior";
// Home layout
import MainDemo from "./home/MainDemo";
import Paralax from "./home/Paralax";
import PersonalPortfolio from "./home/PersonalPortfolio";
import PortfolioLanding from "./home/PortfolioLanding";
import Startup from "./home/Startup";
import StudioAgency from "./home/StudioAgency";
// Create Import File
import "./index.scss";
import AddCourse from "./LMS/component/AddCourse.jsx";
import AddInstructor from "./LMS/component/AddInstructor.jsx";
import Admin from "./LMS/component/Admin.jsx";
import AdminCourseList from "./LMS/component/AdminCourseList.jsx";
import AdminInstructorList from "./LMS/component/AdminInstructorList.jsx";
import AdminMessages from "./LMS/component/AdminMessages.jsx";
import AdminUserList from "./LMS/component/AdminUserList.jsx";
import ComingSoon from "./LMS/component/ComingSoonPage.jsx";
import CourseList from "./LMS/component/CourseList";
import CourseView from "./LMS/component/CourseView";
import CreateAccount from "./LMS/component/CreateAccount.jsx";
import AllInstructors from "./LMS/component/elements/AllInstructors.jsx";
import Blog from "./LMS/component/elements/Blog.jsx";
import InstructorView from "./LMS/component/elements/blog/InstructorView.jsx";
import CartPage from "./LMS/component/elements/CartPage.jsx";
import InstructorPanel from "./LMS/component/elements/InstructorPanel.jsx";
import StudentPanel from "./LMS/component/elements/StudentPanel";
// Coustom Components
import Login from "./LMS/component/Login";
import Privacy from "./LMS/component/Privacy.jsx";
import Signup from "./LMS/component/Signup";
import Terms from "./LMS/component/Terms.jsx";
import UpdateCourse from "./LMS/component/UpdateCourse.jsx";
import UpdateInstructor from "./LMS/component/UpdateInstructor.jsx";
import UpdateLesson from "./LMS/component/UpdateLesson.jsx";
import ViewUserProfile from "./LMS/component/ViewUserProfile.jsx";
// Common Layout
// import Layout from "./component/common/App";
// My Home Layout
import Landing from "./LMS/Landing";
import {
  ProtectedAdminRoute,
  ProtectedInstructorRoute,
  ProtectedStudentRoute,
} from "./LMS/routes/protected.route";
import * as serviceWorker from "./serviceWorker";
import { store } from "./store";

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={Landing}
          />
          {/*           <Route
            exact
            path={`${process.env.PUBLIC_URL}/landing`}
            component={Landing}
          /> */}
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/main-demo`}
            component={MainDemo}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/dark-main-demo`}
            component={DarkMainDemo}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/startup`}
            component={Startup}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/paralax`}
            component={Paralax}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/digital-agency`}
            component={DigitalAgency}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/creative-agency`}
            component={CreativeAgency}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/personal-portfolio`}
            component={PersonalPortfolio}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/studio-agency`}
            component={StudioAgency}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/business`}
            component={Business}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/portfolio-home`}
            component={HomePortfolio}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/portfolio-landing`}
            component={PortfolioLanding}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/creative-landing`}
            component={CreativeLanding}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/home-particles`}
            component={HomeParticles}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/dark-portfolio-landing`}
            component={DarkPortfolioLanding}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/designer-portfolio`}
            component={DesignerPortfolio}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/creative-portfolio`}
            component={CreativePortfolio}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/interior-landing`}
            component={InteriorLanding}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/corporate-business`}
            component={CorporateBusiness}
          />
          {/* Element Layot */}
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/service`}
            component={Service}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/service-details`}
            component={ServiceDetails}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/contact`}
            component={Contact}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/about`}
            component={About}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/terms`}
            component={Terms}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/privacy`}
            component={Privacy}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/portfolio-details`}
            component={PortfolioDetails}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/allcourses`}
            component={Blog}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/instructorlist`}
            component={AllInstructors}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/instructorview`}
            component={InstructorView}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog-details`}
            component={BlogDetails}
          />
          {/* Blocks Elements  */}
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/team`}
            component={Team}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/counters`}
            component={Counters}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/testimonial`}
            component={Testimonial}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/portfolio`}
            component={Portfolio}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/video-popup`}
            component={VideoPopup}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/gallery`}
            component={Gallery}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/clint-logo`}
            component={Brand}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/progressbar`}
            component={ProgressBar}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/contact-form`}
            component={ContactForm}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/google-map`}
            component={GoogleMap}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/columns`}
            component={Columns}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/pricing-table`}
            component={PricingTable}
          />
          {/* Custom Routes */}
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/login`}
            component={Login}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/signup`}
            component={Signup}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/signup/:refercode`}
            component={Signup}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/courses`}
            component={CourseList}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/courseview`}
            component={CourseView}
          />
          <ProtectedAdminRoute
            exact
            path={`${process.env.PUBLIC_URL}/admin`}
            component={Admin}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/addcourse`}
            component={AddCourse}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/updatecourse`}
            component={UpdateCourse}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/updateinstructor`}
            component={UpdateInstructor}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/updatelesson`}
            component={UpdateLesson}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/addinstructor`}
            component={AddInstructor}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/createaccount`}
            component={CreateAccount}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/admincourselist`}
            component={AdminCourseList}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/admininstructorlist`}
            component={AdminInstructorList}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/adminuserlist`}
            component={AdminUserList}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/adminmessages`}
            component={AdminMessages}
          />
          <ProtectedStudentRoute
            exact
            path={`${process.env.PUBLIC_URL}/studentpanel`}
            component={StudentPanel}
          />
          <ProtectedInstructorRoute
            exact
            path={`${process.env.PUBLIC_URL}/instructorpanel`}
            component={InstructorPanel}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/cart`}
            component={CartPage}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/viewuser`}
            component={ViewUserProfile}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/comingsoon`}
            component={ComingSoon}
          />
          <Route path={`${process.env.PUBLIC_URL}/404`} component={error404} />
          <Route component={error404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.register();
