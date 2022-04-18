import React from 'react';
import Styles from './obituaryScreen.module.scss';
import ObituariesData from '../../data/obituaries.json';
import PostMessageModal from '../postMessageModal';

class ObituaryScreen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			obituary: ObituariesData.filter((o) => o.id === this.props.match.params.id)[0],
			showPostMessageModal: false,
			postMessageFor: '',
			success: '',
			tabSection: 0
		};
	}

	componentDidMount() {
		window.scrollTo(0, 0);
	}

	hideModal(message) {
		this.setState({
			showPostMessageModal: false,
			postMessageFor: '',
			success: message === 'success' ? 'Message successfully posted!' : ''
		});

		setTimeout(() => {
			this.setState({ success: '' });
		}, 5000);
	}

	render() {
		return (
			<div className={Styles.mainContainer}>
				<div className={Styles.profileContainer}>
					<img className={Styles.coverPhoto} src="https://images.unsplash.com/photo-1496661415325-ef852f9e8e7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2127&q=80" alt="cover" />
					<img
						className={Styles.userImage}
						src={`https://minimaltoolkit.com/images/randomdata/${this.state.obituary.gender ? 'male' : 'female'}/${this.state.obituary.imgNumber}.jpg`}
						alt="profile" />
					<h4 className="mb-1">{this.state.obituary.firstName} {this.state.obituary.lastName}</h4>
					<p className={`text-muted ${Styles.yearText}`}>
						({this.state.obituary.yearOfBirth}- {this.state.obituary.yearOfPassing})
					</p>
					<div className={`nav nav-tabs ${Styles.navsContainer}`}>
						<button
							className={this.state.tabSection === 0 ? Styles.activeButton : null}
							onClick={() => { this.setState({ tabSection: 0 }); }}>Home</button>
						<button
							className={this.state.tabSection === 1 ? Styles.activeButton : null}
							onClick={() => { this.setState({ tabSection: 1 }); }}>About</button>
						<button
							className={this.state.tabSection === 2 ? Styles.activeButton : null}
							onClick={() => { this.setState({ tabSection: 2 }); }}>Details</button>
						<button
							className={this.state.tabSection === 3 ? Styles.activeButton : null}
							onClick={() => { this.setState({ tabSection: 3 }); }}>Actions</button>
					</div>
					<div className="row align-items-start w-100 my-5">
						<p className={`col-lg-9 col-md-12 ${Styles.description}`}>
							{
								this.state.tabSection === 0
									? <p>{`This is in the memory of ${this.state.obituary.firstName} ${this.state.obituary.lastName}`}</p>
									: null
							}
							{
								this.state.tabSection === 1
									? <p>{'Funeral services for John Leland Dickerson, 83, Eudora, KS, will be held at 10:00 a.m. Tuesday, December 28, 2021, at Warren-McElwain Mortuary in Eudora. Burial will follow at Oswego Cemetery in Oswego, KS. John passed away on Tuesday, December 21, 2021, at LMH Health. John was born on July 26, 1938, in Parsons, KS, the son of Howard A. and Lucille (Hughes) Dickerson. He married Delores "Susie" Cunningham on June 6, 1959, in Miami, OK.'}</p>
									: null
							}
							{
								this.state.tabSection === 2
									? <p>Details</p>
									: null
							}
							{
								this.state.tabSection === 3
									? <div className={Styles.optionsContnainer}>
										<p onClick={(e) => {
											e.stopPropagation();

											this.setState({ showPostMessageModal: true });
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
									: null
							}
						</p>
						<div className="col-lg-3 col-md-12">
							<p><strong>Date of Birth:</strong> {this.state.obituary.dob}</p>
							<p><strong>Date of Passing:</strong> {this.state.obituary.dop}</p>
							<p><strong>Location:</strong>{` ${this.state.obituary.country}, ${this.state.obituary.state}, ${this.state.obituary.city}`}</p>
						</div>
					</div>
				</div>
				{
					this.state.showPostMessageModal
						? <PostMessageModal
							name={`${this.state.obituary.firstName} ${this.state.obituary.lastName}`}
							closeModal={this.hideModal.bind(this)} />
						: null
				}
			</div>
		);
	}
}

export default ObituaryScreen;
