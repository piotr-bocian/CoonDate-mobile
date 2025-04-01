import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../constants/theme';

const { width } = Dimensions.get('window');

export const TopBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Image
          source={require('../../../assets/Name.png')}
          style={styles.name}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: theme.spacing.lg,
    paddingBottom: theme.spacing.md,
    backgroundColor: theme.colors.background,
  },
  inner: {
    flexDirection: 'row',
    justifyContent: 'center', // <-- centrum
    alignItems: 'center',
  },
  logo: {
    width: width * 0.08,
    height: width * 0.08,
    borderRadius: theme.radius.md,
    marginRight: theme.spacing.sm,
  },
  name: {
    width: width * 0.5,
    height: width * .08,
  },
});
