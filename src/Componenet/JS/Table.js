import React, { useEffect, useState } from "react";
import "../CSS/Navbar.css";
function Table() {
  const [storeData, setStoreData] = useState([]);

  const fetchData = async () => {
    try {
      const url = "https://api.coincap.io/v2/assets?limit=10";
      const response = await fetch(url);
      const data = await response.json();
      setStoreData(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const date = new Date();
  let getFullDate = date.toDateString();
  return (
    <>
      <div className="table_main_container">
        <div className="title_date">
          <h2>Crypto Dashboard!</h2>
          <p id="date">{getFullDate}</p>
        </div>
        <table className="table table-striped table-dark" id="table_container">
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Name</th>
              <th scope="col">Symbol</th>
              <th scope="col">Price(USD)</th>
              <th scope="col">24h</th>
              <th scope="col">Volume</th>
              <th scope="col">Market Cap</th>
              <th scope="col">Explore More</th>
            </tr>
          </thead>
          <tbody>
            {storeData.map((asset) => (
              <tr key={asset.id}>
                <td>{asset.rank}</td>
                <td>{asset.name}</td>
                <td>{asset.symbol}</td>
                <td>${Number(asset.priceUsd).toFixed(2)}</td>
                <td>${Number(asset.changePercent24Hr).toFixed(2)}</td>
                <td>${parseInt(asset.volumeUsd24Hr)}</td>
                <td>${parseInt(asset.marketCapUsd)}</td>
                <td>
                  <a
                    href={asset.explorer}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {asset.explorer.slice(0, 20)}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
