import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Profile = ({ user }) => {
	return (
		<Wrapper>
			{user === null && (
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-7">
							<h3>Profile</h3>
							<img src="" />
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
						</div>
					</div>
				</div>
			)}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	div {
	}
`;
const mapStateToProps = (state) => ({
	user: state.user.currentUser,
});
export default connect(mapStateToProps, null)(Profile);
