import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = async (
  location = "37.7749295,-122.4194155"
) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];

    if (!mock) {
      reject("not found");
    }

    resolve(mock);
  });
};

export const restaurantsTransform = (result = []) => {
  const mappedResults = result.results.map((restaurant) => {
    return {
      ...restaurant,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      photos: restaurant.photos.map(
        (_) => mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]
      ),
    };
  });

  return camelize(mappedResults);
};
