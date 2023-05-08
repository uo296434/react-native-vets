import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { MapScreen } from "../screens/map.screen";
import { SettingsNavigator } from "./settings.navigator";
import { VetsNavigator } from "./vets.navigator";
import { LocationsContextProvider } from "../services/location.context";
import { VetsContextProvider } from "../services/vets.context";
import { FavouritesContextProvider } from "../data/favourites.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Vets: "md-medkit",
  Map: "md-map",
  Settings: "md-settings",
};

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationsContextProvider>
      <VetsContextProvider>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen name="Vets" component={VetsNavigator} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsNavigator} />
        </Tab.Navigator>
      </VetsContextProvider>
    </LocationsContextProvider>
  </FavouritesContextProvider>
);
