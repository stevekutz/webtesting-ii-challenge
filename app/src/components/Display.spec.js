import React from 'react';
//import ReactDOM from 'react-dom';
// import App from './App';
import Display from './Display';
import DashBoard from './Dashboard';

import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';

afterEach(rtl.cleanup);


describe('<Display/>', () => {
    it('renders <Dislpay />', () => {
        rtl.render(<Display/>);
    })
    it('displays totals for Strikes, Balls, Hits, Fouls', () => {
        const {getByText} = rtl.render(<Display/>);
        getByText(/Strikes/);
        getByText(/Balls/);
        getByText(/Hits/);
        getByText(/Fouls/);

    })

    it('verifies Strikes & Balls reset to 0 when Hit button pressed', () => {
        const {getByText, getByTestId} = rtl.render(<Display/>);

        const ballsTotal = getByText(/Balls/);
        const strikesTotal = getByText(/Strikes/);
        const button_Hit = getByTestId("Hit");

        rtl.fireEvent.click(button_Hit);

        // console.log('balls Total is >>> ', ballsTotal);
        expect(ballsTotal).toHaveTextContent(/0/);
        expect(strikesTotal).toHaveTextContent(/0/);
    }
        

    
    )


})