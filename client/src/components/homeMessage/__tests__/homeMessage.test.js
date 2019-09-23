import React from 'react';
import { shallow } from 'enzyme';
import HomeMessage from '../HomeMessage';
describe('Home', () => {
    const wrapper = shallow(<HomeMessage />);
    it('should render a simple formatted welcome message', () =>{
        expect(wrapper.find('div').length).toEqual(2);
        expect(wrapper.find('p').length).toEqual(1)
    })
});