import React from 'react';
import CartItems from '../components/Cart/components/cartItems';
import {deleteFromCart,getCartItems} from '../actions';
import {connect} from 'react-redux';

class CartContainer extends React.Component {

  componentDidMount() {
    this.props.getCartItems();
  }
  render() {
    return  (
      <div className="cart">
          {this.props.isLoading ? (
              <span>Loading..</span>
          ) : (         
            <React.Fragment>
              <CartItems deleteFromCart={this.props.deleteFromCart} cartItems={this.props.cartItems} />
            </React.Fragment>
          )}       
       </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.cart.isLoading,
  cartItems: state.cart.cartItems
});

const mapDispatchToProps = (dispatch) => ({
    deleteFromCart: (id) => dispatch(deleteFromCart(id)),
    getCartItems: () => dispatch(getCartItems())
});

export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);
