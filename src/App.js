import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import HomePage from "./components/homepage.component"
import Page1 from "./components/page1.component";
import Page2 from "./components/page2.component";
import Page3 from "./components/page3.component";
import LandingPage from "./components/landingpage.component";
import LoginPage from "./components/loginpage.component";
import Profile from "./profile_page/ProfilePage";


//functions can only return a single jsx element such as a single div
function App() {
  return (

   <div className = "container">
     
     <Router>
     <Navbar/>

      <Route exact path = "/"  component={LandingPage} />
      <Route path = "/home" component={HomePage} />
      <Route path = "/Profile" component={Profile} />
      <Route path = "/page1"  component={Page1} />
      <Route path = "/page2"  component={Page2} />
      <Route path = "/page3"> <Page3 coursename = "Intro to python" details = "Blow off Class"/> </Route>
      <Route path = "/login"  component={LoginPage} />
     </Router>

   </div>
  );
}


export default App;
