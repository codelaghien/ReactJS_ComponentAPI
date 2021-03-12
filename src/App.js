import React from 'react';
// import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			data: '',
		};

		this.myTextInput = React.createRef();

		// this.setStateHandler = this.setStateHandler.bind(this);
	}

	updateState = (e) => {
		this.setState({ data: e.target.value });
	};

	clearInput = () => {
		this.setState({ data: '' });
		// ReactDOM.findDOMNode(this.refs.myInput).focus();
		this.myTextInput.current.focus();
	};

	componentDidMount() {
		// this.myTextInput.current.value = 'nhập vào';
		this.myTextInput.current.focus();
	}

	render() {
		return (
			<div>
				{' '}
				&nbsp;&nbsp;
				<input
					value={this.state.data}
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
