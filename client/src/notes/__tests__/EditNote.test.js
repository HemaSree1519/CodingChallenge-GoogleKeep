import React from 'react'
import {shallow} from 'enzyme'

describe('EditNote', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<EditNote/>);
    });
    it('should render a edit note modal', () => {
        expect(wrapper.find('Modal').length).toEqual(1)
    })
});