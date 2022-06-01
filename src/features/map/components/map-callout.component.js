import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";

export function MapCallout({ restaurant }) {
  return <CompactRestaurantInfo isMap restaurant={restaurant} />;
}
