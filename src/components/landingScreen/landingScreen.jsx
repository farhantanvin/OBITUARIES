import React from 'react';
import Styles from './landingScreen.module.scss';
import HeroSection from './heroSection';
import SearchObituariesSection from './searchObituariesSection';
import RecentObituariesSection from './recentObituariesSection';
import PlanRemembranceSection from './planRemembranceSection';
import AboutUsSection from './aboutUsSection';

class LandingScreen extends React.Component {
	render() {
		return (
			<div className={Styles.mainContainer}>
				<HeroSection />
				<SearchObituariesSection history={this.props.history} />
				<RecentObituariesSection history={this.props.history} />
				<PlanRemembranceSection history={this.props.history} />
				<AboutUsSection />
			</div>
		);
	}
}

export default LandingScreen;
