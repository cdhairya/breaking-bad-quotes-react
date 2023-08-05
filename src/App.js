import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/ui/Header";
import QuotesGrid from "./quotes/QuotesGrid";

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchQuotes = async () => {
      const result = await axios.get(
        `https://api.breakingbadquotes.xyz/v1/quotes/3`
      );
      setQuotes(result.data);
      setIsLoading(false);
    };
    fetchQuotes();
  }, []);

  return (
    <div className="container">
      <Header />
      <QuotesGrid isLoading={isLoading} quotes={quotes} />
    </div>
  );
};

export default App;
