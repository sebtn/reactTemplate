let React = require('react')
let ReactDOM = require('react-dom')

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Webpack ready on hot reload</h1>
				<h3>React ready dev server</h3>
				<p>kinda magical</p>
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('react-container'))