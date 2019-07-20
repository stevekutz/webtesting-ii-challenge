import React from 'react';
import '../App.css';

class Dashboard extends React.Component {
    // props AUTOMATICALLY passed into class components !!! 
    render() {
        return (
           <div className = "controlPanel">
                <h2>Dashboard</h2>    
                <button data-testid = "Strike"  onClick = {this.props.handleStrikes} > Strike </button>
                <button data-testid = "Ball" onClick = {this.props.handleBalls}>Ball</button>
                <button data-testid = "Hit" onClick = {this.props.handleHits}> Hit </button>
                <button data-testid = "Foul" onClick = {this.props.handleFouls}> Foul </button>
              {/*  <button onClick = {() => this.props.handleFouls()}>Fouls</button>  BREAKS fireEvent  */}
           </div> 
        )
    }



}

export default Dashboard;