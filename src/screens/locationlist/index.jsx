import {  FlatList } from "react-native";
import { useSelector } from "react-redux";

import { LocationItem } from "../../components";
import { styles } from "./styles";

const LocationList = ({ navigation }) => {
  const Locations = useSelector((state) => state.location.locations);

  const renderItem = ({ item }) => (
    <LocationItem
      {...item}
      onSelect={() => navigation.navigate("LocationDetail", { locationId: item.id })}
    />
  );
  const keyExtractor = (item) => item.id;
  return (
    <FlatList
      data={Locations}
      style={styles.container}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};

export default LocationList;