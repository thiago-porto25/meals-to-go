import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useAuthContext } from "../auth/auth.context";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const { user } = useAuthContext();

  const addFavorite = (restaurant) => {
    setFavorites([...favorites, restaurant]);
  };

  const removeFavorite = (restaurant) => {
    const newFavorites = favorites.filter(
      (fav) => fav.placeId !== restaurant.placeId
    );

    setFavorites(newFavorites);
  };

  const saveFavorites = async (value, uid) => {
    try {
      await AsyncStorage.setItem(`@favorites-${uid}`, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  const loadFavorites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favorites-${uid}`);

      if (value !== null) {
        setFavorites(JSON.parse(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      loadFavorites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      saveFavorites(favorites, user.uid);
    }
  }, [favorites, user]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);

  if (context === undefined) {
    throw new Error(
      "useFavoritesContext must be used within a FavoritesProvider"
    );
  }

  return context;
};
