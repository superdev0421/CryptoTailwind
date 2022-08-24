/*
----------------------------------------
Title:    App.js
Date:     Aug 22, 2022
Author:   Chassity
----------------------------------------
*/


import React, {useState, useEffect} from 'react'
import { useQuery } from "react-query";
import Coin from './Coin' 
import axios from 'axios'



function CryptoTable() {
  const fetchData = async () => {
    console.log("asdf");
    const res = await axios(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    console.log('crypto currency', res.data);
    return res.data;
  };
  
  const { data,  status } = useQuery(
    "cryptoInfo",
     fetchData
  );
  console.log(status, data);
  return (
    <div>
      <h1>CryptoTable</h1>
        {status === "error" && <p>Error fetching data...</p>}
        {status === "loading" && <p>Fetching data...</p>}
        {status === "success" && (
          <div>
            {data.map(coin => {
              return (  
                <Coin
                  key={coin.id}
                  id={coin.id}
                  name={coin.name}
                  image={coin.image}
                  symbol={coin.symbol}
                  marketcap={coin.market_cap}
                  price={coin.current_price}
                  priceChange={coin.price_change_percentage_24h}
                  volume={coin.total_volume}
                  ath={coin.ath}
                  ath_date={coin.ath_date}
                  circulating_supply={coin.circulating_supply}
                  max_supply={coin.max_supply}
                />
              )
        })}
          </div>
        )}
    </div>
  );
}

export default CryptoTable;
