import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import SpinnerLottie from '../../assets/spinner.json';

const Spinner = (props) => {
	useEffect(() => {
		lottie.loadAnimation({
			container: document.getElementById('spinnerLottieContainer'),
			animationData: SpinnerLottie,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			name: 'benefit',
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid meet'
			}
		});
	}, []);

	return (
		<div id="spinnerLottieContainer" className={props.className} />
	);
};

export default Spinner;
