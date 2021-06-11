import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import App from "./app.component";


//functions can only return a single jsx element such as a single div 
function HomePage() {
  return (
    
   <div className = "container">
     <Router>
        <Route path = "/home"  component={App} />
     </Router>
    
   </div>
  );
}

export default HomePage;
