import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {logoutHandler: this.props.logoutHandler};
    }

    render() {
        return(
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/tournaments'>Tournaments</NavLink>
                </li>
                <button onClick={this.state.logoutHandler}>Logout</button>
            </ul>
        </nav>
        );}
}
export default Navigation;