import React from 'react'
import {shallow} from 'enzyme'
import WriteNote from "../components/WriteNote";

describe('WriteNotes test', () => {
    let props;
    let wrapper;
    beforeEach(() => {
        props = {
            writingNoteTitle: '',
            writingNoteContent: '',
            onCloseNewNote: jest.fn(),
            onWriteNoteContent: jest.fn(),
            onWriteNoteTitle: jest.fn(),
        };
        wrapper = shallow(<WriteNote childProps={props}/>);
    });
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
    it("should call title writing function when value changed", () => {
        wrapper.find('Input[name="title"]').simulate('change', {value: 'title'});
        expect(props.onWriteNoteTitle).toHaveBeenCalledTimes(1);
    });
    it("should call content writing function when value changed", () => {
        wrapper.find('Input[name="content"]').simulate('change', {value: 'content'});
        expect(props.onWriteNoteContent).toHaveBeenCalledTimes(1);
    });
    it("should call close function upon close button pressed", () => {
        wrapper.find('Button[name="close"]').simulate('click');
        expect(props.onCloseNewNote).toHaveBeenCalledTimes(1);
    });

});