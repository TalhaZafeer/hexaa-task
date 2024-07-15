import { useState } from "react";
import Pagination from "../Pagination/Pagination";

type TableProps<T> = {
  data: T[];
  columns: TableColumn<T>[];
  rowsPerPage: number;
  title: string;
};

export type TableColumn<T> = {
  key: keyof T;
  header: string;
};

const Table = <T,>({ data, columns, rowsPerPage, title }: TableProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIdx = (currentPage - 1) * rowsPerPage;
  const paginatedData = data.slice(startIdx, startIdx + rowsPerPage);

  return (
    <div className="h-full w-full ">
      <h1 className="text-3xl font-semibold leading-tight text-gray-900">
        {title}
      </h1>
      <div className=" overflow-x-auto">
        <table className="w-full mt-4 text-left">
          <thead>
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key as string}
                  className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50 whitespace-nowrap "
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
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Table;
