import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar';
import About from './components/about';
import ProductListPage from './pages/productsListPage';
import CartPage from './pages/cartPage';
import Home from './components/home';
import ProductItemPage from './pages/productItemPage';
import Contact from './components/contact';


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
          <NavBar login={this.login} isLoggedIn={this.state.isLoggedIn}/>
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
        
        {/* <CartPage /> */}
       
          {/* <ProductItem /> */}
          {/* <About /> */}
         {/*  <ProductListPage /> */}
        
      </div>
    );
  }
}

export default App;
