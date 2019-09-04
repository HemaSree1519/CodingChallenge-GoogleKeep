import React from 'react'
import {shallow} from 'enzyme'
import Note from "../components/Note";

describe('Notes', () => {
    let wrapper;
    let note ;
    let setEditState;
    beforeEach(() => {
        note = {
            "id": 2,
            "title": "test",
            "content": "Content here",
            "email": "test@gmail.com",
            "createdAt": "2019-05-12T13:20:40.735Z",
            "updatedAt": "2019-05-12T13:20:40.735Z"
        };
        setEditState = jest.fn();
        wrapper = shallow(<Note note={note} setEditState={setEditState}/>);
    });
    it('should render 1 <Card />', () => {
        expect(wrapper.find('Card').length).toEqual(1);
    });
    it('should render 1 <CardBody />', () => {
        expect(wrapper.find('CardBody').length).toEqual(1);
    });
    it('should render 1 <CardTitle />', () => {
        expect(wrapper.find('CardTitle').length).toEqual(1);
    });
    it('should render 1 <CardText />', () => {
        expect(wrapper.find('CardText').length).toEqual(1);
    });
    it('should call edit state function when clicked on card', () => {
        wrapper.find('Card[name="card"]').simulate('click');
        expect(setEditState).toHaveBeenCalledTimes(1);
    });
});