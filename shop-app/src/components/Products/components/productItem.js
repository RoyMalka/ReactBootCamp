import React from 'react';
import cartService from '../../../services/cartService';
import {Link} from 'react-router-dom';

class ProductItem extends React.Component {
    constructor(props) {
        super(props);
    }

    getCardClassName = () => {
        if(this.props.shouldRenderLink) {
            return "card product-item-min";
        } else {
            return "card product-item-full";
        }
    }

    getImgClassName = () => {
        if(this.props.shouldRenderLink) {
            return "card-img product-image-min";
        } else {
            return "card-img product-image-full";
        }
    }


    renderAddToCartButton = () => {
        if(this.props.isLoggedIn){
                return (
                    <a className="btn-buy"  onClick={()=> {cartService.addToCart(this.props.product)}}>Add To Cart</a>
                )
        } else {
            return (
            <p>*needs to login to add to cart</p>
            )
        }
    }
    render() {
        return (
            <div className={this.getCardClassName()} ref={this.myRef}>
              <img className={this.getImgClassName()} alt="" src={this.props.product.image} />
              <div className="card-details">
                <h4 className="card-title"><b>{this.props.product.title}</b></h4> 
                <h4 className="card-price"><b>{this.props.product.price}$</b></h4> 
              </div>
              <div className="card-container">
                <hr/>
                <p>{this.props.product.description}</p> 
                {this.renderAddToCartButton()}
                <div>
                    <br/>
                    {this.props.shouldRenderLink && <Link to={`/products/${this.props.product.id}`}>Go to product</Link>}
                </div>
              </div>            
            </div>
        );
    }
}

export default ProductItem;