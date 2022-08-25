/*
----------------------------------------
Title:    App.js
Date:     Aug 22, 2022
Author:   Chassity
----------------------------------------
*/

import React, { useState, useMemo, useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Pagination from "./Pagination";
import "./CryptoTable.scss";

let PageSize = 10;
function CryptoTable() {
  const [currentTableData, setCurrentTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [allData, setAllData] = useState([]);
  const [reverse, setReverse] = useState(true);

  const handleListsSortedByPrice = () => {
    console.log("Event Listener");
    const changeData = [...allData];
    reverse
      ? changeData.sort(function (a, b) {
          return b.current_price - a.current_price;
        })
      : changeData.sort(function (a, b) {
          return a.current_price - b.current_price;
        });

    setReverse(!reverse);

    console.log("changeData", changeData);
    setAllData(changeData);
  };

  const fetchData = async () => {
    console.log("asdf");
    const res = await axios(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
    console.log("crypto currency", res.data);
    return res.data;
  };

  const { data, status } = useQuery("cryptoInfo", fetchData);

  useEffect(() => {
    if (data) {
      setAllData(data);
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      const currentTableData = data.slice(firstPageIndex, lastPageIndex);
      setCurrentTableData(currentTableData);
    }
  }, [data]);

  useEffect(() => {
    if (allData) {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      const currentTableData = allData.slice(firstPageIndex, lastPageIndex);
      setCurrentTableData(currentTableData);
    }
  }, [allData]);

  console.log("datas", data);

  const handleSetPage = (page) => {
    setCurrentPage(page);
    const firstPageIndex = (page - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    const currentTableData = allData.slice(firstPageIndex, lastPageIndex);
    setCurrentTableData(currentTableData);
  };

  return (
    <div>
      <h1>CryptoTable</h1>
      {status === "error" && <p>Error fetching data...</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && (
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="py-3 px-6">
                  <div class="flex items-center">
                    ID
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="ml-1 w-3 h-3"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 320 512"
                      >
                        <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" class="py-3 px-6">
                  <div class="flex items-center">
                    NAME
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="ml-1 w-3 h-3"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 320 512"
                      >
                        <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" class="py-3 px-6">
                  <div class="flex items-center">
                    IMAGE
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="ml-1 w-3 h-3"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 320 512"
                      >
                        <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" class="py-3 px-6">
                  <div class="flex items-center">
                    MARKET CAPACITY
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="ml-1 w-3 h-3"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 320 512"
                      >
                        <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" class="py-3 px-6">
                  <div class="flex items-center">
                    PRICE
                    <button onClick={handleListsSortedByPrice}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="ml-1 w-3 h-3"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 320 512"
                      >
                        <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                      </svg>
                    </button>
                  </div>
                </th>
                <th scope="col" class="py-3 px-6">
                  <div class="flex items-center">
                    VOLUME
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="ml-1 w-3 h-3"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 320 512"
                      >
                        <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                      </svg>
                    </a>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {currentTableData.map((item) => {
                return (
                  <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={item.id}
                  >
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.id}
                    </th>
                    <td class="py-4 px-6">{item.name}</td>
                    <td class="py-4 px-6">
                      <img
                        src={item.image}
                        height="30px"
                        width=" 30px"
                        alt="crypto"
                      />
                    </td>
                    <td class="py-4 px-6">{item.market_cap}</td>
                    <td class="py-4 px-6">{item.current_price}</td>
                    <td class="py-4 px-6 ">{item.total_volume}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={data.length}
            pageSize={PageSize}
            onPageChange={(page) => handleSetPage(page)}
          />
        </div>
      )}
    </div>
  );
}

export default CryptoTable;
