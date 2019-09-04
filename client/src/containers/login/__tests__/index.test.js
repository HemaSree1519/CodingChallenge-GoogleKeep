import React from 'react'
import {shallow} from 'enzyme'
import Index from "../../login";

describe('Login',()=>{
    const wrapper = shallow(<Index/>);
   it('should render a login form',()=>{
       expect(wrapper.find('Form').length).toEqual(1);
   })
});