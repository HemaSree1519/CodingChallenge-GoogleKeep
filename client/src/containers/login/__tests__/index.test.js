import React from 'react'
import {shallow} from 'enzyme'
import Index from "../index";

describe('Login',()=>{
    let props;
    let wrapper;
    let instance;
    beforeEach(()=>{
        wrapper = shallow(<Index />);
        instance = wrapper.instance();
    });
   it('should render a login form',()=>{
       expect(wrapper.find('Login').length).toEqual(1);
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
    })
});