import React from 'react'
import {shallow} from 'enzyme'
import SignUp from "../SignUp";

describe('SingUp', () => {
    let props;
    let wrapper;
    let instance;
    beforeEach(() => {
        props = {
            errorMessage: '',
            isError: false,
            onEmail: jest.fn(),
            onPassword: jest.fn(),
            onReEnteredPassword:jest.fn(),
            handleSignUp:jest.fn()
        };
        wrapper = shallow(<SignUp childProps={props}/>);
        instance = wrapper.instance();
    });
    it('should render signup form', () => {
        expect(wrapper.find('Form').length).toEqual(1);
        expect(wrapper.find('Col').length).toEqual(3);
        expect(wrapper.find('FormGroup').length).toEqual(3);
        expect(wrapper.find('Button').length).toEqual(1);
    });
    it("should call onEmail function when email input is changed", () => {
        wrapper.find('Input[name="email"]').simulate('change', {value: 'test@gmail.com'});
        expect(props.onEmail).toHaveBeenCalledTimes(1);
    });
    it("should call onPassword function when password input is changed", () => {
        wrapper.find('Input[name="password"]').simulate('change', {value: 'password'});
        expect(props.onPassword).toHaveBeenCalledTimes(1);
    });
    it("should call onReEnteredPassword function when rePassword input is changed", () => {
        wrapper.find('Input[name="rePassword"]').simulate('change', {value: 'repassword'});
        expect(props.onReEnteredPassword).toHaveBeenCalledTimes(1);
    });
    it("should call handleSignUP function when login button is clicked", () => {
        wrapper.find('Button').simulate('click');
        expect(props.handleSignUp).toHaveBeenCalledTimes(1);
    });
});