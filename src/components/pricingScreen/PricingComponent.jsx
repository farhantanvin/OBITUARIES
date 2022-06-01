import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './pricingScreen.module.scss';

export default function PricingComponent({
	planName, planPrice, planDetail1, planDetail2, planDetail3, children
}) {
	return (
		<div className={Styles.PriceContainer}>
			<div className={Styles.PriceContainerHeader}>
				{children}
				<h4>{planName}</h4>
				<p className="mb-4"><span className={Styles.priceText}>{planPrice}</span></p>
			</div>
			<div className={Styles.PriceContainerBody}>
				<p>{planDetail1}</p>
				{/* <p>{planDetail2}</p> */}
				{/* <p>{planDetail3}</p> */}
			</div>
			<div className={Styles.PriceContainerFooter}>
				<Link to="/sign-up">SIGN UP</Link>
			</div>
		</div>
	);
}
