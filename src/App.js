import axios from "axios";
import { useState } from "react";
import "./App.css";
import "./index.css";
import Header from "./components/ui/Header";
import QuotesGrid from "./quotes/QuotesGrid";

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [quotesNumber, setQuotesNumber] = useState("");

  const fetchQuotes = async (quotesNumber) => {
    setIsLoading(true);
    const result = await axios.get(
      `https://api.breakingbadquotes.xyz/v1/quotes/${quotesNumber}`
    );
    console.log(quotes);
    setQuotes(result.data);
    setIsLoading(false);
  };

  const isValidInput = (input) => {
    return /[a-zA-Z]/.test(input);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (isValidInput(quotesNumber)) {
      alert("Please enter number greater than 0");
      setQuotesNumber("");
      return;
    }
    fetchQuotes(quotesNumber);
    setQuotesNumber("");
  };

  return (
    <div className="container pb-16">
      <Header />
      <form
        onSubmit={onSubmit}
        className=" w-full flex items-center justify-center my-8"
      >
        <input
          type="text"
          min="1"
          className="border rounded-l-md py-2 px-3 w-1/2 text-green-900 placeholder:text-md outline-none"
          placeholder="Number of quotes"
          value={quotesNumber}
          onChange={(e) => setQuotesNumber(e.target.value)}
        />
        <input
          type="submit"
          value="Generate"
          className="bg-green-800 hover:bg-green-700 text-white text-lg rounded-r-md py-2 px-4"
        />
      </form>
      <QuotesGrid isLoading={isLoading} quotes={quotes} />
    </div>
  );
};

export default App;
