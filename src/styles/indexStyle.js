import styled from "styled-components";

export const UserWrapper = styled.div`
  margin: 10% auto;
`;
export const UserTitle = styled.h1`
  font-size: 4.2em;
  font-weight: bold;
  color: #ffff;
  span {
    color: #64ffda;
  }
  @media (max-width: 700px) {
    font-size: 3em;
  }
`;
export const UserDescription = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 15%;
  p {
    color: #ffff;
    max-width: 50%;
    font-weight: 300;
    font-size: 22px;
    line-height: 1.8;
    margin-bottom: 5%;
    @media (max-width: 994px) {
      max-width: 90%;
    }
  }
  img {
    max-width: 50%;
    position: absolute;
    right: 15%;
    top: 12%;
    transform: scaleX(-1);
    filter: grayscale(80%);
    height: 70%;
    object-fit: cover;
    @media (max-width: 1200px) {
      right: 10%;
    }
    @media (max-width: 994px) {
      // display: none;
      top: 35%;
    }
    @media (max-width: 700px) {
      // display: none;
      top: 50%;
      left: auto;
      height: 50%;
    }
  }
  @media (max-width: 700px) {
    flex-direction: column-reverse;
    img {
      max-width: 100%;
    }
    p {
      max-width: 100%;
      font-size: 19px;
    }
  }
`;
export const DownloadButton = styled.a`
  width: 298px;
  height: 71px;
  border: 1px solid #64ffda;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffff;
  text-decoration: none;
  cursor: pointer;
  :hover {
    color: #64ffda;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;
export const UserTopic = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
