import { ScrollView, Text, View, Button } from "react-native";
import { useSelector } from "react-redux";

import { MapPreview } from "../../components/index";
import colors from "../../utils/colors";
import { styles } from "./styles";

const LocationDetail = ({ route }) => {
  const { locationId } = route.params;
  const location = useSelector((state) => state.location.locations.find((location) => location.id === locationId));
  console.log(location)
  const parseCoords = JSON.parse(JSON.stringify(location?.coords));
  return (
    <ScrollView style={styles.container}>
        <View style={styles.location}>
            <View style={styles.addressContainer}>
                <Text style={styles.title}>{location.title}</Text>
                <Text style={styles.address}>Dirección: {location.address}</Text>
            </View>
        </View> 
        <View style={styles.location}>
        <MapPreview style={styles.map} location={{ lat: parseCoords.lat, lng: parseCoords.lng }}>
            <Text>Ubicacion no disponible</Text>
        </MapPreview>
        </View>
        <Button title="Usar esta dirección" color={colors.secondary}/>
    </ScrollView>
  );
};

export default LocationDetail;