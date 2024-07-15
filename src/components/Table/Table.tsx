import { useState } from "react";

type TableProps<T> = {
  data: T[];
  columns: TableColumn<T>[];
};

export type TableColumn<T> = {
  key: keyof T;
  header: string;
};

const Table = <T,>({ data, columns }: TableProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const totalPages = Math.ceil(data.length / rowsPerPage);

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
  const paginatedData = data.slice(startIdx, startIdx + rowsPerPage);

  return (
    <div className="overflow-x-auto">
      <div className="min-w-max">
        <table className="w-full mt-4 text-left">
          <thead>
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key as string}
                  className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50 whitespace-nowrap"
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                {columns.map((col) => (
                  <td
                    key={col.key as string}
                    className="p-4 border-b border-blue-gray-50 whitespace-nowrap"
                  >
                    {String(item[col.key])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between p-4 border-t border-blue-gray-50">
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
          Page {currentPage} of {totalPages}
        </p>
        <div className="flex gap-2">
          <button
            className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
