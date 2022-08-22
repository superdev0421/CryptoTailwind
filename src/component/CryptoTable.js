/*
----------------------------------------
Title:    App.js
Date:     Aug 22, 2022
Author:   Edward Liu
----------------------------------------
*/

import { useQuery } from "react-query";

const fetchData = async () => {
  const res = await fetch("https://api.coincap.io/v2/assets");
  return res.json();
};

function CryptoTable() {
  const { status, isStale, isFetching, error, data } = useQuery(
    "cryptoInfo",
    fetchData
  );
  console.log(status, isStale, isFetching, error, data);
  return (
    <div>
      <h1>CryptoTable</h1>
      {status === "error" && <p>Error fetching data...</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && (
        <div>
          {data.data.map((coin) => (
            <p key={coin.id}>{coin.name}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default CryptoTable;
