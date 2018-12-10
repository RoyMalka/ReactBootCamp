import React from 'react';
import { shallow } from '../../enzyme';
import ProductItem from '../Products/components/productItem';
import productsService from '../../services/productsService';
import {Link} from 'react-router-dom';

describe("ProductItem tests", () => {
    
    it('simple title test' , async () => {
        var products = await productsService.loadProducts();
        const wrapper = shallow(<ProductItem 
            product={products[0]}                       
            key={products[0].id}  
            isLoggedIn={false} 
            shouldRenderLink={true}        
            />);

        expect(wrapper.contains(<h4 className="card-title"><b>This Peephole</b></h4>)).toBeTruthy();
    });

    it('tets login' , async () => {
        var products = await productsService.loadProducts();
        const wrapper = shallow(<ProductItem 
            product={products[0]}                       
            key={products[0].id}  
            isLoggedIn={true} 
            shouldRenderLink={true}        
            />);
            
        expect(wrapper.contains(<p>*needs to login to add to cart</p>)).toBeFalsy();
    });

    it('tets shouldRenderLink' , async () => {
        var products = await productsService.loadProducts();
        const wrapper = shallow(<ProductItem 
            product={products[0]}                       
            key={products[0].id}  
            isLoggedIn={true} 
            shouldRenderLink={true}        
            />);
        expect(wrapper.contains(<Link to="/products/_xs12cj6wf" replace={false}>
                                    Go to product
                                </Link>)).toBeTruthy();
    });
});

