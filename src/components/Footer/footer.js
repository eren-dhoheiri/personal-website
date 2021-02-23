import React from "react";
import PropTypes from "prop-types";
import GmailIcon from "../../assets/images/gmail.png";
import GithubIcon from "../../assets/images/github.png";
import LinkendinIcon from "../../assets/images/linkendin.png";
import InstagramIcon from "../../assets/images/instagram.png";

const Footer = ({ footerClass }) => (
  <div className={`defaultFooter ${footerClass}`}>
    <div>
      {/* <div className="contactFooter">
        <img
          className="iconFooter"
          src={GmailIcon}
          alt="contact link erendhoheiri"
        />
        <img
          className="iconFooter"
          src={GithubIcon}
          alt="contact link erendhoheiri"
        />
        <img
          className="iconFooter"
          src={LinkendinIcon}
          alt="contact link erendhoheiri"
        />
        <img
          className="iconFooter"
          src={InstagramIcon}
          alt="contact link erendhoheiri"
        />
      </div> */}
      <p>
        Made by coffee | &copy; 2021{" "}
        <a href="http://eren.dhoheiri.me">Eren Dhoheiri</a>
      </p>
    </div>
  </div>
);
Footer.propTypes = {
  footerClass: PropTypes.string,
};
export default Footer;
