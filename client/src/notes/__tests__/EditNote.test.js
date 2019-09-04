import React from 'react'
import {shallow} from 'enzyme'
import EditNote from "../components/EditNote";

describe('EditNote', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<EditNote/>);
    });
    it('should render an edit note modal header', () => {
        expect(wrapper.find('Modal').length).toEqual(1);
        expect(wrapper.find('ModalHeader').length).toEqual(1);
        expect(wrapper.find('Input').length).toEqual(1);
    });
    it('should render an edit note modal body',()=>{
        expect(wrapper.find('ModalBody').length).toEqual(1);
        expect(wrapper.find('Input').length).toEqual(1);
        expect(wrapper.find('div').length).toEqual(1);
        expect(wrapper.find('Label').length).toEqual(1);
    });
    it('should render an edit note modal footer',()=>{
        expect(wrapper.find('ModalFoote').length).toEqual(1);
        expect(wrapper.find('Button').length).toEqual(2);
    })
});