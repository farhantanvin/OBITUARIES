import React from 'react';
import Styles from './obituarySearchResult.module.scss';

class ObituarySearchResult extends React.Component {
	constructor(props) {
		super(props);

		this.state = { showPostMessageModal: false };
	}

	clickListener(e) {
		e.preventDefault();

		this.setState({
			showPostMessageModal: false
		});
	}

	componentDidMount() {
		window.addEventListener('click', this.clickListener.bind(this));
	}

	componentWillUnmount() {
		window.removeEventListener('click', this.clickListener.bind(this));
	}

	render() {
		return (
			<div className={`${Styles.resultContainer} ${this.props.className}`} onClick={(e) => {
				e.stopPropagation();

				this.props.history.push(`/obituary/${this.props.obituary.id}`);
			}}>
				<img className={Styles.userImage} src={`https://minimaltoolkit.com/images/randomdata/${this.props.obituary.gender ? 'male' : 'female'}/${this.props.obituary.imgNumber}.jpg`} alt="profile" />
				<div className="w-100 h-100 p-3 mt-3">
					<div className="d-flex">
						<h4 className="m-0">{this.props.obituary.firstName} {this.props.obituary.lastName}</h4>
						<p className={Styles.yearText}>
							({this.props.obituary.yearOfBirth}- {this.props.obituary.yearOfPassing})
						</p>
					</div>
					<p className={Styles.description}>{'Funeral services for John Leland Dickerson, 83, Eudora, KS, will be held at 10:00 a.m. Tuesday, December 28, 2021, at Warren-McElwain Mortuary in Eudora. Burial will follow at Oswego Cemetery in Oswego, KS. John passed away on Tuesday, December 21, 2021, at LMH Health. John was born on July 26, 1938, in Parsons, KS, the son of Howard A. and Lucille (Hughes) Dickerson. He married Delores "Susie" Cunningham on June 6, 1959, in Miami, OK.'}</p>
					<div className={Styles.optionsContnainer}>
						<p onClick={(e) => {
							e.stopPropagation();

							this.setState({
								showOptions: false
							});

							this.props.showModal(`${this.props.obituary.firstName} ${this.props.obituary.lastName}`);
						}}>Post a message</p>
						<p onClick={(e) => {
							e.stopPropagation();

							this.props.history.push('/send-flowers');
						}}>Send Flowers</p>
						<p onClick={(e) => {
							e.stopPropagation();

							window.open('https://www.gofundme.com/', '_blank');
						}}>Make a donation</p>
					</div>
				</div>
			</div>
		);
	}
}

export default ObituarySearchResult;
