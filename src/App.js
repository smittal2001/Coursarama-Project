import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import Page1 from "./components/page1.component";
import Page2 from "./components/page2.component";
import Page3 from "./components/page3.component";
import LandingPage from "./components/landingpage.component";

//functions can only return a single jsx element such as a single div 
function App() {
  return (
    
   <div className = "container">
     <Router>
      <Navbar />
      <br/>
      <Route exact path = "/"  component={LandingPage} />
      <Route path = "/home/page1"  component={Page1} />
      <Route path = "/home/page2"  component={Page2} />
      <Route path = "/home/page3"  component={Page3} />
     </Router>
    
   </div>
  );
}


export default App;
