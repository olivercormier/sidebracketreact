import React from 'react';

class Login extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {email: "", password: "",
        loginHandler: this.props.loginHandler};

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

    // Login form which updates the state of email and password when submitted
    render() {
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
export default Login;