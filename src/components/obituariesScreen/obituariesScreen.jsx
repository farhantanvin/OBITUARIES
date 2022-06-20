import React from "react";
import { Link } from "react-router-dom";
import SearchObituaryForm from "../searchObituaryForm";
import Styles from "./obituariesScreen.module.scss";

class ObituariesScreen extends React.Component {
  render() {
    return (
      <div className={Styles.mainContainer}>
        <Link to="/create-obituary" className={Styles.addObituaryButton}>
          ADD OBITUARY
        </Link>
        <h4>
          Search <span>Obituaries</span>
        </h4>
        <SearchObituaryForm
          className={Styles.searchForm}
          history={this.props.history}
        />
      </div>
    );
  }
}

export default ObituariesScreen;
