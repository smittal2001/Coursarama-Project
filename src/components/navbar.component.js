import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                {/* <Link to="/page1 " className="navbar-brand"> Page 1</Link> */}
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/home/page1" className="nav-link"> Page 1</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/home/page2" className="nav-link"> Page 2</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/home/page3" className="nav-link"> Page 3</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/login" className="nav-link"> Login/Sign Up</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/Profile" className="nav-link"> My Profile</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
