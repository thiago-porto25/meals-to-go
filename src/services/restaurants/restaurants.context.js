import { useState, useMemo, useEffect, createContext, useContext } from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = () => {
    setIsLoading(true);

    setTimeout(() => {
      restaurantsRequest()
        .then(restaurantsTransform)
        .then((result) => setRestaurants(result))
        .catch((e) => setError(e))
        .finally(() => setIsLoading(false));
    }, 2000);
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);

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
