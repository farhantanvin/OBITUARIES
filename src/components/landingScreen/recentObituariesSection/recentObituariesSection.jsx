import React from "react";
import { Row, Col } from "react-bootstrap";
import ObituariesData from "../../../data/obituaries.json";
import Styles from "./recentObituariesSection.module.scss";
import Carousel from "react-elastic-carousel";

export default function recentObituariesSection() {
  return (
    <Row className={Styles.mainContainer}>
      <Col lg={12} xl={6} className={Styles.textContainer}>
        <h3 className={Styles.main_heading}>
          <span className={Styles.styled_heading}>Recent</span> Obituaries
        </h3>
        <p className="mt-4">
          {
            "For those unfimiliar with Belle Benchley, for example, it might come as a surprise to stumble across a grave marker depicting the face of a gorilla."
          }
        </p>
        <p className="mt-3">
          {
            "Known as The Zoo Lady, Benchley was the director of the San Diego Zoo from 1927. to 1953."
          }
        </p>
        <div className="d-flex mt-5 align-items-center">
          <button className={`${Styles.btn_contact} mr-3`}>CONTACT US</button>

          <button className={`${Styles.btn_learn_more} mx-3`}>
            Learn More
          </button>
        </div>
      </Col>
      <Col lg={12} xl={6} className={Styles.recentsContainer}>
        <Carousel pagination={false} itemsToShow={2}>
          {ObituariesData.slice(5).map((obituary, index) => (
            <div
              className={`${Styles.recentObituary} ${
                index % 2 === 1 ? Styles.even_slide : Styles.odd_slide
              }`}
              key={index}
            >
              <img
                className={Styles.recentImage}
                src={`https://minimaltoolkit.com/images/randomdata/${
                  obituary.gender ? "male" : "female"
                }/${obituary.imgNumber}.jpg`}
                alt="profile"
              />
              <div className={Styles.text_wrapper}>
                <p
                  className={Styles.recentName}
                >{`${obituary.firstName} ${obituary.lastName}`}</p>
                <p className={Styles.recentYear}>({obituary.yearOfBirth})</p>
              </div>
            </div>
          ))}
        </Carousel>
      </Col>
    </Row>
  );
}
