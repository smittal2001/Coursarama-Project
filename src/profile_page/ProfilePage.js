

import {BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileBar from "./components/profilebar.component";

function ProfilePage() {
    return (

     <div className = "container">
         <ProfileBar/>
       <Router>
        <br/>
       </Router>

     </div>
    );
  }


  export default ProfilePage;
