import React from 'react';
import ProductListContainer from '../../../containers/productListContainer';

const ProductListPage = (props) => (
  <ProductListContainer isLoggedIn={props.isLoggedIn}/>
);

export default ProductListPage;
