import React from 'react'
import {shallow} from 'enzyme'
import Login from "../Login";

describe('Login',()=>{
    let props;
    let wrapper;
    let instance;
    beforeEach(()=>{
        props = {
            errorMessage: '',
            isError: false,
            onEmail: jest.fn(),
            onPassword: jest.fn(),
            handleLogin: jest.fn()
        };
        wrapper = shallow(<Login childProps={props}/>);
        instance = wrapper.instance();
    });
   it('should render a login form',()=>{
       expect(wrapper.find('Form').length).toEqual(1);
       expect(wrapper.find('Col').length).toEqual(2);
       expect(wrapper.find('Input').length).toEqual(2);
       expect(wrapper.find('FormGroup').length).toEqual(2);
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
    it("should call handleLogin function when login button is clicked", () => {
        wrapper.find('Button').simulate('click');
        expect(props.handleLogin).toHaveBeenCalledTimes(1);
    });
});