import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './components/navbar';
import Home from './pages/home';
import login from './pages/auth/login';
import Register from './pages/auth/signup';
import Profile from './pages/profile';

import { checkUserSession } from './redux/user/actions';
import history from './utils/history';

const App = ({ checkUserSession, user }) => {
	useEffect(() => {
		checkUserSession();
	}, [user]);
	return (
		<>
			<Router history={history}>
				<Navbar user={user} />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/login" component={login} />
					<Route path="/register" component={Register} />
					<Route path="/profile" component={Profile} />
				</Switch>
			</Router>
		</>
	);
};
const mapStateToProps = (state) => ({
	user: state.user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
	checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
