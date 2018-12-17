import React from 'react';
import Header from './header';
import {NavLink} from 'react-router-dom';
import { translate } from 'react-i18next';


class NavBar extends React.Component {

    componentWillMount(){

    }
    login = () => {
        this.props.login();
    }
    renderCart = () => {
        if(this.props.isLoggedIn) {           
            return  <li className="right"><NavLink to="/cart">{ this.props.t('navbar.cart', { framework: "react-i18next" }) }</NavLink></li>
        }
        return <li className="right"><a onClick={this.login}>{ this.props.t('navbar.login', { framework: "react-i18next" }) }</a></li>
    } 

    render() {
        const { t, i18n } = this.props;
        return (
            <div className="navbar">
                <Header />
                <ul className="topnav">
                    <li><NavLink exact to="/">{ this.props.t('navbar.home', { framework: "react-i18next" }) }</NavLink></li>
                    <li><NavLink to="/about">{ this.props.t('navbar.about', { framework: "react-i18next" }) }</NavLink></li>
                    <li><NavLink to="/products">{ this.props.t('navbar.products', { framework: "react-i18next" }) }</NavLink></li>
                    <li>
                        <NavLink to="/contact">{ this.props.t('navbar.contact', { framework: "react-i18next" }) }</NavLink></li>                   
                    <li className="right">
                        <a onClick={() => i18n.changeLanguage('en')}>
                            <img width="30"
                                 src="http://rcdecals.com/Images/american_flag_decal_3_by_5_bumper_sticker.jpg" />
                        </a>
                    </li>
                    <li className="right">
                        <a onClick={() => i18n.changeLanguage('he')}>
                            <img width="30"
                                 src="data:image/jpeg;base64,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" />
                        </a>
                    </li>                   
                    {this.renderCart()}                                     
                </ul>
            </div>
        );
    }
}

export default translate('navbar')(NavBar);