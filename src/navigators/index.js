import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";

import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";
import { AuthenticationContext } from "../services/authentication.context";

export const Navigator = () => {
  const authenticationContext = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {authenticationContext.user != null ? (
        <AppNavigator />
      ) : (
        <AccountNavigator />
      )}
    </NavigationContainer>
  );
};
