import React from 'react';
//import ReactDOM from 'react-dom';
// import App from './App';
import Display from './Display';

import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';

afterEach(rtl.cleanup);


describe('<Display/>', () => {
    it('renders <Dislay />', () => {
        rtl.render(<Display/>);

    })



})