import React from 'react';
import Header from './header';
import {NavLink} from 'react-router-dom';

class NavBar extends React.Component {
    login = () => {
        this.props.login();
    }
    renderCart = () => {
        if(this.props.isLoggedIn) {           
            return  <NavLink to="/cart"><li className="right">Cart</li></NavLink>
        }
        return <li className="right"><a onClick={this.login}>Login</a></li>
    } 

    render() {
        return (
            <div className="navbar">
                <Header />
                <ul className="topnav">
                    <NavLink exact to="/"><li>Home</li></NavLink>
                    <NavLink to="/about"><li>About</li></NavLink>
                    <NavLink to="/products"><li>Products</li></NavLink>
                    <NavLink to="/contact"><li>Contacts</li></NavLink>
                    {this.renderCart()}                                      
                </ul>
            </div>
        );
    }
}

export default NavBar;