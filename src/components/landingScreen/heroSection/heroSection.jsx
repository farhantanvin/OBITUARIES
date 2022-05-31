import React, { useState } from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import slide1 from "../../../assets/first_slide.png";
import slie2_img from "../../../assets/heroSlide.png";
import slide2 from "../../../assets/second_slide.jpg";
import BookModal from "../../modal";
import Styles from "./heroSection.module.scss";
export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [modalShow, setModalShow] = useState(false);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Row className={`${Styles.mainContainer} `}>
      <img
        alt="slide background"
        src={index === 0 ? slide1 : slide2}
        className={Styles.hero_img}
      ></img>
      <BookModal show={modalShow} onHide={() => setModalShow(false)} />
      <Col md={12} lg={10} className={Styles.textContainer}>
        <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item className={`text-center `}>
            <div className="row col-lg-8 m-auto">
              <h2 className={`my-3 text-light ${Styles.main_text}`}>
                Celebrating the Life of Loved Ones Passed Begins Here
              </h2>
              <span className="my-3 text-center  px-5 text-light">
                We Support You With The Best Options to Make Their Journey One
                Less Thing to Worry About.
              </span>
            </div>

            <div className="d-flex justify-content-center align-items-center my-3">
              <button className={`mx-3 ${Styles.btn_learn_more}`}>
                Learn more
              </button>
              <button className={`mx-3 ${Styles.btn_contact}`}>
                Contact Us
              </button>
            </div>
          </Carousel.Item>
          <Carousel.Item className={`text-center akib  ${Styles.second_slide}`}>
            <div className="row display-flex">
              <div className="col-lg-5 pl-5">
                <img
                  src={slie2_img}
                  alt="img"
                  style={{ height: "300px", width: "300px" }}
                ></img>
              </div>
              <div className={`col-lg-6 ${Styles.second_slide_container}`}>
                <h2
                  className={`my-3 text-left text-light  ${Styles.second_slide_title}`}
                >
                  Relive old memories of the late special person with custom
                  printable E Book!
                </h2>

                <div className="d-flex  align-items-center my-3">
                  <button className={`mx-3 ${Styles.btn_learn_more}`}>
                    See more
                  </button>
                  <button
                    onClick={() => setModalShow(true)}
                    className={`mx-3 ${Styles.btn_contact}`}
                  >
                    Ebook
                  </button>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  );
}
