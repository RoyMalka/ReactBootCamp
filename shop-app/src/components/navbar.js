import React from 'react';
import Header from './header';
import {NavLink} from 'react-router-dom';

class NavBar extends React.Component {
    login = () => {
        this.props.login();
    }
    renderCart = () => {
        if(this.props.isLoggedIn) {           
            return  <li className="right"><NavLink to="/cart">Cart</NavLink></li>
        }
        return <li className="right"><a onClick={this.login}>Login</a></li>
    } 

    render() {
        return (
            <div className="navbar">
                <Header />
                <ul className="topnav">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/products">Products</NavLink></li>
                    <li> <NavLink to="/contact">Contacts</NavLink></li>
                    {this.renderCart()}                                      
                </ul>
            </div>
        );
    }
}

export default NavBar;