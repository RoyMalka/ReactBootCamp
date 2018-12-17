import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import About from '../components/General/components/about';
import Home from '../components/Home/components/home';
import NavBar from '../components/NavBar/components/navbar';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import navbar_en from "../translations/en/navbar.json";
import navbar_he from "../translations/he/navbar.json";
import Header from '../components/NavBar/components/header';
import Contact from '../components/General/components/contact'
import App from '../App'


i18next.init({
  interpolation: { escapeValue: false },  
  lng: 'en',                              
  resources: {
      en: {
          navbar: navbar_en               
      },
      he: {
          navbar: navbar_he
      },
  },
});


  storiesOf('About', module)
  .add('my about page', () => <About />);

  storiesOf('Home', module)
  .add('my home page', () => <Home />);

  storiesOf('NavBar', module)
  .add('Not logged in', () => <Router>
                        <React.Fragment>
                          <I18nextProvider i18n={i18next}>
                            <NavBar  isLoggedIn={false}/>
                          </I18nextProvider>
                          </React.Fragment> 
                        </Router> )
  .add('Logged in', () => <Router>
                        <React.Fragment>
                          <I18nextProvider i18n={i18next}>
                            <NavBar  isLoggedIn={true}/>
                          </I18nextProvider>
                          </React.Fragment> 
                        </Router> );

  storiesOf('Contact Story', module)
  .add('contact', () => 
    <Router>
      <Contact />  
    </Router>
  );
