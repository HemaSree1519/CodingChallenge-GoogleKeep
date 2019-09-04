import React from 'react'
import {shallow} from 'enzyme'
import EditNote from "../components/EditNote";

describe('EditNote', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<EditNote/>);
    });
    it('should render a edit note modal', () => {
        expect(wrapper.find('Modal').length).toEqual(1)
    })
});