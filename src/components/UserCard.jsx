import React from 'react';
import {
  View, Text, Image, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 15,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  avatarContainer: {
    overflow: 'hidden',
    width: 100,
    height: 100,
    borderRadius: 150,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  avatar: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 18,
    marginLeft: 15,
  },
  divider: {
    width: '90%',
    borderColor: '#eee',
    opacity: 0.5,
    alignSelf: 'center',
    borderBottomWidth: 1,
    marginTop: 10,

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
    <View style={styles.divider} />
  </View>
);

UserCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
export default UserCard;
