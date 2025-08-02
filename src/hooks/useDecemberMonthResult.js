import { useQuery } from "@tanstack/react-query";
import { adminApiClient } from "../constants/api-client";

// Function to fetch December month results
const fetchDecemberMonthResult = (params) =>
  adminApiClient.get("result-list-live-result/", { params }).then((res) => res.data);

// Custom Hook
const useDecemberMonthResult = ({
  date = "",
  bet_key = "",
  market = "",
  refund = "",
  active = "",
  start_date = "",
  end_date = "",
  search_query = "",
} = {}) => {
  const params = {
    ...(date && { year_month: date }),
    ...(bet_key && { bet_key }),
    ...(market && { market }),
    ...(refund && { refund }),
    ...(active && { active }),
    ...(start_date && { start_date }),
    ...(end_date && { end_date }),
    ...(search_query && { search_query }),
  };

  const { data: result, error, isLoading } = useQuery({
    queryKey: ["December Month Results", params],
    queryFn: () => fetchDecemberMonthResult(params),
    enabled: Object.keys(params).length > 0,
  });

  return { result, error, isLoading };
};

export default useDecemberMonthResult;
