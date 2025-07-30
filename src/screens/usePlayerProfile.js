import { useMutation } from "@tanstack/react-query";
import { apiClientNode } from "../constants/api-client";


const usePlaceBet = () => {
  const { data: playerData } = usePlayerProfile();

  return useMutation({
    mutationFn: (betArray) => {
      const payload = {
        mobile: playerData?.mobile,
        bets: betArray, 
      };
      return apiClientNode.post("create-bet/", payload);
    },
    onSuccess: (response) => {
      console.log("Bet placed successfully:", response.data);
    },
    onError: (error) => {
      console.error("Failed to place bet222:", error);
    },
  });
};

export default usePlaceBet;
