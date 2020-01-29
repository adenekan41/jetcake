import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonSkelenton = styled.button`
	font-style: normal;
	font-weight: 500;
	line-height: 17px;
	border-radius: 6px;
	text-align: center;
	display: block;
	color: #ffffff;
	font-size: 14px;
	&:hover {
		transition: all 0.25s ease-in;
		cursor: pointer;
		opacity: 0.8;
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}

	svg {
		background: rgba(255, 255, 255, 0);
		height: 44px;
		width: 37px;
		display: inline-block !important;
		margin-top: -23px !important;
		transform: translate(0, 11px);
	}
`;

const Button = ({
	children,
	isLoading,
	loadingText,
	disabled,
	// eslint-disable-next-line no-shadow
	type,
	className,
	...rest
}) => {
	return (
		<ButtonSkelenton
			className={['button', className].join(' ')}
			disabled={disabled || isLoading}
			type={type}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...rest}
		>
			{isLoading ? <>{loadingText}</> : <>{children} </>}
		</ButtonSkelenton>
	);
};

Button.defaultProps = {
	isLoading: false,
	type: 'submit',
	loadingText: 'Loading...',
	className: '',
	disabled: false,
	children: [],
};

Button.propTypes = {
	type: PropTypes.string,
	disabled: PropTypes.bool,
	isLoading: PropTypes.bool,
	className: PropTypes.string,
	children: PropTypes.any,
	loadingText: PropTypes.string,
};

export default Button;
