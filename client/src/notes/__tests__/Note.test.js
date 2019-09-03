import React from 'react'
import {shallow} from 'enzyme'
import Note from "../components/Note";

describe('Notes', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Note/>);
    });
    it('should render 1 <Card />', () => {
        expect(wrapper.find('Card').length).toEqual(1);
    });
    it('should render 1 <CardBody />', () => {
        expect(wrapper.find('Card').length).toEqual(1);
    });
    it('should render 1 <CardTitle />', () => {
        expect(wrapper.find('Card').length).toEqual(1);
    });
    it('should render 1 <CardText />', () => {
        expect(wrapper.find('Card').length).toEqual(1);
    });
});