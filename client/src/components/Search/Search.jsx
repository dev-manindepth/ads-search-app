import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Button from "../Button/Button";
import "./search.css";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState(undefined);
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");


  let searchUrl = `http://localhost:8000/api/v1/ads/search?searchTerm=${searchTerm}`;

  useEffect(() => {
    searchTerm && axios(searchUrl)
      .then((data) => setResult(data.data.ads))
      .catch((err) => setError(err.message));
  }, [searchTerm]);

  return (
    <div className="searchContainer">
      <h1 className="searchTitle">
        Search Ads by company name, primary text, headline, and description
      </h1>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Ads"
        className="inputContainer"
      />
      <div className="resultContainer">
        {searchTerm && result &&
          result.map((res) => {
            return (
              <div className="adsContainer">
                <div className="imgContainer">
                  <img src={res.imgUrl} alt="" />
                </div>
                <div className="textContainer">
                  <p className="headline">{res.headline}</p>
                  <p className="primaryText">{res.primaryText}</p>
                  <Button text={res.cta} link={res.company.url} />
                </div>
              </div>
            );
          })}
        {error && <h1>Error 🔥🔥 {error}</h1>}
      </div>
    </div>
  );
};

export default Search;
