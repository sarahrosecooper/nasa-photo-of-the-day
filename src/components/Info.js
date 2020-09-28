import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Optima";
`;

// HEADER STYLES

const HeaderDiv = styled.div`
  width: 10%;
  background-color: rgb(255, 140, 0);
  opacity: 0.3;
`;

const StyledH1 = styled.h1`
  font-size: 7rem;
  line-height: 11rem;
  margin: 0 auto;
`;

const Header = styled.div`
  margin: 20px;
`;

// DATA STYLES

const InfoDiv = styled.div`
  margin-top: 5%;
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  text-transform: lowercase;
`;

const MainInfo = styled.div`
  padding: 3%;
  border: 2px solid gray;
`;

// DATA TITLE
const Title = styled.h1`
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: underline;
`;

// DATE

const Date = styled.div`
  margin-top: 100%;
  font-style: italic;
`;

// INFO FUNCTION

const Info = ({ date, title, copyright, explanation }) => {
  console.log("props", title, copyright, explanation);
  const [isShown, setIsShown] = useState(false);

  return (
    <Wrapper>
      <HeaderDiv>
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
      </HeaderDiv>

      <InfoDiv
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        {isShown && (
          <MainInfo>
            <Title>{title}</Title>
            <p>photographer: {copyright}</p>
            <p>{explanation}</p>
          </MainInfo>
        )}
        <Date>
          <p>{date}</p>
        </Date>
      </InfoDiv>
    </Wrapper>
  );
};

export default Info;
