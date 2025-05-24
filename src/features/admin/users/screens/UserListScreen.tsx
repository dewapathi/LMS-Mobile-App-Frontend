import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {UserCard} from '../components/UserCard';
import {useAppDispatch, useAppSelector} from '../../../../core/store/hook';
import {useEffect} from 'react';
import {fetchUsers} from '../store/userSlice';

export const UserListScreen = () => {
  const dispatch = useAppDispatch();
  const {users, loading} = useAppSelector(state => state.user);

  console.log('usersusersusersusersusers', users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const deleteUser = () => {};

  const renderItem = ({item}: any) => {
    return <UserCard user={item} onDelete={deleteUser} />;
  };
  return (
    <View>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={users.results || []}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={{paddingBottom: 80}}
        />
      )}
    </View>
  );
};
