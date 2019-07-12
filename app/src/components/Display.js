import React from 'react';
import Dashboard from './Dashboard';


class Display extends React.Component {
    state = {
        balls: 0,
        strikes: 0,
        outs: 0,  // STRETCH
        errors: 0,  // STRETCH


    }

    handleStrikes = async () => {
        await this.setState({
            ...this.state,
            strikes: this.state.strikes + 1
        })


    }

    handleBalls= () => {
        this.setState(prevState => {
            return {balls: prevState.balls + 1}
        })
    }



    render() {
        return (
           <div className = "main-container">
                <div className = "stats">
                    <h3> Strikes Total = {this.state.strikes}</h3>
                    <h3> Ball Total = {this.state.balls}</h3>
                </div>    
            
           
           
                <Dashboard
                    handleStrikes = {this.handleStrikes}
                    handleBalls = {this.handleBalls}
                />
           
           
           </div> 
        )
    }



}

export default Display;
