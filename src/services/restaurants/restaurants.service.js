import axios from "axios";
import camelize from "camelize";

import { functionsBaseURL } from "../../utils/env";

export const restaurantsRequest = async (location) => {
  const res = await axios.get(`${functionsBaseURL}/placesNearby`, {
    params: { location },
  });

  return await res.data;
};

export const restaurantsTransform = (result = []) => {
  const mappedResults = result.results.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
    };
  });

  return camelize(mappedResults);
};
