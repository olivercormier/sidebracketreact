import React from 'react';
import {Redirect} from 'react-router-dom';

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {redirect: null, value: '', userLogin: [], 
        loginHandler: this.props.loginHandler};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.redirectToHome = this.redirectToHome.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.submitCredentials = this.submitCredentials.bind(this);
    }

    setEmail(event) {
      this.setState({email: event.target.value});
    }

    setPassword(event) {
      this.setState({password: event.target.value});
    }

    submitCredentials(_event) {
      this.state.loginHandler(this.state.email, this.state.password);
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
          <form>
            <h1>Login</h1>
            <input type="text" value={this.state.email} onChange={this.setEmail} placeholder="Enter Email"/> <br />
            <input type="password" value={this.state.password} onChange={this.setPassword} placeholder="Enter Password"/> <br />
            <button onClick={this.submitCredentials}>Login</button>
          </form>
        );
      }
    }

}
export default Login;