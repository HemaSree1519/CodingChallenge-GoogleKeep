import React from 'react'
import {shallow} from 'enzyme'
import WriteNote from "../components/WriteNote";

describe('WriteNotes test', () => {
    const props = {
        writingNoteTitle: "",
        writingNoteContent: "",
    };
    const wrapper = shallow(<WriteNote childProps={props}/>);
    it('should render 1 <Card />', () => {
        expect(wrapper.find('Card').length).toEqual(1);
    });
    it('should render 2 <Input />', () => {
        expect(wrapper.find('Input').length).toEqual(2);
    });
    it('should render 1 <div/>', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });
    it('should render 1 <Button />', () => {
        expect(wrapper.find('Button').length).toEqual(1);
    });


});