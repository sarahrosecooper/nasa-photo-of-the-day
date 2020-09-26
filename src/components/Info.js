import React from "react";
import styled from "styled-components";

const Experiment = styled.div`
  display: flex;
`;

const StyledH1 = styled.h1`
  font-size: 7rem;
  line-height: 11rem;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px;
`;

const Info = ({ picture, date, title, copyright, explanation }) => {
  console.log("props", title, copyright, explanation);
  return (
    <Experiment>
      <StyledH1>
        <Header>
          <a href="https://apod.nasa.gov/apod/astropix.html" target="_blank">
            A<br></br>P<br></br>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1224px-NASA_logo.svg.png"
              id="nasaLogo"
              alt="nasa logo"
            ></img>
            D<br></br>
          </a>
        </Header>
      </StyledH1>

      <p>{date}</p>
      <h1>{title}</h1>
      <p>{copyright}</p>
      <p>{explanation}</p>
    </Experiment>
  );
};

export default Info;
