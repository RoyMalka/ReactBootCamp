import React from 'react';
import ProductItem from './productItem';

const ProductList = ({products,isLoggedIn}) => (
    <div className="productlist">
     
        { products.map(product => 
                <ProductItem 
                    product={product}                       
                    key={product.id}  
                    isLoggedIn={isLoggedIn} 
                    shouldRenderLink={true}        
                    />
            ) }
    </div>
);

export default ProductList;
