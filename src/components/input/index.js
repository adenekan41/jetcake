import React from 'react';
import styled from 'styled-components';

const FormInput = ({ handelChange, label, ...rest }) => {
	return (
		<Wrapper>
			<div className="group">
				{label ? <label aria-label={label}>{label}</label> : null}
				<input className="form-control" onChange={handelChange} {...rest} />
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	label {
		display: inline-block;
		margin-bottom: 0.5rem;
		font-size: 14px;
		font-weight: 300;
		margin-top: 1rem;
	}
`;
export default FormInput;
