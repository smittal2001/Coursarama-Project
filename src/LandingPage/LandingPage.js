import {BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import MakeReviewButton from "./components/makeReview.component"
import SignUp from "./components/signUp.component"
import Search from "./components/searchBar.component"
import Review from "./components/mostReviewed.component"
//import LandingPage from "./components/landingpage.component";


//functions can only return a single jsx element such as a single div 
function LandingPage() {
  return (
   <div className = "container">
      <SignUp/>
      <Search/>
      <MakeReviewButton/>
      <Review/>
   </div>
  );
}


export default LandingPage;
