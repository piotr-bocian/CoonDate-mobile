import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { theme } from '../constants/theme';

const { width } = Dimensions.get('window');

export const LogoWithName = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/Name.png')}
          style={styles.name}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
    paddingBottom: 50
  },
  logoWrapper: {
    position: 'relative',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: theme.radius.lg,
  },
  name: {
    position: 'absolute',
    bottom: -60,           // <- przysunięcie w pionie do logo
    width: width * 0.5,    // <- dopasuj jak chcesz
    height: width * 0.3,
  },
});
