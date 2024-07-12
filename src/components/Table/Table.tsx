import React, { useState } from "react";
import {
  DailyTimeSeriesResponse,
  TimeSeriesDaily,
  TimeSeriesData,
} from "../../interfaces/DailyTimeSeries.interface";

type Props = {
  data: DailyTimeSeriesResponse;
};

const Table: React.FC<Props> = ({ data }) => {
  const dataKey = Object.keys(data).find((key) => key !== "Meta Data");

  const extractedData = data[dataKey!] as TimeSeriesData;
  const dates = Object.keys(extractedData);
  const columns =
    dates.length > 0
      ? Object.keys(extractedData[dates[0] as keyof typeof extractedData])
      : [];

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const totalPages = Math.ceil(dates.length / rowsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIdx = (currentPage - 1) * rowsPerPage;
  const paginatedDates = dates.slice(startIdx, startIdx + rowsPerPage);

  const startEntry = startIdx + 1;
  const endEntry = startIdx + paginatedDates.length;
  const totalEntries = dates.length;

  console.log(extractedData);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-extractedData4 border-b border-gray-200 bg-gray-50 text-center">
                Date
              </th>
              {columns.map((col) => (
                <th
                  key={col}
                  className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-center"
                >
                  {col.replace(/^\d+\. /, "")}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedDates.map((date, idx) => (
              <tr
                key={date}
                className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="py-2 px-4 border-b border-gray-200 text-center">
                  {date}
                </td>
                {columns.map((col) => (
                  <td
                    key={col}
                    className="py-2 px-4 border-b border-gray-200 text-center"
                  >
                    {extractedData[date][col as keyof TimeSeriesDaily]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between  mt-4">
        <div>
          Showing entries from {startEntry} to {endEntry} of {totalEntries}{" "}
          entries
        </div>
        <div className="flex gap-5 items-center">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
