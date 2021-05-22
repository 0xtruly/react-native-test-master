import React from 'react';
import {
  View, Text, Image, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avatarContainer: {
    overflow: 'hidden',
    width: 300,
    height: 300,
    borderRadius: 50,
  },
  avatar: {
    resizeMode: 'contain',
  },
  text: {
    fontSize: 14,
  },
});
const UserCard = ({ firstName, lastName, avatar }) => (
  <View style={styles.container}>
    <View style={styles.content}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
      </View>
      <Text allowFontScaling={false} style={styles.text}>{`${firstName} ${lastName}`}</Text>
    </View>
    <View />
  </View>
);

UserCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
export default UserCard;
