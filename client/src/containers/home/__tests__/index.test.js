import React from 'react';
import ReactDOM from 'react-dom';
import App from '../index';
import {shallow} from "enzyme/build";

describe('App', () => {
    it('should render correctly', () => {
        const component = shallow(<App/>);
        expect(component).toMatchSnapshot();
    });
});