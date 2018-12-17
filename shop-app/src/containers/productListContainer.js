import React from 'react';
import ProductList from '../components/Products/components/productList';
import {loadProducts} from '../actions';
import {connect} from 'react-redux';

class ProductListContainer extends React.Component {   
  componentDidMount() {
    this.props.loadProducts();      
  }
  render() {
    return (
      <div className="ProductsList">
        {this.props.isLoading ? (
          <span>Loading..</span>
        ) : (
          <React.Fragment>
            <ProductList isLoggedIn={this.props.isLoggedIn} products={this.props.products} />
          </React.Fragment>
        )}       
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.products.isLoading,
  products: state.products.products
});

const mapDispatchToProps = (dispatch) => ({
    loadProducts: () => dispatch(loadProducts())
});

export default connect(mapStateToProps,mapDispatchToProps)(ProductListContainer);
