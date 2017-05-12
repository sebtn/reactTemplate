let React = require('react')
let ReactDOM = require('react-dom')

class Message extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h3>{this.props.message}</h3>
			</div>
		)
	}
}

ReactDOM.render(<Message title="Email Seb" message="can you email me pls?"/>, 
	document.getElementById('react-container'))