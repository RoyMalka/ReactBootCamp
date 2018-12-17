import React from 'react';
import ProductItem from '../components/Products/components/productItem';
import {loadProduct} from '../actions';
import {connect} from 'react-redux';

class ProductItemContainer extends React.Component {
  componentDidMount() {
    var {id} = this.props;
    this.props.loadProduct(id);
  }

  render() {
    return  this.props.product ? (
      <ProductItem
        product={this.props.product}
        isLoggedIn={this.props.isLoggedIn} 
      />
    ) : (
      <span>Loading..</span>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.products.isLoading,
  product: state.products.product
});

const mapDispatchToProps = (dispatch) => ({
    loadProduct: (id) => dispatch(loadProduct(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(ProductItemContainer);
