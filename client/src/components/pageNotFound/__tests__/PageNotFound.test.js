import React from 'react'
import {shallow} from 'enzyme'
import Index from "../PageNotFound";

describe('Login',()=>{
    let wrapper = shallow(<Index/>);
    it('should render a page not found message',()=> {
        expect(wrapper.find('div').length).toEqual(1);
        expect(wrapper.find('h3').length).toEqual(1);
    });
});