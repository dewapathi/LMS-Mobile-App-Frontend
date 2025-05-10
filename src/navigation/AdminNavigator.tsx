import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AdminStackParamList} from './types';
import {AdminHomeScreen} from '../features/home/screens/AdminScreen';
import {CourseListScreen} from '../features/admin/courses/screens/CourseListScreen';

const Stack = createNativeStackNavigator<AdminStackParamList>();

export const AdminNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="AdminHome" component={AdminHomeScreen} />
    <Stack.Screen name="CourseManagement" component={CourseListScreen} />
  </Stack.Navigator>
);
