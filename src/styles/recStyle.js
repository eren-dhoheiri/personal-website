import styled from "styled-components";

export const RecWrapper = styled.div`
  padding: 5% 0;
  > h1 {
    color: #fff;
    padding-bottom: 30px;
    border-bottom: 1px solid #fff;
    font-weight: 300;
  }
  @media (max-width: 700px) {
    padding: 10% 0 20%;
  }
`;
export const RecBox = styled.div`
  margin-top: 10%;
  color: #fff;
  h3 a {
    margin: 0;
    color: #fff;
    text-decoration: none;
    font-weight: 300;
  }
  h3 a:hover {
    color: #64ffda;
  }
  hr {
    background: #64ffda;
    width: 15%;
    height: 3px;
    margin: 3% 0;
  }
  > p:first-of-type {
    font-size: 18px;
    margin: 0;
    font-weight: 300;
  }
  > p:nth-of-type(2) {
    font-size: 16px;
    font-weight: 300;
  }
`;
export const RecDes = styled.p`
  margin: 2% 0;
  font-weight: 300;
  max-width: 85%;
`;
