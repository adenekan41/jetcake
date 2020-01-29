import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import animationData from '../../assets/vectors/violin.json';

const Home = () => {
	const animBox = useRef();
	useEffect(() => {
		lottie.loadAnimation({
			container: animBox.current, // the dom element that will contain the animation
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData, // the path to the animation json
		});
	}, []);
	return (
		<Wrapper>
			<HeroSection className="d-md-flex d-block">
				<span>
					<header className="container">
						<div className="row">
							<div className="col-md-12 z-index">
								<h1>All teams hands on deck .</h1>
								<p>
									Pitch your interesting ideas to your teams. Create a Free
									Account Now
								</p>
								<Link to="/" className="btn btn-primary">
									Get Started
								</Link>
							</div>
							<div className="col-md-12">
								<div className="svg" ref={animBox} />
							</div>
						</div>
					</header>
				</span>
			</HeroSection>
		</Wrapper>
	);
};
const Wrapper = styled.section`
	header {
		text-align: center;
		h1 {
			text-align: center;
			color: #16191b;
			font-weight: 900;
			line-height: 1.1;
			letter-spacing: -1.1px;
			font-size: 60px;
		}
		p {
			font-size: 18px;
			font-weight: 400;
			color: #4d4d4d;
			margin: 1rem 0;
		}
		.btn {
			padding: 13px 58px;
			border-radius: 50px;
			background: #1e88e5;
			font-weight: 500;
			border: none;
			/* color: #000; */
		}
	}
	.z-index {
		z-index: 999999;
	}
`;
const HeroSection = styled.div`
	min-height: 100vh;
	align-items: center;
	justify-content: center;
	.svg {
		width: 100%;
		opacity: 0.6;
		margin: -4rem auto;
		&:hover {
			opacity: 1;
		}
	}
`;
export default Home;
