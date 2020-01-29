import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import login from './pages/auth/login';
import Register from './pages/auth/signup';

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/login" component={login} />
          <Route path="/register" component={Register} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
