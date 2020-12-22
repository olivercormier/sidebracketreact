import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main.js';
import Navigation from './Navigation.js';
import Login from './Login.js';

class App extends React.Component {

  constructor(props) {
    super(props);

    if (this.getCookie("isAuthenticated") !== "") {
      this.state = {authenticated: true, email: "", password: ""};
    } else {
      this.state = {authenticated: false, email: "", password: ""};
    }

    this.isLoggedIn = this.isLoggedIn.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  isLoggedIn() {
    return this.state.authenticated;
  }

  login(email, password) {
    fetch("http://localhost:8080/login?email=" + email + "&password=" + password)
      .then((res) => {
        if (res.status === 200) {
          this.setState({authenticated: true});
          this.setCookie("isAuthenticated", true, 1);
        } else {
          this.setState({authenticated: false});
        }
      }).catch(console.log)
  }

  logout() {
    this.setState({authenticated: false});
    this.setCookie("isAuthenticated", true, -1);
  }

  setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  render() {
    if (this.isLoggedIn()) {
      return(
        <BrowserRouter>
          <div className= 'app'>
           <Navigation logoutHandler = {this.logout} />
           <Main />
          </div>
        </BrowserRouter>
      );
    } else {
      return(
      <div className= 'app'>
        <Login loginHandler = {this.login} />
      </div>);
    }
    }

}
export default App;
