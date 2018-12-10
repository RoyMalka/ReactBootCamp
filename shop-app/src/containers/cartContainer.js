import React from 'react';
import CartItems from '../components/Cart/components/cartItems';
import cartService from '../services/cartService';

class CartContainer extends React.Component {
  state = {
    cartItems: null,
  };
  mounted = false;

  componentDidMount() {
    this.mounted = true;
    cartService.loadCartItems()
    .then(cartItems => this.mounted ? this.setState({cartItems}) : null);
  }
  

  componentWillUnmount() {
    this.mounted = false;
  }

  deleteFromCart = (id) => {
      const cartItems = cartService.deleteFromCart(id);
      this.setState({cartItems});
  }


render() {
    const {cartItems} = this.state;
    // console.log(cartItems);
    return (
      <div className="cart">
        {cartItems ? (
          <React.Fragment>
            <CartItems deleteFromCart={this.deleteFromCart} cartItems={cartItems} />
          </React.Fragment>
        ) : (
          <span>Loading..</span>
        )}       
      </div>
    );
  }
}

export default CartContainer;
