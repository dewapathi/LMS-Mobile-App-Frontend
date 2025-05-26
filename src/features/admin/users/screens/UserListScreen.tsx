import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {UserCard} from '../components/UserCard';
import {useAppDispatch, useAppSelector} from '../../../../core/store/hook';
import {useEffect} from 'react';
import {fetchUsers} from '../store/userSlice';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AdminStackParamList} from '../../../../navigation/types';

export const UserListScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AdminStackParamList>>();
  const dispatch = useAppDispatch();
  const {users, loading} = useAppSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const deleteUser = () => {};

  const renderItem = ({item}: any) => {
    return <UserCard user={item} onEdit={item} onDelete={deleteUser} />;
  };
  return (
    <View>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={users.results || []}
          keyExtractor={item => item?.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={{paddingBottom: 80}}
        />
      )}

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('UserForm')}>
        <Ionicons name="add" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, backgroundColor: '#f9f9f9'},
  title: {fontSize: 24, fontWeight: 'bold', marginBottom: 16},
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    backgroundColor: '#6200ee',
    padding: 18,
    borderRadius: 30,
    elevation: 6,
  },
});
