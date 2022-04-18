import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Styles from './planRemembranceSection.module.scss';

class PlanRemembranceSection extends React.Component {
	render() {
		return (
			<Row className={Styles.mainContainer}>
				<Col md={7} sm={12} className={Styles.videoContainer}>
					<video controls={false} width="640" loop poster={null} autoPlay>
						 <source type="video/mp4" src="https://assets.mixkit.co/videos/preview/mixkit-beautiful-winter-pink-flowers-34645-large.mp4" />
					 </video>
				</Col>
				<Col md={5} sm={12} className={Styles.textContainer}>
					<h2>Plan a Beautiful Personalised Digital Remembrance</h2>
					<div className={Styles.container}>
						<div className={Styles.circle}>
							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="300px" height="300px" viewBox="0 0 300 300" xmlSpace="preserve">
								<defs>
									<path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
								</defs>
								<g>
									<use xlinkHref="#circlePath" fill="#cd9e6a" className={Styles.filledCircle} onClick={() => {
										this.props.history.push('/get-quote');
									}} />
									<text fill="#000">
										<textPath xlinkHref="#circlePath">GET A FREE GUIDE & QUOTE</textPath>
									</text>
								</g>
							</svg>
						</div>
					</div>
				</Col>
			</Row>
		);
	}
}

export default PlanRemembranceSection;
