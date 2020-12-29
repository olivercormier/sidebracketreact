import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {logoutHandler: this.props.logoutHandler};
    }

    // Navigation bar which is then loaded on each page through App.js.
    // Uses logoutHandler for logout button.
    render() {
        return(
        <nav id="Navigation">
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/tournaments'>Tournaments</NavLink>
                </li>
                <li>
                    <NavLink to='/tournaments/add'>Add Tournament</NavLink>
                </li> 
                <button id="logoutbutton" onClick={this.state.logoutHandler}>Logout</button>
            </ul>
        </nav>
        );}
}
export default Navigation;