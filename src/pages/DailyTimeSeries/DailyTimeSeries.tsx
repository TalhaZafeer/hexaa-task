import {
  DailyTimeSeriesResponse,
  TimeSeriesDaily,
} from "../../interfaces/DailyTimeSeries.interface";
import { fetchDailyTimeSeries } from "../../utils/endPoints";
import Table from "../../components/Table/Table";
import Spinner from "../../components/Spinner/Spinner";
import useFetch from "../../hooks/useFetch";
import { dailyTimeSeriesColumns } from "../../common/data";

const DailyTimeSeries = () => {
  const { data, isLoading, isRefetching } = useFetch<DailyTimeSeriesResponse>(
    "TIME_SERIES_DAILY",
    fetchDailyTimeSeries
  );

  // Transform data into an array of objects
  const transformedData: TimeSeriesDaily[] = data
    ? Object.values(data["Time Series (Daily)"])
    : [];

  return (
    <div className="flex items-center justify-center h-full">
      {isLoading || isRefetching ? (
        <Spinner />
      ) : (
        <Table
          title="Daily Time Series"
          data={transformedData}
          columns={dailyTimeSeriesColumns}
          rowsPerPage={10}
        />
      )}
    </div>
  );
};

export default DailyTimeSeries;
