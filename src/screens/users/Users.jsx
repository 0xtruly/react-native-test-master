import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  SafeAreaView, ScrollView, StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import UserCard from '../../components/UserCard';
import { initializeFetchUserRequest } from '../../../redux/user';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);
  console.log('users', users);
  const { loaded, userData } = users?.fetch;
  const data = userData?.data;
  const [allUsers, setAllUsers] = useState([]);
  const handleFetchUsers = () => {
    dispatch(initializeFetchUserRequest());
  };

  useEffect(() => {
    handleFetchUsers();
  }, []);

  const renderUsers = () => (
    <ScrollView>
      <ShimmerPlaceHolder visible={loaded} shimmerStyle={{ borderRadius: 5 }} width={350}>
        {data && data.map((user) => (
          <UserCard
            key={user?.id}
            firstName={user?.first_name}
            lastName={user?.last_name}
            avatar={user?.avatar}
          />
        ))}
      </ShimmerPlaceHolder>
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.container}>
      {renderUsers()}
    </SafeAreaView>
  );
};
export default Users;
