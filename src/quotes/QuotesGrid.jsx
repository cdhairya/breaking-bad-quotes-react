import React from "react";
import Quotes from "./Quotes";
import Spinner from "../components/utilities/Spinner";

const QuotesGrid = ({ isLoading, quotes }) => {
  return isLoading ? (
    <>
      <Spinner />
    </>
  ) : (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 ">
        {quotes.map((quote) => (
          <Quotes key={quote.quote} quote={quote.quote} author={quote.author} />
        ))}
      </div>
    </section>
  );
};

export default QuotesGrid;
