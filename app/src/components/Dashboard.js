import React from 'react';
import '../App.css';

class Dashboard extends React.Component {
    // props AUTOMATICALLY passed into class components !!! 
    render() {
        return (
           <div className = "controlPanel">
                <h2>Dashboard</h2>    
                <button onClick = {this.props.handleStrikes} > Strike </button>
                <button onClick = {this.props.handleBalls}>Ball</button>
                <button onClick = {this.props.handleHits}> Hits </button>
                <button onClick = {this.props.handleFouls}> Fouls </button>
              {/*  <button onClick = {() => this.props.handleFouls()}>Fouls</button>  BREAKS fireEvent  */}
           </div> 
        )
    }



}

export default Dashboard;