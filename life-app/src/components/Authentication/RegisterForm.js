import React from 'react';
import { axiosWithAuth } from './axiosWithAuth';


class RegisterForm extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('auth/register', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        this.props.history.push('/protected');
       
      
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      
      <div className="register-form">
        
        <form onSubmit={this.login}>
          <input
           
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            placeholder="Password"
          />
          <button>Register</button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;