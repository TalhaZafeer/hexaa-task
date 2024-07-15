import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { fetchNewsFeed } from "../../utils/endPoints";
import Card from "../../components/Card/Card";
import Spinner from "../../components/Spinner/Spinner";
import Pagination from "../../components/Pagination/Pagination";

const NewsFeed = () => {
  const { data, isLoading, isRefetching } = useFetch(
    "News Feed",
    fetchNewsFeed
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Calculate pagination details
  const totalPages = Math.ceil((data?.feed?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data?.feed.slice(startIndex, endIndex);

  return (
    <div className="flex justify-center items-center min-h-screen">
      {isLoading || isRefetching ? (
        <Spinner />
      ) : (
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-semibold leading-tight text-gray-900">
            News Feed
          </h1>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
            {paginatedData?.map((feed) => (
              <Card
                key={feed.url}
                bannerURL={feed.banner_image}
                description={feed.summary}
                title={feed.title}
                readMoreURL={feed.url}
              />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default NewsFeed;
