import Spinner from "../../components/Spinner/Spinner";
import Table from "../../components/Table/Table";
import { historicalOptionsColumns } from "../../constants";
import useFetch from "../../hooks/useFetch";
import {
  HistoricalOptionsApiResponse,
  HistoricalOptionsContract,
} from "../../interfaces/HistoricalOptions.interface";
import { fetchHistoricalOptions } from "../../utils/endPoints";

const HistoricalOptions = () => {
  const { data, isLoading, isRefetching } =
    useFetch<HistoricalOptionsApiResponse>(
      "Historical Options",
      fetchHistoricalOptions
    );

  const transformedData: HistoricalOptionsContract[] = data ? data.data : [];

  return (
    <div className="flex items-center justify-center p-10 h-full">
      {isLoading || isRefetching ? (
        <Spinner />
      ) : (
        <Table data={transformedData} columns={historicalOptionsColumns} />
      )}
    </div>
  );
};

export default HistoricalOptions;
