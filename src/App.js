import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			data: [],
			data2: '',
		};

		this.myTextInput = React.createRef();

		// this.setStateHandler = this.setStateHandler.bind(this);
	}

	setStateHandler = () => {
		const item = 'setState...';
		// const myArray = this.state.data.slice();
		// myArray.push(item);
		// const myArray = [this.state.data];
		const myArray = [...this.state.data];
		myArray.push(item);
		this.setState({ data: myArray });
	};

	forceUpdateHandler = () => {
		this.forceUpdate();
	};

	findDomNodeHandler = () => {
		const myDiv = document.getElementById('myDiv');
		ReactDOM.findDOMNode(myDiv).style.color = 'green';
	};

	updateState = (e) => {
		this.setState({ data2: e.target.value });
	};

	clearInput = () => {
		this.setState({ data2: '' });
		// ReactDOM.findDOMNode(this.refs.myInput).focus();

		this.myTextInput.current.focus();
	};

	componentDidMount() {
		this.myTextInput.current.focus();
	}

	render() {
		return (
			<div>
				<button onClick={this.setStateHandler}>SET STATE</button>
				<h4>State Array: {this.state.data}</h4>
				<button onClick={this.forceUpdateHandler}>FORCE UPDATE</button>
				<h4>Random number: {Math.random()}</h4>
				<button onClick={this.findDomNodeHandler}>
					FIND DOME NODE
				</button>
				<div id='myDiv'>NODE</div>
				<br />
				<br />
				<input
					value={this.state.data2}
					onChange={this.updateState}
					ref={this.myTextInput}
				></input>
				<button onClick={this.clearInput}>CLEAR</button>
				<h4>{this.state.data}</h4>
			</div>
		);
	}
}
export default App;
