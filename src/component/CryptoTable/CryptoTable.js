/*
----------------------------------------
Title:    CryptoTable.js
Date:     Aug 22, 2022
Author:   Edward Liu
----------------------------------------
*/

//  External Dependencies
import { useState } from "react";

//  Internal Dependencies
import "./CryptoTable.css";

function CryptoTable({ data, currentPage, pageSize }) {
  const [sortFlag, setSortFlag] = useState(0);
  //  Configuring Items
  data.sort((item1, item2) => {
    const priceUsdA = Number(item1.priceUsd);
    const marketCapUsdA = Number(item1.marketCapUsd);
    const priceUsdB = Number(item2.priceUsd);
    const marketCapUsdB = Number(item2.marketCapUsd);
    switch (sortFlag) {
      case -2:
        return marketCapUsdA < marketCapUsdB
          ? 1
          : marketCapUsdA === marketCapUsdB
          ? 0
          : -1;
      case -1:
        return priceUsdA < priceUsdB ? 1 : priceUsdA === priceUsdB ? 0 : -1;
      case 0:
        return 1;
      case 1:
        return priceUsdA > priceUsdB ? 1 : priceUsdA === priceUsdB ? 0 : -1;
      case 2:
        return marketCapUsdA > marketCapUsdB
          ? 1
          : marketCapUsdA === marketCapUsdB
          ? 0
          : -1;
      default:
        break;
    }
    return 0;
  });
  const tableContent = data.map((items, index) => {
    if (
      index >= (currentPage - 1) * pageSize &&
      index < currentPage * pageSize
    ) {
      return (
        <tr
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          key={items.symbol}
        >
          <th
            scope="row"
            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {items.name}
          </th>
          <td className="py-4 px-6">{items.symbol}</td>
          <td className="py-4 px-6">{Number(items.priceUsd).toFixed(2)}</td>
          <td className="py-4 px-6">{Number(items.marketCapUsd).toFixed(2)}</td>
        </tr>
      );
    }
    return null;
  });

  const onSortClick = (columnNumber) => {
    if (sortFlag === Math.abs(columnNumber)) {
      setSortFlag(-columnNumber);
    } else setSortFlag(columnNumber);
  };

  return (
    <div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg ml-5 mr-5">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            CryptoCoins
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              Browse a list of CryptoCoins to help you work and play, get
              answers, keep in touch, grow your business, and more.
            </p>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                <div className="flex items-center">Symbol</div>
              </th>
              <th scope="col" className="py-3 px-6">
                <div className="flex items-center">
                  Price
                  <div className="sortIcon" onClick={(e) => onSortClick(1)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 w-3 h-3"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </div>
                </div>
              </th>
              <th scope="col" className="py-3 px-6">
                <div className="flex items-center">
                  Market Capacity
                  <div className="sortIcon" onClick={(e) => onSortClick(2)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 w-3 h-3"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>{tableContent}</tbody>
        </table>
      </div>
    </div>
  );
}

export default CryptoTable;
