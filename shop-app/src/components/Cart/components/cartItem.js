import React from 'react';

class CartItem extends React.Component {
    deleteFromCart = (id) => {
        this.props.deleteFromCart(id);
    }
    render() {
        return (
        <li>
            {this.props.item.product.title}, Number: {this.props.item.number}
            <a className="btn-delete" onClick={()=>this.deleteFromCart(this.props.item.id)}>X</a>
        </li>                                        
        );
    }
}

export default CartItem;
