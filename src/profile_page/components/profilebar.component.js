import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class ProfileBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to=" " className="navbar-brand"> Profile </Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="" className="nav-link"> Profile Settings </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="" className="nav-link"> My reviews </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="" className="nav-link"> My Courses</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="" className="nav-link"> Idk yet </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
