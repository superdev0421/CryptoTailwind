/*
----------------------------------------
Title:    Container.js
Date:     Aug 23, 2022
Author:   Edward Liu
----------------------------------------
*/

//  External Dependencies
import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";

//  Internal Dependencies
import { CryptoTable, Pagination } from "../component";
import "./Container.css";

//  Get Crypto Data
const fetchData = async () => {
  const res = await fetch("https://api.coincap.io/v2/assets");
  return res.json();
};

function Container() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [tableData, setTableData] = useState([
    // { name: "A", symbol: "A", priceUsd: "100", marketCapUsd: "500" },
    // { name: "G", symbol: "G", priceUsd: "700", marketCapUsd: "3500" },
    // { name: "C", symbol: "C", priceUsd: "300", marketCapUsd: "1500" },
    // { name: "F", symbol: "F", priceUsd: "600", marketCapUsd: "3000" },
    // { name: "E", symbol: "E", priceUsd: "500", marketCapUsd: "2500" },
    // { name: "D", symbol: "D", priceUsd: "400", marketCapUsd: "2000" },
    // { name: "B", symbol: "B", priceUsd: "200", marketCapUsd: "1000" },
  ]);
  const [pageSize, setPageSize] = useState(10);
  const { status, isStale, isFetching, error, data } = useQuery(
    "cryptoInfo",
    fetchData
  );

  useEffect(() => {
    if (status === "error") {
      setTableData([]);
      setCurrentPage(1);
      setTotalPage(1);
    } else if (status === "loading") {
      setTableData([]);
      setCurrentPage(1);
      setTotalPage(1);
    } else if (status === "success") {
      setTableData(data.data);
      setCurrentPage(1);
      setTotalPage(Math.ceil(data.data.length / pageSize));
    }
  }, [status]);

  let content;
  if (status === "error") {
    content = <p>Error Fetching Data ...</p>;
  } else if (status === "loading") {
    content = <p>Fetching Data ...</p>;
  } else if (status === "success") {
    content = (
      <React.Fragment>
        <CryptoTable
          data={tableData}
          currentPage={currentPage}
          pageSize={pageSize}
        />
        <Pagination
          currentPage={currentPage}
          totalPage={totalPage}
          onSelectPage={setCurrentPage}
        />
      </React.Fragment>
    );
  }

  return <div className="Container">{content}</div>;
}

export default Container;
