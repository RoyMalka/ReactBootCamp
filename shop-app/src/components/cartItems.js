import React from 'react';
import CartItem from '../components/cartItem';
// import ProductItem from './productItem';

class CartItems extends React.Component {
    deleteFromCart = (id) => {
        this.props.deleteFromCart(id);
    }
    render() {
        return(
        <div className="cartItems">
            <h1>My Cart</h1>
                <ul className="cart-list">
                    { this.props.cartItems.map((item) => 
                            <CartItem deleteFromCart={this.deleteFromCart} key={item.id} item={item} />                        
                        ) }
                </ul>
        </div>
        );
    }
}

export default CartItems;
