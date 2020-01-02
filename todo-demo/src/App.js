import React, {
	Component
} from 'react';
import Search from './components/search'
// import Test from './components/test'
import './App.css';

class App extends Component {
	render() {
		console.log(232);
		return (
			<div className="todo">
		        <Search/>
		    </div>
		);
	}
}

export default App;