import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  SafeAreaView, ScrollView, StyleSheet, View, Text,
} from 'react-native';
import UserCard from '../../components/UserCard';
import { initializeFetchUserRequest } from '../../../redux/user';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
  },
});

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);
  const { userData } = users?.fetch;

  const {
    data, page = 1, total, total_pages: totalPages,
  } = userData && userData;

  const [allUsers, setAllUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showIndicator, setShowIndicator] = useState(false);

  const handleFetchUsers = () => {
    dispatch(initializeFetchUserRequest(currentPage));
  };

  const handleScrollPosition = (e) => {
    const { contentOffset, layoutMeasurement, contentSize } = e.nativeEvent;
    const scrollPosition = contentOffset.y;
    const scrollViewHeight = layoutMeasurement.height;
    const contentHeight = contentSize.height;
    const scrolledToBottom = scrollViewHeight + scrollPosition;
    if (scrolledToBottom >= (contentHeight - 10) && page < totalPages && allUsers.length < total) {
      setCurrentPage(() => currentPage + 1);
    }
  };

  useEffect(() => {
    handleFetchUsers();
  }, [currentPage]);

  useEffect(() => {
    if (userData && data) {
      setAllUsers([...allUsers, ...data]);
    }
  }, [userData, data]);

  useEffect(() => {
    if (allUsers.length === total) {
      setShowIndicator(true);
      setTimeout(() => {
        setShowIndicator(false);
      }, 5000);
    }
  }, [allUsers, total]);

  const renderUsers = () => (
    <ScrollView
      onMomentumScrollEnd={handleScrollPosition}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 15,
      }}
    >
      {allUsers && allUsers.map((user) => (
        <UserCard
          key={user?.id}
          firstName={user?.first_name}
          lastName={user?.last_name}
          avatar={user?.avatar}
        />
      ))}
    </ScrollView>
  );
  return (
    <SafeAreaView style={styles.container}>
      {renderUsers()}
      <View style={styles.indicator}>
        {showIndicator && (
          <Text style={styles.text}>No more data</Text>
        )}
      </View>
    </SafeAreaView>
  );
};
export default Users;
