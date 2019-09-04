import React from 'react'
import {shallow} from 'enzyme'
import Index from "../../signup";

describe('SingUp', ()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<Index />);
    });
    it('should render signup form',()=>{
        expect(wrapper.find('Form').length).toEqual(1);
    })
});