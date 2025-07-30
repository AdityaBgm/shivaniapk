import { useQuery } from '@tanstack/react-query';
import apiClient from '../constants/api-client';

const fetchMarkets = () =>
  apiClient.get(`all-market`).then(res => res.data?.markets);

const useAllMarkets = () => {
  return useQuery({
    queryKey: ['Markets'],
    queryFn: fetchMarkets,
  });
};

export default useAllMarkets;
