import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/components/navbar';
import About from './components/General/components/about';
import ProductListPage from './scenes/Products/components/productsListPage';
import CartPage from './scenes/Cart/components/cartPage';
import Home from './components/Home/components/home';
import ProductItemPage from './scenes/Products/components/productItemPage';
import Contact from './components/General/components/contact';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import navbar_en from "./translations/en/navbar.json";
import navbar_he from "./translations/he/navbar.json";

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'en',                              // language to use
    resources: {
        en: {
            navbar: navbar_en               // 'common' is our custom namespace
        },
        he: {
            navbar: navbar_he
        },
    },
});


class App extends Component {
  state = {
    isLoggedIn: false,
  };

  login = () => {
    this.setState({isLoggedIn: true});
  }
  render() {
    return (
      <div className="App">    
      <Router>
          <React.Fragment>
          <I18nextProvider i18n={i18next}>
            <NavBar login={this.login} isLoggedIn={this.state.isLoggedIn}/>
          </I18nextProvider>
          <div className="container">
              <Switch>          
                {/* <Route exec render={() => (<Redirect to="/about" />)} path="/" />   */}
                <Route exact path="/" component={Home}  />  
                <Route component={About} path="/about" />  
                <Route exact component={() => <ProductListPage isLoggedIn={this.state.isLoggedIn} />  } path="/products" />
                <Route component={CartPage} path="/cart" /> 
                <Route component={Contact} path="/contact" /> 
                <Route component={(props) => <ProductItemPage {...props} isLoggedIn={this.state.isLoggedIn} />} path="/products/:id" />              
              </Switch>
              </div>
          </React.Fragment>
      </Router>
      </div>
    );
  }
}

export default App;
