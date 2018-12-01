import React from 'react';
import ProductItem from '../components/productItem';
import cartService from '../services/cartService';
import productService from "../services/productService";

class ProductItemContainer extends React.Component {
  state = {
    product: null,
  };
  mounted = false;

  componentDidMount() {
    this.mounted = true;
    this.loadProduct();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.id !== prevProps.id) {
      this.loadProduct();
    }
  }

  async loadProduct() {
    const {id} = this.props;

    if (id) {
      const product = await productService.loadProduct(id);
      if (this.mounted) {
        this.setState({product});
      }
    }
   
  }

  addToCart = () => {
    cartService.addToCart(this.state.product);
  }

  render() {
    const {product} = this.state;
    // console.log("lo somthing");
    return  product ? (
      <ProductItem
        product={product}
        isLoggedIn={this.props.isLoggedIn} 
         />
    ) : (
      <span>Loading..</span>
    );
  }
}

export default ProductItemContainer;
