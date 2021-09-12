import React, { Component } from 'react';
import axios from 'axios';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail= this.onChangeEmail.bind(this);
    this.onChangeUni = this.onChangeUni.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        username: '',
        email: '',
        university: '',
        year: '',
        password: ''
    };
}

onChangeUsername(e)
{
    this.setState({
        username: e.target.value
    });
}

onChangeEmail(e)
{
    this.setState({
        email: e.target.value
    });
}

onChangeUni(e)
{
    this.setState({
        university: e.target.value
    });
}

onChangeYear(e)
{
    this.setState({
        year: e.target.value
    });
}

onChangePassword(e) 
{
    this.setState({
        password: e.target.value
    });
}

onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      email: this.state.email,
      university: this.state.university,
      year: this.state.year,
      password: this.state.password
    }

    console.log(user);
    axios.post('https://coursarama-backend.herokuapp.com/users/add', user)
        .then(res => console.log(res.data));

   
  }


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
                   value={this.state.username}
                  onChange={this.onChangeUsername}
                  />
            </div>
            <br></br>
            <div className="form-group"> 
              <label>Password: </label>
              <input  type="password"
                  required
                  className="form-control"
                   value={this.state.password}
                   onChange={this.onChangePassword}
                  />
            </div>
            <br></br>
            <div className="form-group"> 
              <label>Email: </label>
              <input  type="email"
                  required
                  className="form-control"
                   value={this.state.email}
                   onChange={this.onChangeEmail}
                  />
            </div>
            <br></br>
            <div className="form-group"> 
              <label>University: </label>
              <input  type="text"
                  required
                  className="form-control"
                   value={this.state.university}
                  onChange={this.onChangeUni}
                  />
            </div>
            <br></br>
            <div className="form-group"> 
              <label>Year: </label>
              <input  type="text"
                  required
                  className="form-control"
                   value={this.state.year}
                  onChange={this.onChangeYear}
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