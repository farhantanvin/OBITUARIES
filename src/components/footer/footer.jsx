import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import Logo from "../../assets/footerLogo.png";
import Styles from "./footer.module.scss";
class Footer extends React.Component {
  render() {
    return (
      <div className={Styles.mainContainer}>
        <div className={Styles.subContainer}>
          <div className={Styles.box}>
            <img
              className={Styles.brand}
              src={Logo}
              alt="May Cherished  Memories Bring You Moments of Comfort"
            />
            <p>
              We do accept cramains from throughout the United States and the
              world. Many of our families come from the phoenix are as well as
              various
            </p>
            <ul className={Styles.socials}>
              <li>
                <a href="https://www.facebook.com/">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className={Styles.box}>
            <h4>Our Hours</h4>
            <p>Weekdays 9:00 - 17:00</p>
            <p>Saturday 9:00 - 17:00</p>
            <p>Sunday Close</p>
          </div>
          <div className={Styles.box}>
            <h4>Newsletter</h4>
            <p>Stay updated with recent news and discount</p>
            <div className="d-flex">
              <input required type="email" placeholder="Your Email" />
              <button>Send</button>
            </div>
          </div>
          <div className={Styles.box}>
            <h4>Contacts</h4>
            <ul className={Styles.contacts}>
              <li>
                <i className="bi bi-geo-alt"></i>{" "}
                <span>8080 pickens Way Cooper,TX75432</span>
              </li>
              <li>
                <i className="bi bi-telephone"></i> <span>1-800-123-45-67</span>
              </li>
              <li>
                <i className="bi bi-envelope"></i>{" "}
                <span>santi@example.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={Styles.subContainer}>
          <div className={Styles.box1}>
            <p>
              <i className="fa fa-copyright" aria-hidden="true"></i> Copyright
              2022. All rights reserved.
            </p>
          </div>
          <div className={Styles.box2}>
            <ul className={Styles.footerMenu}>
              <li>
                <a href="https://www.facebook.com/">Contact Us</a>
              </li>
              <li>
                <a href="https://www.facebook.com/">Terms</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
