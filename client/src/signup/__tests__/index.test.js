import React from 'react'
import {shallow} from 'enzyme'
import Index from "../../signup";
import {areMatchingPasswords} from "../service";

jest.mock('../service');
describe('SingUp', ()=>{
    let wrapper;
    let instance;
    beforeEach(()=>{
        wrapper = shallow(<Index/>);
        instance = wrapper.instance();
    });
    it('should render signup form',()=>{
        expect(wrapper.find('Form').length).toEqual(1);
        expect(wrapper.find('Col').length).toEqual(3);
        expect(wrapper.find('FormGroup').length).toEqual(3);
        expect(wrapper.find('Button').length).toEqual(1);
    }) ;
    it("should signUp with given details", () => {
        instance.handleSignUp = jest.fn(instance.handleSignUp);
        wrapper.find('Input[name="email"]').simulate('change', {target: {value: 'Tester'}});
        wrapper.find('Input[name="password"]').simulate('change', {target: {value: 'password'}});
        wrapper.find('Input[name="rePassword"]').simulate('change', {target: {value: 'password'}});
        wrapper.find('Button').simulate('click');
        expect(areMatchingPasswords).toHaveBeenCalledTimes(1);
    });
    it("should update the state with given values", () => {
        instance.setErrorState(true, "error message");
        const expectedState = {isError: true, errorMessage: 'error message'};
        expect(wrapper.state()).toEqual(expectedState)
    });
});