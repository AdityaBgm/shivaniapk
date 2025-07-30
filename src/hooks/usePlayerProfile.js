import { useQuery } from "@tanstack/react-query";
import apiClient from "../constants/api-client";


const fetchPlayerProfile = async () => {
  const res = await apiClient.get("player-profile");
    console.log("API response:", res.data)
  return res.data?.data;
};

export const  usePlayerProfile = () => {
  return useQuery({
    queryKey: ["player-profile"],
    queryFn: fetchPlayerProfile,
  });
};
