// import useFetch from "../../hooks/useFetch";
// import { fetchNewsFeed } from "../../utils/endPoints";
// import Card from "../../components/Card/Card";
// import Spinner from "../../components/Spinner/Spinner";

// const NewsFeed = () => {
//   const { data, isLoading, isRefetching } = useFetch(
//     "News Feed",
//     fetchNewsFeed
//   );

//   console.log(data);
//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       {isLoading || isRefetching ? (
//         <Spinner />
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
//           {data?.feed.map((feed) => (
//             <Card
//               key={feed.url}
//               bannerURL={feed.banner_image}
//               description={feed.summary}
//               title={feed.title}
//               readMoreURL={feed.url}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default NewsFeed;

import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { fetchNewsFeed } from "../../utils/endPoints";
import Card from "../../components/Card/Card";
import Spinner from "../../components/Spinner/Spinner";

const NewsFeed = () => {
  const { data, isLoading, isRefetching } = useFetch(
    "News Feed",
    fetchNewsFeed
  );

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items to display per page

  // Calculate indexes for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.feed.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data?.feed.length || 1 / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      {isLoading || isRefetching ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {currentItems?.map((feed) => (
            <Card
              key={feed.url}
              bannerURL={feed.banner_image}
              description={feed.summary}
              title={feed.title}
              readMoreURL={feed.url}
            />
          ))}
          <div className="flex items-center justify-between p-4 border-t border-blue-gray-50">
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              Page {currentPage} of {totalPages}
            </p>
            <div className="flex gap-2">
              <button
                className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <button
                className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                onClick={nextPage}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsFeed;
