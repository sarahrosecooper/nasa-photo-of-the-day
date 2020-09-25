import React from "react";

const PictureData = ({ pictureData }) => {
  console.log("props", pictureData);
  return (
    <div>
      <h1>{pictureData.title}</h1>
      <img src={pictureData.url} alt="see below" />
      <p>{pictureData.date}</p>
      <p>{pictureData.copyright}</p>
      <p>{pictureData.explanation}</p>
    </div>
  );
};

export default PictureData;
