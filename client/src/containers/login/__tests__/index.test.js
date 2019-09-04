import React from 'react'
import {shallow} from 'enzyme'
import Index from "../../login";

describe('Login',()=>{
    const wrapper = shallow(<Index/>);
   it('should render a login form',()=>{
       expect(wrapper.find('Form').length).toEqual(1);
       expect(wrapper.find('Col').length).toEqual(2);
       expect(wrapper.find('Input').length).toEqual(2);
       expect(wrapper.find('FormGroup').length).toEqual(2);
       expect(wrapper.find('Button').length).toEqual(1);
   })
});