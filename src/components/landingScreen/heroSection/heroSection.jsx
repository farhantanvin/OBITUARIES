import React from 'react';
import gsap from 'gsap';
import { Row, Col } from 'react-bootstrap';
import Styles from './heroSection.module.scss';

class HeroSection extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);

		gsap.to('.heroSectionElement', {
			opacity: 1,
			y: '-=10',
			delay: 0.2,
			stagger: {
				grid: [1, 3],
				amount: 0.15
			}
		});
	}

	render() {
		return (
			<Row className={Styles.mainContainer}>
				<Col md={12} lg={7} className={Styles.textContainer}>
					<h1 className="heroSectionElement">
						Celebrating the Life
						<br />
						of Loved Ones Passed
						<br />
						Begins Here</h1>
					<h5 className="mt-4 pr-5 mr-5 heroSectionElement">
						We Support You With The Best Options to Make Their Journey
						One Less Thing to Worry About.
					</h5>
					<button className="mt-4 heroSectionElement">LEARN MORE</button>
				</Col>
				<Col md={12} lg={5} className={Styles.blobContainer}>
					<div className={Styles.blob}></div>
				</Col>
			</Row>
		);
	}
}

export default HeroSection;
