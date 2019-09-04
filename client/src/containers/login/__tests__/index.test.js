import React from 'react'
import {shallow} from 'enzyme'
import Index from "../../login";

describe('Login',()=>{
    let wrapper;
    let instance;
    beforeEach(()=>{
        wrapper = shallow(<Index/>);
        instance = wrapper.instance();
    });
   it('should render a login form',()=>{
       expect(wrapper.find('Form').length).toEqual(1);
       expect(wrapper.find('Col').length).toEqual(2);
       expect(wrapper.find('Input').length).toEqual(2);
       expect(wrapper.find('FormGroup').length).toEqual(2);
       expect(wrapper.find('Button').length).toEqual(1);
   });
    // it("should Login with given details", () => {
    //     instance.handleLogin = jest.fn(instance.handleLogin);
    //     wrapper.find('Input[name="email"]').simulate('change', {target: {value: 'Tester'}});
    //     wrapper.find('Input[name="password"]').simulate('change', {target: {value: 'password'}});
    //     wrapper.find('Button').simulate('click');
    //     wrapper(instance.handleLogin).toHaveBeenCalled();
    // });
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
    })
});