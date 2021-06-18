

import {BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileBar from "./components/profilebar.component";
import User from "./components/user.component";

function ProfilePage() {
    return (
    <>

     <div className = "container">
         <ProfileBar/>
     </div>
     <div className="container">
         <User/>
         </div>
    </>
    );
  }


  export default ProfilePage;
