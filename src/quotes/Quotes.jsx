import React from "react";

const Quotes = ({ quote, author }) => {
  return (
    <div className=" bg-[#132c13] shadow-lg rounded-lg h-auto p-4 text-center flex justify-center items-center">
      <div>
        <p className="font-sans font-light text-gray-200 text-xl mb-4">
          {quote}
        </p>
        <h3 className="font-bold text-md text-green-700">{author}</h3>
      </div>
    </div>
  );
};

export default Quotes;
