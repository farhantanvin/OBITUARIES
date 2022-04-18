import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Navigation } from 'swiper/core';
import ObituariesData from '../../../data/obituaries.json';
import Styles from './recentObituariesSection.module.scss';

class RecentObituariesSection extends React.Component {
	componentWillMount() {
		SwiperCore.use([Navigation]);
	}

	render() {
		return (
			<Row className={Styles.mainContainer}>
				<Col lg={12} xl={7} className={Styles.textContainer}>
					<p className={Styles.topText}>Today, Tomorrow and Beyond.</p>
					<h2>Recent Obituaries</h2>
					<p className="mt-4">{'For those unfimiliar with Belle Benchley, for example, it might come as a surprise to stumble across a grave marker depicting the face of a gorilla.'}</p>
					<p className="mt-3">{'Known as The Zoo Lady, Benchley was the director of the San Diego Zoo from 1927. to 1953.'}</p>
					<div className="d-flex mt-5 align-items-center">
						<button>CONTACT US</button>
						<p className={Styles.orText}>or</p>
						<a href="/" className="m-0">Learn More</a>
					</div>
				</Col>
				<Col lg={12} xl={5} className={Styles.recentsContainer}>
					<Swiper breakpoints={{
						480: { slidesPerView: 2 }
					}}
					loop={false}
					navigation={true}
					slidesPerView={2}
					className={`mySwiper ${Styles.obituariesResultsContainer}`}>
						{
							ObituariesData.slice(5).map((obituary, index) => (
								<SwiperSlide key={index} className='d-flex justify-content-center'>
									<div className={Styles.recentObituary}>
										<img className={Styles.recentImage} src={`https://minimaltoolkit.com/images/randomdata/${obituary.gender ? 'male' : 'female'}/${obituary.imgNumber}.jpg`} alt="profile" />
										<p className={Styles.recentName}>{`${obituary.firstName} ${obituary.lastName}`}</p>
										<p className={Styles.recentYear}>({obituary.yearOfPassing})</p>
									</div>
								</SwiperSlide>
							))
						}
					</Swiper>
				</Col>
			</Row>
		);
	}
}

export default RecentObituariesSection;
