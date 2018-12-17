import React from 'react';
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
import {connect} from 'react-redux';
import {login} from './actions';

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


const App  = ({isLoggedIn, login})=> (
      <div className="App">    
      <Router>
          <React.Fragment>
          <I18nextProvider i18n={i18next}>
            <NavBar login={login} isLoggedIn={isLoggedIn}/>
          </I18nextProvider>
          <div className="container">
              <Switch>          
                <Route exact path="/" component={Home}  />  
                <Route component={About} path="/about" />  
                <Route exact component={() => <ProductListPage isLoggedIn={isLoggedIn} />  } path="/products" />
                <Route component={CartPage} path="/cart" /> 
                <Route component={Contact} path="/contact" /> 
                <Route component={(props) => <ProductItemPage {...props} isLoggedIn={isLoggedIn} />} path="/products/:id" />              
              </Switch>
              </div>
          </React.Fragment>
      </Router>
      </div>
  );


  const mapStateToProps = state => ({
    isLoggedIn: state.app.isLoggedIn
  });
  
  const mapDispatchToProps = (dispatch) => ({
      login: () => dispatch(login()),
  });
  
  export default connect(mapStateToProps,mapDispatchToProps)(App);
