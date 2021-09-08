import React from "react";
import Lottie from "react-lottie";
import * as loading from "./loading/data.json";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="loading">
      <Lottie options={defaultOptions} height={300} width={300} />
    </div>
  );
};

export default Loading;
