import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg rounded shadow p-3 mb-5">
                {/* <Link to="/page1 " className="navbar-brand"> Page 1</Link> */}
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/home" className="nav-link"> Home </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/page1" className="nav-link"> Create Review </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/page2" className="nav-link"> Add Course </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/page3" className="nav-link"> Add School </Link>
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
