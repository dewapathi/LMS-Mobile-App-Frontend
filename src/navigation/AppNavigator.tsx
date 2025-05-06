import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainNavigator} from './MainNavigator';
import {AuthNavigator} from './AuthNavigator';
import {useAppSelector} from '../core/store/hook';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  //   const isAuthenticated = false;
  const isAuthenticated = useAppSelector(state => state.auth?.access_token !== null);
  
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
