import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import FormInput from '../../components/input';
import { signUpStart } from '../../redux/user/actions';
import Button from '../../components/button';
import { Link } from 'react-router-dom';

const Register = ({ onsignupStart }) => {
	const [users, setUser] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});
	const handleOnChange = (e) => {
		const { value, name } = e.target;

		setUser({ [name]: value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const { displayName, email, password, confirmPassword } = users;

		if (password !== confirmPassword) {
			alert('passwords don"t match');
			return;
		}
		try {
			onsignupStart(displayName, email, password);
			setUser({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: '',
			});
		} catch (err) {
			console.error(err);
		}
	};
	return (
		<Wrapper className="d-block d-md-flex">
			<span>
				<h3 className="text-center mb-4">
					Sign up with your email and password
				</h3>
				<div className="row justify-content-center">
					<div className="col-md-12">
						<div className="card">
							<div className="card-body p-0">
								<form
									className="sign-up-form"
									onSubmit={(e) => handleSubmit(e)}
								>
									<FormInput
										type="text"
										name="displayName"
										value={users.displayName}
										onChange={(e) => handleOnChange(e)}
										label="Dispaly Name"
										required
									/>
									<FormInput
										type="email"
										name="email"
										value={users.email}
										onChange={(e) => handleOnChange(e)}
										label="Email"
										required
									/>
									<FormInput
										type="password"
										name="password"
										value={users.password}
										onChange={(e) => handleOnChange(e)}
										label="Password"
										required
									/>
									<FormInput
										type="password"
										name="confirmPassword"
										value={users.confirmPassword}
										onChange={(e) => handleOnChange(e)}
										label="Confirm Password"
										required
									/>
									<Button type="submit">Sign Up</Button>
								</form>
							</div>
						</div>
						<Link to="/login" className="d-block mt-4">
							Already Have An Account ?
						</Link>
					</div>
				</div>
			</span>
		</Wrapper>
	);
};
const mapDispatchToProps = (dispatch) => ({
	onsignupStart: (displayName, email, password) =>
		dispatch(signUpStart({ displayName, email, password })),
});

const Wrapper = styled.div`
	min-height: 80vh;
	background: #fff;
	align-items: center;
	justify-content: center;
	h2 {
		font-weight: 300;
	}
	.card {
		border: none;
		box-shadow: none;
		background: #ffffff;
		padding: 0px 0px;
	}
	button {
		padding: 14px 39px;
		border: none;
		border-radius: 50px;
		background: #1f88e5;
		margin-right: 19px;
		margin-top: 2rem;
	}
`;
export default connect(null, mapDispatchToProps)(Register);
