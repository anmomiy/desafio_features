import { TouchableOpacity,  View, Text } from "react-native";

import { styles } from "./styles";

const LocationItem = ({ id, title, address, onSelect }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onSelect}>
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>Dirección:</Text>
        <Text style={styles.address}> {address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default LocationItem;