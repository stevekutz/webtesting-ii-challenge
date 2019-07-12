import React from 'react';
import Dashboard from './Dashboard';


class Display extends React.Component {
    state = {
        balls: 0,
        strikes: 0,
        fouls: 0,
        hits: 0,   // STRETCH  
        outs: 0,  // STRETCH
        errors: 0,  // STRETCH


    }

    handleStrikes = async () => {
       if(this.state.strikes < 3) {
        await this.setState({
                ...this.state,
                strikes: this.state.strikes + 1
            })
       } else {
           this.setState({
               strikes: 0,
           })
       }
       
 


    }

    handleBalls= () => {
        
        if(this.state.balls < 4){
            this.setState(prevState => {
                return {balls: prevState.balls + 1}
            })
        } else {
            this.setState({
                balls: 0,
                strikes: 0,
            })
        }

    }
    handleHits = async () => {
        await this.setState({
            ...this.state,
            strikes: 0,
            balls: 0,
            fouls: 0,
            hits: this.state.hits + 1,
        })

    }

    handleFouls = async () => {
        if(this.state.strikes < 2){
            await this.setState({
            ...this.state,
            strikes: this.state.strikes + 1,
            fouls: this.state.fouls + 1,
        })
        } else {
            await this.setState({
                ...this.state,
                fouls: this.state.fouls + 1,
            })
        }
        
        
 


    }

    render() {
        return (
           <div className = "main-container">
                <div className = "stats">
                    <h3> Strikes Total = {this.state.strikes}</h3>
                    <h3> Ball Total = {this.state.balls}</h3>
                    <h4> Hits Total = {this.state.hits}</h4>
                    <h5> Fouls Total = {this.state.fouls}</h5>
                </div>    
            
           
           
                <Dashboard
                    handleStrikes = {this.handleStrikes}
                    handleBalls = {this.handleBalls}
                    handleHits = {this.handleHits}
                    handleFouls = {this.handleFouls}
                />
           
           
           </div> 
        )
    }



}

export default Display;
