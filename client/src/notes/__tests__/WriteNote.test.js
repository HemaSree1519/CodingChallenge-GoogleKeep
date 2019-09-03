import React from 'react'
import {shallow} from 'enzyme'
import WriteNote from "../components/WriteNote";

describe('WriteNotes test', () => {
    const props = {
        writingNoteTitle: "",
        writingNoteContent: "",
    };
    const wrapper = shallow(<WriteNote childProps={props}/>);
    it('should render 2 <div/>', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });
});