import React from 'react'
import {shallow} from 'enzyme'
import WriteNote from "../components/WriteNote";
import Index from '../index'


describe('notes', () => {
    const wrapper = shallow(<Index/>);
    it('should render 2 <div />', () => {
        expect(wrapper.find('div').length).toEqual(2);
    });
    it('should render 1 <Input />', () => {

        expect(wrapper.find('Input').length).toEqual(1);
    });
    it('should render <WriteNote />', ()=>{
        let input = wrapper.find('Input').at(0);
        input.simulate('click');
        expect(wrapper.state().isWritingNote).toEqual(true);
        expect(wrapper.find('WriteNote').length).toEqual(1);
    })
});