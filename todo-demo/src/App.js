import React, {
	Component
} from 'react';
import Search from './components/search'
// import Test from './components/test'
import './App.css';

class App extends Component {
	render() {
		console.log(333);
		console.log('master-test');
		console.log("new-test");
		return (
			<div className="todo">
		        <Search/>
		    </div>
		);
	}
}

export default App;