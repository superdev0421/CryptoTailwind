/*
----------------------------------------
Title:    Pagination.js
Date:     Aug 22, 2022
Author:   Edward Liu
----------------------------------------
*/

import React from "react";

function Pagination({ currentPage, totalPage, onSelectPage }) {
  const items = [];
  for (let i = 1; i <= totalPage; i++) {
    items.push(
      <li key={i}>
        <button
          onClick={(e) => onSelectPage(i)}
          className={
            i === currentPage
              ? "py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              : "py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          }
        >
          {i}
        </button>
      </li>
    );
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px">
        <li>
          <button
            onClick={(e) =>
              onSelectPage(currentPage - 1 === 0 ? 1 : currentPage - 1)
            }
            className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Previous
          </button>
        </li>
        {items}
        <li>
          <button
            onClick={(e) =>
              onSelectPage(
                currentPage + 1 > totalPage ? totalPage : currentPage + 1
              )
            }
            className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
