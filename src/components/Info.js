import React from "react";
import styled from "styled-components";

const Wrapper= styled.div`
display: flex;
justify-content: space-between;
`
const Experiment = styled.div`
  width: 10%;
  background-color: red;
`;

const StyledH1 = styled.h1`
  font-size: 7rem;
  line-height: 11rem;
  margin: 0 auto;
`;

const Header = styled.div`
  margin: 20px;
`;

const Experiment2 = styled.div`
  margin-top: 30px;
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  
  
`

const Date= styled.div`
background-color: red;
`

const Info = ({ picture, date, title, copyright, explanation }) => {
  console.log("props", title, copyright, explanation);
  return (
    <Wrapper>
    
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
      </Experiment>

      <Experiment2>
        <div>
        <h1>{title}</h1>
        <p>{copyright}</p>
        <p>{explanation}</p>
        </div>
        <Date>
        <p>{date}</p>
        </Date>
        </Experiment2>

    </Wrapper>
  );
};

export default Info;
