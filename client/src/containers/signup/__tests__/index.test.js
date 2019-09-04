import React from 'react'
import {shallow} from 'enzyme'
import Index from "../index";
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
    it("should update the state with empty error message when valid email is given", () => {
        const email = {
            target: {
                value: "test@gmail.com"
            }
        };
        instance.onEmail(email);
        const expectedState = {isError: false, errorMessage: ''};
        expect(wrapper.state()).toEqual(expectedState)
    });
    it("should update the state with empty error message when password is given", () => {
        const password = {
            target: {
                value: "password"
            }
        };
        instance.onPassword(password);
        const expectedState = {isError: false, errorMessage: ''};
        expect(wrapper.state()).toEqual(expectedState)
    });
    it("should update the state with empty error message when re-password is given", () => {
        const password = {
            target: {
                value: "password"
            }
        };
        instance.onReEnteredPassword(password);
        const expectedState = {isError: false, errorMessage: ''};
        expect(wrapper.state()).toEqual(expectedState)
    })
});