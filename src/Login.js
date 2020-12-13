import React from 'react';

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {value: '', users: {}};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getUser() {
        fetch("http://localhost:8080/users?email=" + this.state.value)
        .then( res => res.json())
        .then((userData) => {
            this.setState({users: userData});
            console.log(userData);
        });
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        var email = "";
        email = this.state.value;
        console.log(email);
        event.preventDefault();
        this.getUser();
      }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Email:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }

}
export default Login;