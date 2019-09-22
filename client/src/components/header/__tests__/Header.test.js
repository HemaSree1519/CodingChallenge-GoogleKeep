import React from 'react'
import {shallow} from 'enzyme'
import Header from "../Header";

describe('Header', () => {
    let props;
    let wrapper1;
    let wrapper2;
    beforeEach(() => {
        props = {
            handleLogout: jest.fn(),
        };
        wrapper1 = shallow(<Header handleLogout={props.handleLogout} isAuthenticated={false}/>);
        wrapper2 = shallow(<Header handleLogout={props.handleLogout} isAuthenticated={true}/>);
    });
    it('should render header with banner name', () => {
        expect(wrapper1.find('NavbarBrand').length).toEqual(1);
        expect(wrapper1.find('Label').length).toEqual(1);

    });
    it('should render logout item if user is logged in after authentication',()=>{
        expect(wrapper2.find('NavItem').length).toEqual(1);
    });
    it('should render login and signup items if user is not yet logged in',()=>{
        expect(wrapper1.find('NavItem').length).toEqual(2);
        expect(wrapper1.find('NavLink').length).toEqual(2);
    });
    it("should call handleLogout when clicked on logout link", () => {
        wrapper2.find('NavItem[name="logout"]').simulate('click');
        expect(props.handleLogout).toHaveBeenCalledTimes(1);
    });
});