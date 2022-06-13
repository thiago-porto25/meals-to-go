import camelize from "camelize";
import axios from "axios";

import { functionsBaseURL, isMock } from "../../utils/env";

export const locationRequest = async (searchTerm) => {
  const response = await axios.get(`${functionsBaseURL}/geocode`, {
    params: { city: searchTerm, mock: isMock },
  });
  return await response.data;
};

export const locationTransform = (data) => {
  const { geometry } = camelize(data.results)[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
