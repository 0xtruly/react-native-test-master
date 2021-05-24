import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Loader from '../components/Loader';

const Initial = ({ navigation }) => {
  const [loaderVisible, setLoaderVisible] = useState(true);

  const dismissLoader = () => {
    setTimeout(() => {
      setLoaderVisible(false);
    }, 3000);
  };

  useEffect(() => {
    dismissLoader();
  }, []);

  if (!loaderVisible) {
    navigation.navigate('Users');
  }
  return <Loader />;
};

Initial.propTypes = {
  navigation: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,
};
export default Initial;
