import React, {Component} from 'react';


export default class user extends Component {
    


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
