import React from 'react';
import { shallow } from 'enzyme';
import Index from '../index';
describe('Home', () => {
    const wrapper = shallow(<Index />);
    it('should render a simple formatted welcome message', () =>{
        expect(wrapper.find('div').length).toEqual(2);
        expect(wrapper.find('p').length).toEqual(1)
    })
});