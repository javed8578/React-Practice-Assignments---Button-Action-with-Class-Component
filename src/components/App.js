import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends React.Component {
	handleClick(e){
		this.shoot("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
	}

    render() {
    	return(
    		<div id="main">
				<button onClick={this.shoot.bind(this)} id="click">Button  </button>

				{ /* Do not remove this main div!! */ }
    		</div>
    	);
    }

}


export default App;

