import {
  HistoricalOptionsApiResponse,
  HistoricalOptionsContract,
} from "../../interfaces/HistoricalOptions.interface";
import Spinner from "../../components/Spinner/Spinner";
import Table from "../../components/Table/Table";
import { historicalOptionsColumns } from "../../common/data";
import useFetch from "../../hooks/useFetch";
import { fetchHistoricalOptions } from "../../utils/endPoints";

const HistoricalOptions = () => {
  const { data, isLoading, isRefetching } =
    useFetch<HistoricalOptionsApiResponse>(
      "Historical Options",
      fetchHistoricalOptions
    );

  const transformedData: HistoricalOptionsContract[] = data ? data.data : [];

  return (
    <div className="flex items-center justify-center h-full">
      {isLoading || isRefetching ? (
        <Spinner />
      ) : (
        <Table
          data={transformedData}
          columns={historicalOptionsColumns}
          rowsPerPage={10}
          title="Historical Options"
        />
      )}
    </div>
  );
};

export default HistoricalOptions;
