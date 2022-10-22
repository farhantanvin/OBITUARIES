import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Carousel from "react-elastic-carousel";
import { useHistory } from "react-router-dom";
import img1 from "../../../assets/recent-1.jpg";
import img2 from "../../../assets/recent-2.jpg";
import Styles from "./recentObituariesSection.module.scss";

export default function RecentObituariesSection() {
  const history = useHistory();

  // eslint-disable-next-line no-unused-vars
  const [obituariesData, setObituariesData] = useState([
    {
      id: "e72f0834-c9ff-32d0-8dc9-79a13caeafe1",
      image: img1,
      firstName: "Jason",
      lastName: "V.Little",
      gender: true,
      country: "Ireland",
      state: "New Hampshire",
      city: "Groverfort",
      imgNumber: "20",
      dob: "Octobor 7, 1946",
      dop: "March 14, 2019",
      yearOfBirth: "1990",
      yearOfPassing: "1975",
    },
    {
      id: "0c7a439b-a596-3f1f-9ea0-9f9dc081702c",
      firstName: "Zorja",
      lastName: "Lady Hie",
      image: img2,
      gender: false,
      country: "Brunei Darussalam",
      state: "Alaska",
      city: "Millsville",
      imgNumber: "8",
      dob: "Octobor 7, 1946",
      dop: "March 14, 2019",
      yearOfBirth: "2004",
      yearOfPassing: "1970",
    },
    {
      id: "e72f0834-c9ff-32d0-8dc9-79a13caeafe1",
      image: img1,
      firstName: "Jason",
      lastName: "V.Little",
      gender: true,
      country: "Ireland",
      state: "New Hampshire",
      city: "Groverfort",
      imgNumber: "20",
      dob: "Octobor 7, 1946",
      dop: "March 14, 2019",
      yearOfBirth: "1990",
      yearOfPassing: "1975",
    },
    {
      id: "0c7a439b-a596-3f1f-9ea0-9f9dc081702c",
      firstName: "Zorja",
      lastName: "Lady Hie",
      image: img2,
      gender: false,
      country: "Brunei Darussalam",
      state: "Alaska",
      city: "Millsville",
      imgNumber: "8",
      dob: "Octobor 7, 1946",
      dop: "March 14, 2019",
      yearOfBirth: "2004",
      yearOfPassing: "1970",
    },
  ]);
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
          <button onClick={() => history.push('/contact-us') } className={`${Styles.btn_contact} mr-3`}>CONTACT US</button>

          <button onClick={() => history.push('/dashboard') } className={`${Styles.btn_learn_more} mx-3`}>
            Learn More
          </button>
        </div>
      </Col>
      <Col lg={12} xl={6} className={Styles.recentsContainer}>
        <Carousel pagination={false} itemsToShow={2}>
          {obituariesData.map((obituary, index) => (
            <div
              className={`${Styles.recentObituary} ${
                index % 2 === 1 ? Styles.even_slide : Styles.odd_slide
              }`}
              key={index}
            >
              <img
                className={Styles.recentImage}
                src={obituary.image}
                alt="profile"
              />
              <div className={Styles.text_wrapper}>
                <p
                  className={Styles.recentName}
                >{`${obituary.firstName} ${obituary.lastName}`}</p>
                <p className={Styles.dob}>{obituary.dob}</p>
                <p className={Styles.dob}>{obituary.dop}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </Col>
    </Row>
  );
}
