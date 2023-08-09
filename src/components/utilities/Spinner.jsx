import React from "react";
import Loader from "../../img/spinner.gif";

const Spinner = () => {
  return (
    <div>
      <div className="mx-auto w-20">
        <img src={Loader} alt="Loading..." />
      </div>
    </div>
  );
};

export default Spinner;
