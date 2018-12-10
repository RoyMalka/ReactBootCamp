import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import About from '../components/General/components/about';
import Home from '../components/Home/components/home';
import NavBar from '../components/NavBar/components/navbar';
import Header from '../components/NavBar/components/header';
import Contact from '../components/General/components/contact'
import App from '../App'

import { Button, Welcome } from '@storybook/react/demo';

  storiesOf('About', module)
  .add('my about page', () => <About />);

  storiesOf('Home', module)
  .add('my home page', () => <Home />);

  storiesOf('Full App Story', module)
  .add('My app', () => <App />  );

  storiesOf('Contact Story', module)
  .add('contact', () => 
    <Router>
      <Contact />  
    </Router>
  );
