import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Text } from "../../../components/typography/typography.component";
import Spacer from "../../../components/spacer/spacer.component";
import { Favorite } from "../../../components/favorite/favorite.component";
import {
  ImageIcon,
  Info,
  Rating,
  RestaurantCard,
  RestaurantCardCover,
  Section,
  SectionEnd,
} from "./restaurant-info-card.styles";

export function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name = "Some restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://media.istockphoto.com/photos/table-top-view-of-spicy-food-picture-id1316145932?b=1&k=20&m=1316145932&s=170667a&w=0&h=feyrNSTglzksHoEDSsnrG47UoY_XX4PtayUPpSMunQI=",
    ],
    address = "100 Some address street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId = 123,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard key={name} elevation={3}>
      <Favorite restaurant={restaurant} />
      <RestaurantCardCover source={{ uri: photos[0] }} />

      <Info>
        <Text variant="label">{name}</Text>

        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`${name}-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>

          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}

            <Spacer variant="inline.md" />

            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}

            <Spacer variant="inline.md" />

            <ImageIcon source={{ uri: icon }} />
          </SectionEnd>
        </Section>

        <Text variant="caption">{address}</Text>
      </Info>
    </RestaurantCard>
  );
}
