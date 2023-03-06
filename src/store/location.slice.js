import { createSlice } from "@reduxjs/toolkit";

import Location from "../models/location";
import { URL_GEOCODING } from "../utils/maps";

const initialState = {
  locations: [],
};

const LocationSlice = createSlice({
  name: "Location",
  initialState,
  reducers: {
    addLocation: (state, action) => {
      const newLocation = new Location(
        Date.now().toString(),
        action.payload.title,
        action.payload.address,
        action.payload.coords
      );
      state.locations.push(newLocation);
    },
  },
});

export const { addLocation } = LocationSlice.actions;

export const saveLocation = (title, coords) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_GEOCODING(coords?.lat, coords?.lng));

      if (!response.ok) {
        throw new Error("No se ha podido conectar cone el servicio de geolocalización");
      }

      const data = await response.json();
      if (!data.results) throw new Error("No se ha podido encontrar la dirección");

      const address = data.results[0].formatted_address;

      dispatch(addLocation({ title, address, coords }));
    } catch (error) {
      console.log(error);
    }
  };
};

export default LocationSlice.reducer;