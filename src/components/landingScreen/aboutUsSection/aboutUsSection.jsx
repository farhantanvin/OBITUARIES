import React from 'react';
import Styles from './aboutUsSection.module.scss';
import FlowerIcon from '../../svgComponents/flower';

class AboutUsSection extends React.Component {
	render() {
		return (
			<div className={Styles.mainContainer}>
				<FlowerIcon className={Styles.flowerIcon} />
				<h3>{'This site is provided as service of Luminary Digital Marketing. LLC. The Worldwide Obituaries brand name is used to identify the digital services of Luminary to support celebrating of past loved ones through online channel and traditional channels. All information provided to Luminary Digital Marketing Agency through the Worldwide Obituaries Website is retained by Luminary Digital Marketing Limited under Saint Lucia copyright laws.'}</h3>
			</div>
		);
	}
}

export default AboutUsSection;
