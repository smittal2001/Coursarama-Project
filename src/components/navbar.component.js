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
                            <Link to="/page1" className="nav-link"> Page 1</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/page2" className="nav-link"> Page 2</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/page3" className="nav-link"> Page 3</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}