import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class LoginPage extends Component {
    render() {
        return (
            <div>
                <div>
            <h3>Login</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>Username: </label>
                <input  type="text"
                    required
                    className="form-control"
                    // value={}
                    // onChange={}
                    />
              </div>
              <br></br>
              <div className="form-group"> 
                <label>Password: </label>
                <input  type="password"
                    required
                    className="form-control"
                    // value={}
                    // onChange={}
                    />
              </div>
              <br></br>
              
              <div className="form-group">
                <input type="submit" value="Login" className="btn btn-primary" />
              </div>
            </form>
            </div>
        
            <br></br>

            <div>
            <h3>Create Account</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>Username: </label>
                <input  type="text"
                    required
                    className="form-control"
                    // value={}
                    // onChange={}
                    />
              </div>
              <br></br>
              <div className="form-group"> 
                <label>Password: </label>
                <input  type="password"
                    required
                    className="form-control"
                    // value={}
                    // onChange={}
                    />
              </div>
              <br></br>
              
              <div className="form-group">
                <input type="submit" value="Create Account" className="btn btn-primary" />
              </div>
            </form>
            </div>
          </div>
        );
    }
}