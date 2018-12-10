import React from 'react';
// import {NavLink} from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <ul className="footer">
                    <li><a className="active" href="#home">Home</a></li>
                    <li><a href="#news">About</a></li>
                    <li><a href="#contact">Products</a></li>
                </ul>
            </div>
        );
    }
}