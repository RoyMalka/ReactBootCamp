import React from 'react';
import { shallow, render } from '../../enzyme';
import ProductList from '../Products/components/productList';
import productsService from '../../services/productsService';

describe("ProductList tests", () => {
    it('renders product items' ,  async () => {
        var products = await productsService.loadProducts();
        const wrapper = shallow(<ProductList products={products} isLoggedIn={false}/>);
        expect(wrapper.find('ProductItem')).toHaveLength(products.length);
    });
});
   


