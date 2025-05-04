import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainNavigator} from './MainNavigator';
import {AuthNavigator} from './AuthNavigator';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  const isAuthenticated = false;
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isAuthenticated ? (
        <Stack.Screen name="Main" component={MainNavigator} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};
