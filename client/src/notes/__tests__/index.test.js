import React from 'react'
import {shallow} from 'enzyme'
import WriteNote from "../components/WriteNote";
import Index from '../index'


describe('notes', () => {
    const wrapper = shallow(<Index/>);
    it('should render 2 <div />', () => {
        expect(wrapper.find('div').length).toEqual(3);
    });
    it('should render 1 <Input />', () => {

        expect(wrapper.find('Input').length).toEqual(1);
    });
    it('should render <WriteNote />', () => {
        let input = wrapper.find('Input').at(0);
        input.simulate('click');
        expect(wrapper.state().isWritingNote).toEqual(true);
        expect(wrapper.find('WriteNote').length).toEqual(1);
    });
    it('should render a message when no notes to display', () => {

        expect(wrapper.find('i').length).toEqual(1);

    });
    it('should render list of notes if has', () => {
        const note = {
            "email": 'test@gmail.com',
            "title": 'test title',
            "content": 'test content',
            "createdAt": new Date(),
            "updatedAt": new Date()
        };
        let temp=[];
        temp.push(note);
        wrapper.setState({notes : temp});
        expect(wrapper.find('CardColumns').length).toEqual(1);
        expect(wrapper.find('Note').length).toEqual(1);
    });
});