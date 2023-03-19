import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="text-white">
      <ThreeDots height="100" width="100" color="grey" arialLabel="loading" />
    </div>
  );
};

export default Loader;
