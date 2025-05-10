import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProfileScreen} from '../features/shared/profile/screens/ProfileScreen';
import {useAppSelector} from '../core/store/hook';
import {AdminHomeScreen} from '../features/home/screens/AdminScreen';
import {LecturerScreen} from '../features/home/screens/LecturerScreen';
import {StudentScreen} from '../features/home/screens/StudentScreen';
import {AdminNavigator} from './AdminNavigator';

const Tab = createBottomTabNavigator();

export const MainNavigator = () => {
  const role = useAppSelector(state => state.auth.user.role);

  const RoleNavigator =
    role === 'admin'
      ? AdminNavigator
      : role === 'teacher'
      ? LecturerScreen
      : StudentScreen;

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="RoleRoot" component={RoleNavigator} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
