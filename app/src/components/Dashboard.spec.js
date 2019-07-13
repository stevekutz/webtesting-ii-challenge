import React from 'react';
//import ReactDOM from 'react-dom';
// import App from './App';

import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';

import '@testing-library/react/cleanup-after-each'; // Automatically resets render for each test
import DashBoard from './Dashboard';

afterEach(rtl.cleanup);

describe('verifies <DashBoard/> buttons are present', () => {
    it('Strike button present', () => {
        const {getByText, queryByText} = rtl.render(<DashBoard/>);
        const button_Strike = getByText(/Strike/);
        const button_strike = queryByText(/strike/);

        expect(button_Strike).toBeTruthy();
        expect(button_strike).not.toBeTruthy;

       // console.log('buttonStrike >> ', button_Strike); // should be HTMLBUttonElement
       //  console.log('buttonStrike >> ', button_strike);  // should be null
      //  console.log('buttonStrike FN >> ', button_Strike.HTMLButtonElement.type); // should be HTMLBUttonElement
    })

    it('Ball Button present', () => {
        const {getByText, queryByText} = rtl.render(<DashBoard/>);
        const button_Ball = getByText(/Ball/);
        const button_ball = queryByText(/ball/);

        expect(button_Ball).toBeTruthy();
        expect(button_ball).not.toBeInTheDocument();

    })

    it('Hits button present', () => {
        const {getByText, queryByText} = rtl.render(<DashBoard/>);
        const button_Hits = getByText(/Hits/);
        const button_hits = queryByText(/hits/);

        expect(button_Hits).toBeTruthy();
        // expect(button_hits).not.toBeVisible(); // fails with value null
        expect(button_hits).not.toBeInTheDocument();
    })

    it('Fouls button present', ()=> {
        const {getByText, queryByText} = rtl.render(<DashBoard/>);
        const button_Fouls = getByText(/Fouls/);
        const button_fouls = queryByText(/fouls/);

        expect(button_Fouls).toBeInTheDocument();
        expect(button_fouls).not.toBeInTheDocument();
        expect(button_fouls).toBeNull();


    })
});

describe('verifies <Dashboard> buttons fire', () => {
    it('UGLY way to test >> Strike button fires', () => {
        const testDOM = rtl.render(<DashBoard/>);
     
        const button_fires_Strikes = testDOM.getByText(/Strike/);
        const button_Strike = rtl.fireEvent.click(button_fires_Strikes);
    })

    it('BETTER way to test >> verifies Ball button fires', () => {
        const {getByText} = rtl.render(<DashBoard/>);
        const button_fires_Ball = getByText(/Ball/);
        rtl.fireEvent.click(button_fires_Ball);

    })

    it('BETTER way to test >> verifies Ball button fires', () => {
        const {getByText} = rtl.render(<DashBoard/>);
        const button_fires_Hit = getByText(/Hit/);
        rtl.fireEvent.click(button_fires_Hit);

    })    
    
    it('BETTER way to test >> verifies Ball button fires', () => {
        const {getByText} = rtl.render(<DashBoard/>);
        const button_fires_Foul = getByText(/Foul/);
        rtl.fireEvent.click(button_fires_Foul);

    }) 

})