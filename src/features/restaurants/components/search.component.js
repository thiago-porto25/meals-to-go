import { useState, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { useLocationContext } from "../../../services/location/location.context";

const SearchBarContainer = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;

export function Search({ onFavoritesToggle, isFavoritesToggled }) {
  const { keyword, search } = useLocationContext();
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  const onChangeText = (text) => setSearchKeyword(text);

  useEffect(() => setSearchKeyword(keyword), [keyword]);

  return (
    <SearchBarContainer>
      <Searchbar
        icon={isFavoritesToggled ? "heart" : "heart-outline"}
        onIconPress={onFavoritesToggle}
        placeholder="Search for a location"
        value={searchKeyword}
        onChangeText={onChangeText}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
      />
    </SearchBarContainer>
  );
}
