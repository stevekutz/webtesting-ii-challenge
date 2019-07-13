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

    it('verifies Strikes & Balls Total resets to 0 when Hit button pressed', () => {
        const {getByText, getByTestId} = rtl.render(<Display/>);

        const ballsTotal = getByText(/Balls/);
        const strikesTotal = getByText(/Strikes/);
        const button_Hit = getByTestId("Hit");

        rtl.fireEvent.click(button_Hit);

        // console.log('balls Total is >>> ', ballsTotal);
        expect(ballsTotal).toHaveTextContent(/0/);
        expect(strikesTotal).toHaveTextContent(/0/);
    })

    it('verifies Strikes & Balls Total resets to 0 when there are 3 strikes', () => {
        const {getByText, getByTestId} = rtl.render(<Display/>);

        const ballsTotal = getByText(/Balls/);
        const strikesTotal = getByText(/Strikes/);
        const button_Strike = getByTestId("Strike");
        
        for(let i = 0; i < 3; ++i ) {
            rtl.fireEvent.click(button_Strike);
        }

        expect(ballsTotal).toHaveTextContent(/0/);
        expect(strikesTotal).toHaveTextContent(/0/);
    })

    it('verifies Strikes only goes to max of 2 when more than 2 fouls are made', () => {
        const {getByText, getByTestId} = rtl.render(<Display/>);

        const ballsTotal = getByText(/Balls/);
        const strikesTotal = getByText(/Strikes/);
        const button_Foul = getByTestId("Foul");
        
        for(let i = 0; i < 5; ++i ) {
            rtl.fireEvent.click(button_Foul);
        }

        expect(ballsTotal).toHaveTextContent(/0/);
        expect(strikesTotal).toHaveTextContent(/2/);

    })

    it('verifies Strikes & Balls Total resets to 0 when there are 4 Balls', () => {
        const {getByText, getByTestId} = rtl.render(<Display/>);

        const ballsTotal = getByText(/Balls/);
        const strikesTotal = getByText(/Strikes/);
        const foulsTotal = getByText(/Fouls/);
        const button_Ball = getByTestId("Ball");
        
        for(let i = 0; i < 4; ++i ) {
            rtl.fireEvent.click(button_Ball);
        }

        expect(ballsTotal).toHaveTextContent(/0/);
        expect(strikesTotal).toHaveTextContent(/0/);
        expect(foulsTotal).toHaveTextContent(/0/);

    })

})