import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FormInput from '../../components/input';
import { googleSignInStart, emailSignInStart } from '../../redux/user/actions';
import Button from '../../components/button';

const Login = ({ googleSignInStart, emailSignInStart }) => {
	const [users, setUser] = useState({
		email: '',
		password: '',
		loading: false,
	});
	const handleChange = (e) => {
		const { value, name } = e.target;

		setUser({ ...users, [name]: value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = users;
		setUser({ ...users, loading: true });
		await emailSignInStart(email, password);
		setUser({ ...users, loading: false });
	};
	return (
		<Wrapper className="container d-block d-md-flex">
			<span>
				<h3 className="text-left mt-5 mt-md-0 mb-4">
					Welcome Back To Your Account
				</h3>
				<div className="row justify-content-center">
					<div className="col-md-12">
						<div className="card">
							<div className="card-body p-0">
								<form action="" onSubmit={(e) => handleSubmit(e)}>
									<FormInput
										onChange={(e) => handleChange(e)}
										type="email"
										label="Email"
										name="email"
										value={users.email}
										required
									/>
									<FormInput
										onChange={(e) => handleChange(e)}
										type="password"
										name="password"
										label="Password"
										value={users.password}
										required
									/>
									<div className="buttons d-block mt-4 d-md-flex">
										<Button
											className="btn-primary"
											isLoading={users.loading}
											disabled={users.loading}
											type="submit"
										>
											Sign In
										</Button>
										<Button
											className="btn-primary"
											type="button"
											onClick={googleSignInStart}
										>
											Sign In With Google
										</Button>
									</div>
								</form>
							</div>
						</div>
						<Link to="/register" className="d-block mt-4">
							Dont Have An Account ?
						</Link>
					</div>
				</div>
			</span>
		</Wrapper>
	);
};
const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password })),
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
		margin-top: 1rem;
		background: #1f88e5;
		margin-right: 19px;
	}
`;
export default connect(null, mapDispatchToProps)(Login);
