import React from 'react';
import ProductList from '../components/Products/components/productList';
import productService from '../services/productsService';

class ProductListContainer extends React.Component {
    state = {
        products: null,
      };
      mounted = false;
      
      componentDidMount() {
        this.mounted = true;
        productService.loadProducts()
          .then(products => this.mounted ? this.setState({products}) : null);
      }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const {products} = this.state;
    return (
      <div className="ProductsList">
        {products ? (
          <React.Fragment>
            <ProductList isLoggedIn={this.props.isLoggedIn} products={products} />
          </React.Fragment>
        ) : (
          <span>Loading..</span>
        )}       
      </div>
    );
  }
}

export default ProductListContainer;
