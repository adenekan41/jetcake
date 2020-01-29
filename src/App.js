import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';

function App() {
	return (
		<>
			<Router>
        <Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
