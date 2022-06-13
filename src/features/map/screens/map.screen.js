import { useState, useEffect } from "react";
import styled from "styled-components/native";
import MapView from "react-native-maps";

import { useLocationContext } from "../../../services/location/location.context";
import { useRestaurantsContext } from "../../../services/restaurants/restaurants.context";

import { Search } from "../components/search.component";
import { MapCallout } from "../components/map-callout.component";

const SearchWrapper = styled.View`
  width: 100%;
  position: absolute;
  top: ${({ theme }) => theme.space[4]};
  z-index: 999;
`;

const Map = styled(MapView)`
  flex: 1;
`;

function RestaurantsMap({ navigation }) {
  const { location } = useLocationContext();
  const { restaurants = [] } = useRestaurantsContext();

  const [latDelta, setLatDelta] = useState(0);

  useEffect(() => {
    const northeastLat = location.viewport.northeast.lat;
    const southwestLat = location.viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location]);

  return (
    <>
      <SearchWrapper>
        <Search />
      </SearchWrapper>

      <Map
        region={{
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.01,
        }}
      >
        {restaurants?.map((restaurant) => {
          return (
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <MapView.Callout
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    item: restaurant,
                  })
                }
              >
                <MapCallout restaurant={restaurant} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
}

export const MapScreen = ({ navigation }) => {
  const { location } = useLocationContext();

  if (!location) {
    return (
      <Map
        region={{
          latitude: 0,
          longitude: 0,
        }}
      />
    );
  }

  return <RestaurantsMap navigation={navigation} />;
};
