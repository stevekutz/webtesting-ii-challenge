import React from 'react';

class Dashboard extends React.Component {
    // props AUTOMATICALLY passed into class components !!! 
    render() {
        return (
           <div>
                <button onClick = {this.props.handleStrikes} > Strike </button>
                <button onClick = {this.props.handleBalls}>Ball</button>
           
           </div> 
        )
    }



}

export default Dashboard;