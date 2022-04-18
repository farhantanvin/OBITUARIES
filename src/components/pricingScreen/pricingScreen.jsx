import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './pricingScreen.module.scss';
import FlowerIcon from '../svgComponents/flower';

class PricingScreen extends React.Component {
	render() {
		return (
			<div className={Styles.mainContainer}>
				<h2>{'PLANS & PRICING'}</h2>
				<h4>{'Let the memory of your loved one be a happy one.'}</h4>
				<h5>{'Leaves an afterglow of smiles when even in their after life with one of our affordable packages.'}</h5>
				<div className={Styles.plansContainer}>
					<div>
						<FlowerIcon className={Styles.flower} />
						<h4>Basic</h4>
						<Link to="/sign-up">SIGN UP</Link>
						<p className="mb-4"><span className={Styles.priceText}>$50 USD</span><span>/mon</span></p>
						<p>Static post on Facebook and Instagram</p>
						<p>FB Boosting – 1 Day</p>
						<p>Publication on website</p>
					</div>
					<div>
						<FlowerIcon className={Styles.flower} />
						<h4>Plus</h4>
						<Link to="/sign-up">SIGN UP</Link>
						<p className="mb-4"><span className={Styles.priceText}>$125 USD</span><span>/mon</span></p>
						<p>Static post on Facebook and Instagram</p>
						<p>Publication on website</p>
						<p>Ad on Facebook – 2 days</p>
						<p>Memorial video - 20 secs plus free song</p>
						<p>Digital Condolences Book</p>
						<p>Memorial video - 20 secs plus free song</p>
					</div>
					<div>
						<FlowerIcon className={Styles.flower} />
						<h4>Premium</h4>
						<Link to="/sign-up">SIGN UP</Link>
						<p className="mb-4"><span className={Styles.priceText}>$250 USD</span><span>/mon</span></p>
						<p>Facebook Ad</p>
						<p>Posting on FB and Instagram</p>
						<p>Digital Condolences Book</p>
						<p>Physical Condolence Book</p>
						<p>{'Does not include duties, freight charges (includes printing and design)'}</p>
						<p>Up too 500 messages</p>
					</div>
				</div>
			</div>
		);
	}
}

export default PricingScreen;
