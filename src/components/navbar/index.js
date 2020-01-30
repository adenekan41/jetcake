import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { ReactComponent as Male } from '../../assets/vectors/male.svg';
import { signOutStart } from '../../redux/user/actions';

const Nav = styled.nav`
	padding: 16px 46px;
	background: white !important;
	@media (max-width: 786px) {
		padding: 15px !important;
	}
	.nav-link {
		color: rgba(0, 0, 0, 0.5);
		padding: 15px 1rem;
	}
	.navbar-toggler {
		color: rgba(0, 0, 0, 0.5);
		border: none;
	}
`;
const Navbar = ({ user, signOut }) => {
	const [show, setShow] = useState(false);
	return (
		<Nav className="navbar navbar-expand-md bg-light navbar-light">
			<Link className="navbar-brand" to="/">
				<b className="font-weight-light">
					AirTeams
					<strong
						className="font-weight-bold"
						style={{ color: '#1E88E5', fontSize: '30px' }}
					>
						.
					</strong>
				</b>
			</Link>

			<button className="navbar-toggler" type="button">
				<span className="navbar-toggler-icon" onClick={() => setShow(!show)} />
			</button>

			<div
				className={`collapse navbar-collapse ${show ? 'show' : ''}`}
				id="collapsibleNavbar"
			>
				<ul className="navbar-nav ml-auto">
					{user === null && (
						<>
							<li className="nav-item">
								<Link className="nav-link" to="/login">
									Login
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/register">
									Signup
								</Link>
							</li>
						</>
					)}
					{user && (
						<>
							<li className="nav-item">
								<Link className="nav-link" to="/profile">
									<Male style={{ width: '20px', marginTop: '-6px' }} />{' '}
									{user && user.displayName.split(' ')[0]}
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/" onClick={signOut}>
									Logout
								</Link>
							</li>
						</>
					)}
				</ul>
			</div>
		</Nav>
	);
};

const mapDispatchToProps = (dispatch) => ({
	signOut: () => dispatch(signOutStart()),
});
export default connect(null, mapDispatchToProps)(Navbar);
