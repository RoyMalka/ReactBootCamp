import React from 'react';
import { shallow } from '../../enzyme';
import Contact from '../General/components/contact';

describe("Contact tests", () => {

    it('simple headline test' , () => {
        const wrapper = shallow(<Contact />)       
        expect(wrapper.contains(<h1>Conatct us</h1>)).toBeTruthy();
    });

    it('test contact state and inputs in controllod component' , () => {
        const wrapper = shallow(<Contact />) 
        wrapper.setState({newContact:{
            name: 'Roy Malka',
            phone: '050-7733531',
            email: 'roymal1788@gmail.com'
        }});
        
        expect(wrapper.find('input').get(0).props.value).toEqual('Roy Malka');
        expect(wrapper.find('input').get(1).props.value).toEqual('050-7733531');
        expect(wrapper.find('input').get(2).props.value).toEqual('roymal1788@gmail.com');
    });
});


