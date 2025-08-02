// import { useMutation } from "@tanstack/react-query";
// import { apiClientNode } from "../constants/api-client";
// import { usePlayerProfile } from "./usePlayerProfile";

// const usePlaceBet = () => {
//   const { data: playerData } = usePlayerProfile();

//   return useMutation({
//     mutationFn: (betArray) => {
//       const payload = {
//         mobile: playerData?.mobile,
//         bets: betArray, 
//       };
//       return apiClientNode.post("create-bet/", payload);
//     },
//     onSuccess: (response) => {
//       console.log("Bet placed successfully:", response.data);
//     },
//     onError: (error) => {
//       console.error("Failed to place bet:", error);
//     },
//   });
// };

// export default usePlaceBet;


import { useMutation } from "@tanstack/react-query";
import { apiClientNode } from "../constants/api-client";
import { usePlayerProfile } from "./usePlayerProfile";

const usePlaceBet = () => {
  const { data: playerData } = usePlayerProfile();

  return useMutation({
    mutationFn: (betArray) => {
      if (!playerData?.mobile) {
        throw new Error("Mobile number is missing from player data.");
      }

      const payload = {
        mobile: playerData.mobile,
        bets: betArray,
      };

      console.log("🚀 Sending Payload:", JSON.stringify(payload, null, 2));
      return apiClientNode.post("create-bet/", payload);
    },
    onSuccess: (response) => {
      console.log("✅ Bet placed successfully:", response.data);
    },
    onError: (error) => {
      console.error("❌ Failed to place bet:", error);
    },
  });
};

export default usePlaceBet;
