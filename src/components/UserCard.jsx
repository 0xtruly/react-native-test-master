import React from 'react';
import {
  View, Text, Image, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 3,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  avatarContainer: {
    overflow: 'hidden',
    width: 90,
    height: 90,
    borderRadius: 150,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  avatar: {
    resizeMode: 'contain',
    width: 90,
    height: 90,
  },
  text: {
    fontSize: 18,
    marginLeft: 15,
  },
  divider: {
    width: '96%',
    borderColor: '#999595',
    opacity: 0.5,
    alignSelf: 'center',
    borderBottomWidth: 0.5,
    marginTop: 10,
    marginLeft: 5,

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
