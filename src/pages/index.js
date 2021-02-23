import React from "react";
import ErenIcon from "../assets/images/eren-photo.png";
import AboutBox from "../components/About/AboutBox";
import about from "../data/About";
import {
  UserWrapper,
  UserTitle,
  UserDescription,
  DownloadButton,
  UserTopic,
} from "../styles/indexStyle.js";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <UserWrapper>
        <UserTitle>
          Eren <span>Dhoheiri</span>
        </UserTitle>
        <UserDescription>
          <div>
            <p>
              Hi, welcome to my personal website. I'm a software engineer based
              in Jakarta, Indonesia specializing in building websites,
              applications, and everything in between.
            </p>
            <DownloadButton
              href="https://drive.google.com/file/d/1XvmOu33pP_HXnA-ok3G8lmi2jCV1ZME7/view?usp=sharing"
              download
              title="Resume"
            >
              Download Resume
            </DownloadButton>
          </div>
          <img src={ErenIcon} alt="eren self" />
        </UserDescription>
        {/* <UserTopic>
          {about.map((item) => (
            <AboutBox key={item.id} info={item} />
          ))}
        </UserTopic> */}
      </UserWrapper>
    </Layout>
  );
};

export default IndexPage;
