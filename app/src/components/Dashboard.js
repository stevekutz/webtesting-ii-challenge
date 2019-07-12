import React from 'react';
import '../App.css';

class Dashboard extends React.Component {
    // props AUTOMATICALLY passed into class components !!! 
    render() {
        return (
           <div className = "controlPanel">
                <button onClick = {this.props.handleStrikes} > Strike </button>
                <button onClick = {this.props.handleBalls}>Ball</button>
                <button onClick = {this.props.handleHits}> Hits </button>
                <button onClick = {() => this.props.handleFouls()}>Fouls</button>
           </div> 
        )
    }



}

export default Dashboard;