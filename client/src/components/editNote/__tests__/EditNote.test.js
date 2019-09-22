import React from 'react'
import {shallow} from 'enzyme'
import EditNote from "../../../components/editNote/EditNote";

describe('EditNote', () => {
    let props;
    let wrapper;
    beforeEach(() => {
        props = {
            isEditingNote: true,
            editingNote: {
                "id": 2,
                "title": "test",
                "content": "Content here",
                "email": "test@gmail.com",
                "createdAt": "2019-05-12T13:20:40.735Z",
                "updatedAt": "2019-05-12T13:20:40.735Z"
            },
            editingNoteTitle: '',
            editingNoteContent: '',
            onDelete: jest.fn(),
            onUpdateNote: jest.fn(),
            onEditNoteContent: jest.fn(),
            onEditNoteTitle: jest.fn(),
        };
        wrapper = shallow(<EditNote childProps={props}/>);
    });
    it('should render an edit note modal header', () => {
        expect(wrapper.find('Modal').length).toEqual(1);
        expect(wrapper.find('ModalHeader').length).toEqual(1);
        expect(wrapper.find('Input').length).toEqual(2);
    });
    it('should render an edit note modal body',()=>{
        expect(wrapper.find('ModalBody').length).toEqual(1);
        expect(wrapper.find('div').length).toEqual(1);
        expect(wrapper.find('Label').length).toEqual(1);
    });
    it('should render an edit note modal footer',()=>{
        expect(wrapper.find('ModalFooter').length).toEqual(1);
        expect(wrapper.find('Button').length).toEqual(2);
    });
    it("should call delete function upon delete button pressed", () => {
        wrapper.find('Button[name="delete"]').simulate('click');
        expect(props.onDelete).toHaveBeenCalledTimes(1);
    });
    it("should call update function upon close button pressed", () => {
        wrapper.find('Button[name="close"]').simulate('click');
        expect(props.onUpdateNote).toHaveBeenCalledTimes(1);
    });
    it("should call title editing function when value changed", () => {
        wrapper.find('Input[name="title"]').simulate('change', {value: 'title'});
        expect(props.onEditNoteTitle).toHaveBeenCalledTimes(1);
    });
    it("should call content editing function when value changed", () => {
        wrapper.find('Input[name="content"]').simulate('change', {value: 'content'});
        expect(props.onEditNoteContent).toHaveBeenCalledTimes(1);
    });
});