import React from 'react';
import ProductItemContainer from '../containers/productItemContainer';

const ProductItemPage = props => (
    <React.Fragment>
        <ProductItemContainer isLoggedIn={props.isLoggedIn} id={props.match.params.id}/>
        <div className="back-btn-container">
            <a className="btn-back" onClick={() => props.history.goBack()}>Back</a>
        </div>
   </React.Fragment>
);

export default ProductItemPage;
