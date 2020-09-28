import React, { useEffect, useState } from "react";
import Info from "./Info";
import axios from "axios";
import styled from "styled-components";

// https://api.nasa.gov/planetary/apod/ctGpxeU4La75WnR2hbjKFJhQhoWwWXLU6ENqViDU


const IncomingData = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod/?api_key=ctGpxeU4La75WnR2hbjKFJhQhoWwWXLU6ENqViDU&date=2020-09-21"
      )
      .then((response) => {
        console.log("success", response);
        setInfo(response.data);
      })
      .catch((err) => console.log("Error!", err));
  }, []);

  return (
    <div id="picture"
      style={{
        backgroundImage: `url(${info.url})`,
      }}
      alt={info.title}
    >
      <div>
        <Info
          picture={info.url}
          date={info.date}
          title={info.title}
          copyright={info.copyright}
          explanation={info.explanation}
        />
      </div>
    </div>
  );
};

export default IncomingData;
