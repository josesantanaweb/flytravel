import React from "react";
const TitleSection = ({
  title,
  titleCaption,
  subtitle,
  subtitleCaption,
  center,
}) => {
  return (
    <>
      <h3
        center={center}
        className={`title-section ${center && "text-center"}`}
      >
        {title}
        <span>{titleCaption}</span>
      </h3>
      <p
        center={center}
        className={`subtitle-section ${center && "text-center"}`}
      >
        {subtitle}
        <span>{subtitleCaption}</span>
      </p>
    </>
  );
};

export default TitleSection;
