import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FormInput from '../../components/input';
import { signUpStart } from '../../redux/user/actions';
import Button from '../../components/button';

const EditProfile = ({ onsignupStart, user, closeModal }) => {
	const [users, setUser] = useState({
		displayName: user.displayName || '',
		email: user.email || '',
		dob: user.dob || '',
		address: user.address || '',
	});
	const handleOnChange = (e) => {
		const { value, name } = e.target;
		setUser({ ...users, [name]: value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const { displayName, email, dob, address } = users;
		try {
			onsignupStart(displayName, email, dob, address);
			// setUser({
			// 	displayName: '',
			// 	email: '',
			// 	password: '',
			// 	dob: '',
			// 	address: '',
			// 	confirmPassword: '',
			// });
		} catch (err) {
			console.error(err);
		}
	};
	return (
		<Wrapper className="d-block d-md-flex">
			<span>
				<div className="row justify-content-center">
					<div className="col-md-12">
						<div className="card">
							<h3>
								Edit <span onClick={() => closeModal()}>Close</span>
							</h3>
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
										label="Full Name"
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
										type="date"
										name="dob"
										value={users.dob}
										onChange={(e) => handleOnChange(e)}
										label="Date of birth"
										required
									/>
									<FormInput
										type="text"
										name="address"
										value={users.address}
										onChange={(e) => handleOnChange(e)}
										label="Address"
										required
									/>
									<Button type="submit">Edit Profile</Button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</span>
		</Wrapper>
	);
};
const mapDispatchToProps = (dispatch) => ({
	onsignupStart: (displayName, email, dob, address) =>
		dispatch(signUpStart({ displayName, email, dob, address })),
});

const Wrapper = styled.div`
	min-height: 80vh;
	background: #fff;
	align-items: center;
	justify-content: center;
	h3 {
		font-weight: 300;
		span {
			float: right;
			color: #1f88e5;
			font-weight: 100;
			font-size: 14px;
			border: 1px solid #1f88e5;
			border-radius: 50px;
			padding: 5px 9px;
			cursor: pointer;
		}
	}
	.card {
		border: none;
		box-shadow: none;
		background: #ffffff;
		padding: 0px 0px;
		width: 32%;
		padding: 2rem;
		margin: auto;
	}
	button {
		padding: 14px 39px;
		border: none;
		border-radius: 50px;
		background: #1f88e5;
		margin-right: 19px;
		margin-top: 2rem;
	}
	.col-md-12 {
		position: fixed;
		background: #0000008a;
		width: 100%;
		height: 100%;
		top: 0;
		padding: 12rem 0;
	}
`;
export default connect(null, mapDispatchToProps)(EditProfile);
