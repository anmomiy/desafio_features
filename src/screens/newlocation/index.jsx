import { useState } from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";

import { LocationSelector } from "../../components";
import { saveLocation } from "../../store/location.slice";
import colors from "../../utils/colors";
import { styles } from "./styles";

const NewLocation = ({ navigation }) => {
  const [title, setTitle] = useState("");

  const [coords, setCoords] = useState(null);
  const dispatch = useDispatch();

  const onHandlerSubmit = () => {
    dispatch(saveLocation(title, coords));
   navigation.goBack();
  };

  const onHandlerChange = (text) => {
    setTitle(text);
  };

  const onLocation = (location) => {
    setCoords(location);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Guardar ubicación como:</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe el nombre del lugar"
          onChangeText={onHandlerChange}
          value={title}
        />
        <LocationSelector onLocation={onLocation} />
        <Button
          disabled={title.length === 0}
          color={colors.primary}
          title="Guardar"
          onPress={onHandlerSubmit}
        />
      </View>
    </ScrollView>
  );
};

export default NewLocation;