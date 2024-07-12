import { useQuery } from "@tanstack/react-query";
import Table from "../components/Table/Table";
import { api } from "../utils/api";
import { API_ENDPOINTS } from "../utils/endPoints";
import { DailyTimeSeriesResponse } from "../interfaces/DailyTimeSeries.interface";

const DailyTimeSeries = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["TIME_SERIES_DAILY"],
    queryFn: () =>
      api
        .get<DailyTimeSeriesResponse>(API_ENDPOINTS.TIME_SERIES_DAILY)
        .then((res) => res.data),
  });

  return (
    <div className="p-10">
      {!isLoading && data ? <Table data={data} /> : "Loading..."}
    </div>
  );
};

export default DailyTimeSeries;
