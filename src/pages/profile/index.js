import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Button from '../../components/button';
import EditProfile from './edit';

const Profile = ({ user }) => {
	const [edit, setEdit] = useState(false);
	return (
		<Wrapper>
			{user !== null ? (
				<>
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-md-7">
								<h3>Profile</h3>
								<img
									src={`${
										user.photo
											? user.photo
											: 'https://images.pexels.com/photos/3542313/pexels-photo-3542313.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
									}`}
								/>
								<p>
									<b>Name</b>
								</p>
								<p>{user.displayName}</p>
								<p>
									<b>Email</b>
								</p>
								<p>{user.email}</p>
								<p>
									<b>Date Of Birth</b>
								</p>
								<p>{user.dob}</p>
								<p>
									<b>Address</b>
								</p>
								<p>{user.address}</p>
								<br />
								<Button
									className="btn btn-primary"
									onClick={() => setEdit(!edit)}
								>
									Edit Profile
								</Button>
							</div>
						</div>
					</div>
					{edit && (
						<EditProfile user={user} closeModal={() => setEdit(!edit)} />
					)}
				</>
			) : (
				<h3 className="text-center mt-5">Loading ...</h3>
			)}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	h3 {
		font-weight: 600;
	}
	img {
		height: 90px;
		width: 90px;
		border-radius: 50%;
		object-fit: cover;
		margin: 1.5rem 0;
	}
	button {
		padding: 14px 39px;
		border: none;
		border-radius: 50px;
		background: #1f88e5;
	}
`;
const mapStateToProps = (state) => ({
	user: state.user.currentUser,
});
export default connect(mapStateToProps, null)(Profile);
