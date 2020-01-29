import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import animationData from '../../assets/vectors/banner.json';
import sectionAnimationData from '../../assets/vectors/section.json';
import secondSectionAnimationData from '../../assets/vectors/section-2.json';

const Home = () => {
	const animBox = useRef();
	const sectionAnimBox = useRef();
	// eslint-disable-next-line camelcase
	const sectionAnimBox_second = useRef();
	const bannerAnimation = () => {
		lottie.loadAnimation({
			container: animBox.current,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData,
		});
	};
	const sectionAnimation = () => {
		lottie.loadAnimation({
			container: sectionAnimBox.current,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: sectionAnimationData,
		});
	};
	const secondSectionAnimation = () => {
		lottie.loadAnimation({
			container: sectionAnimBox_second.current,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: secondSectionAnimationData,
		});
	};
	useEffect(() => {
		bannerAnimation();
		sectionAnimation();
		secondSectionAnimation();
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
			<Section>
				<div className="container">
					<h2 className="text-center">What Do We Offer</h2>
					<div className="row">
						<div className="col-md-5">
							<h3>Effective Collaboration</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
								suscipit amet labore, laboriosam veniam voluptatum. Praesentium
								ullam nesciunt nobis accusamus.
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
								suscipit amet.
							</p>
							<Link to="/register" className="btn btn-primary">
								Get Started
							</Link>
						</div>
						<div className="col-md-7">
							<div className="svg" ref={sectionAnimBox} />
						</div>
					</div>
				</div>
			</Section>
			<Section>
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="svg" ref={sectionAnimBox_second} />
						</div>
						<div className="col-md-6">
							<h3>Endless Teamwork</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
								suscipit amet labore, laboriosam veniam voluptatum. Praesentium
								ullam nesciunt nobis accusamus.
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
								suscipit amet.
							</p>
							<Link to="/register" className="btn btn-primary">
								Get Started
							</Link>
						</div>
					</div>
				</div>
			</Section>
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
		opacity: 0.58;
		margin: -4rem auto;
	}
`;

const Section = styled.div`
	margin-top: 6rem;
	h2 {
		font-size: 36px;
		font-weight: 600;
		color: #424242;
		margin-bottom: 3rem;
	}
	h3 {
		font-size: 26px;
		font-weight: 500;
		margin-top: 3rem;
		color: #424242;
	}
	.btn {
		padding: 9px 40px;
		border-radius: 50px;
		background: #1e88e5;
		font-weight: 500;
		border: none;
		/* color: #000; */
	}
	p {
		margin: 1.5rem 0;
		font-size: 15px;
	}
`;
export default Home;
