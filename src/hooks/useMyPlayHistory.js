import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import apiClient from "../constants/api-client";

const postMobileNumber = (params) =>
  apiClient
    .get("bet-details/", { params })
    .then((res) => {
      return res.data || {}; 
    })
    .catch((error) => {
      throw error;
    });

const useMyPlayHistory = ({ market = "", date = "2024-12-14", initialPage = 1, pageSize = 10 } = {}) => {
  const [page, setPage] = useState(initialPage);



  const params = {
    ...(market && { market }),
    ...(date && { date }),
    page,
    page_size: pageSize, 
  };

  const {
    data: myPlayHistory,
    error,
    isLoading,
    isPreviousData,
    refetch,
  } = useQuery({
    queryKey: ["MyPlayHistory", params],
    queryFn: () => postMobileNumber(params),
    keepPreviousData: true, 
    onSuccess: (data) => {

    },
    onError: (error) => {
    },
  });

  const nextPage = () => {
    if (myPlayHistory?.next) {
      setPage((prev) => prev + 1); // Increment page number
    }
  };

  const prevPage = () => {
    if (myPlayHistory?.previous) {
      setPage((prev) => prev - 1); // Decrement page number
    }
  };

  const isNextDisabled = !myPlayHistory?.next;
  const isPrevDisabled = !myPlayHistory?.previous;

  return {
    myPlayHistory: myPlayHistory?.results || [], // Extract results
    error,
    isLoading,
    refetch,
    nextPage,
    prevPage,
    isNextDisabled,
    isPrevDisabled,
    currentPage: page,
  };
};

export default useMyPlayHistory;
