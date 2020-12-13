import React from 'react';
import {Redirect} from 'react-router-dom';

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {redirect: null, value: '', userLogin: []};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.redirectToHome = this.redirectToHome.bind(this);
    }

    componentDidUpdate() {
        fetch("http://localhost:8080/users?email=" + this.state.value)
        .then( res => res.json())
        .then((loginData) => {
            this.setState({userLogin: loginData});
        }).catch(console.log)
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        //this.componentDidUpdate();
        event.preventDefault();
        var email = this.state.value;
        var userEmail = this.state.userLogin[0].email;
        if (email === userEmail) {
          this.redirectToHome();
        } else {
          //console.log(this.state.value);
          //console.log(this.state.userLogin[0].email);
        }
      }

      redirectToHome() {
        this.setState({redirect: "/"});
      }

    render() {
      if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
      } else {
        return (
          <form onSubmit={this.handleSubmit}>
            <h1>Login</h1>
            <label>
              Email:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
    }

}
export default Login;