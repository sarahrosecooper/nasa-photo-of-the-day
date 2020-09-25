import React, { useEffect, useState } from "react";
import PictureData from "./PictureData";
import axios from "axios";

// https://api.nasa.gov/planetary/apod/ctGpxeU4La75WnR2hbjKFJhQhoWwWXLU6ENqViDU
const IncomingData = () => {
  const [pictureData, setPictureData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod/?api_key=ctGpxeU4La75WnR2hbjKFJhQhoWwWXLU6ENqViDU&date=2020-09-21"
      )
      .then((response) => {
        console.log("success", response);
        setPictureData(response.data);
      })
      .catch((err) => console.log("Error!", err));
  }, []);

  return (
    <div>
      <PictureData pictureData={pictureData} />
    </div>
  );
};

export default IncomingData;
