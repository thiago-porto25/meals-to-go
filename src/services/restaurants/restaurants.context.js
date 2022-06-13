import { useState, useEffect, createContext, useContext } from "react";
import { useLocationContext } from "../location/location.context";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useLocationContext();

  const retrieveRestaurants = async (loc) => {
    setIsLoading(true);
    setRestaurants([]);

    try {
      const result = await restaurantsRequest(loc);
      const transformedResult = restaurantsTransform(result);
      setRestaurants(transformedResult);
    } catch (e) {
      setError(e);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};

export const useRestaurantsContext = () => {
  const context = useContext(RestaurantsContext);

  if (context === undefined) {
    throw new Error(
      "useRestaurantsContext must be used within a RestaurantsContextProvider"
    );
  }

  return context;
};
