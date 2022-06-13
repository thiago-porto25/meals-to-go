import { useState, useContext, createContext, useEffect } from "react";

import { locationRequest, locationTransform } from "./location.service";

const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [keyword, setKeyword] = useState("San Francisco");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSearch = (searchKeyword) => {
    if (!searchKeyword) {
      return;
    }

    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  const retrieveLocation = async (searchKeyword) => {
    if (!searchKeyword) {
      return setIsLoading(false);
    }

    try {
      const result = await locationRequest(searchKeyword);
      const transformedResult = locationTransform(result);
      setLocation(transformedResult);
    } catch (e) {
      setError(e);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    retrieveLocation(keyword);
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationContext = () => {
  const context = useContext(LocationContext);

  if (context === undefined) {
    throw new Error(
      "useLocationContext must be used within a LocationContextProvider"
    );
  }

  return context;
};
