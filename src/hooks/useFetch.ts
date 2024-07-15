import { useQuery, UseQueryOptions } from "@tanstack/react-query";

const useFetch = <TData>(
  queryKey: string,
  queryFn: () => Promise<TData>,
  options?: UseQueryOptions<TData>
) => {
  return useQuery<TData>({
    queryKey: [queryKey],
    queryFn,
    ...options,
  });
};

export default useFetch;
