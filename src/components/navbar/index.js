import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
	padding: 16px 46px;
	background: white !important;
	.nav-link {
		color: rgba(0, 0, 0, 0.5);
		padding: 15px 1rem;
	}
`;
const Navbar = () => {
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
				<span className="navbar-toggler-icon" />
			</button>

			<div className="collapse navbar-collapse" id="collapsibleNavbar">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<Link className="nav-link" to="/">
							Login
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/">
							Signup
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/">
							Profile
						</Link>
					</li>
				</ul>
			</div>
		</Nav>
	);
};

export default Navbar;
