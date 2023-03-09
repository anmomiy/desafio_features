import {  FlatList } from "react-native";
import { useEffect } from "react";
import { useSelector, useDispatch  } from "react-redux";
import { loadLocations } from "../../store/location.slice";
import { LocationItem } from "../../components";
import { styles } from "./styles";

const LocationList = ({ navigation }) => {
  const dispatch = useDispatch();
  const Locations = useSelector((state) => state.location.locations);

  const renderItem = ({ item }) => (
    <LocationItem
      {...item}
      onSelect={() => navigation.navigate("LocationDetail", { locationId: item.id })}
    />
  );
  const keyExtractor = (item) => item.id;
  useEffect(() => {
    dispatch(loadLocations());
  }, [dispatch]);
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