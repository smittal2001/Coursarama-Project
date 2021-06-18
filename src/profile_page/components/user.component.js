import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class user extends Component {
    state = {
        // TODO: take these state values from database
        name: "User_Name",
        email: "test@email.com",
        university: "TAMU",
        year: "Junior"
    };

    render() {
        return (
            <>
            <h2>Hey {this.state.name} </h2>
            <div>
            <ul>
                <li>
                    {this.state.name}
                </li>
                <li>
                    {this.state.email}
                </li>
                <li>
                    {this.state.year}
                </li>
                <li>
                    {this.state.university}
                </li>
                    </ul>

            </div>
            </>
        );
    }

}
