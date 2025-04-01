import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { theme } from '../constants/theme';

const { width, height } = Dimensions.get('window');

type UserCardProps = {
  image: number;
  name: string;
  age: number;
  bio?: string;
};

export const UserCard: React.FC<UserCardProps> = ({ image, name, age, bio }) => {
  return (
    <View style={styles.card}>
      <Image source={typeof image === 'number' ? image : { uri: image }} style={styles.image} />

      <View style={styles.details}>
        <Text style={styles.name}>{name}, {age}</Text>
        {bio && <Text style={styles.bio}>{bio}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 0.9,
    height: height * 0.65,
    borderRadius: theme.radius.lg,
    backgroundColor: theme.colors.white,
    overflow: 'hidden',
    alignSelf: 'center',
    elevation: 0,
  },
  image: {
    width: '100%',
    height: '70%',
    backgroundColor: theme.colors.background,
  },
  details: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.md,
    justifyContent: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.white,
  },
  bio: {
    marginTop: theme.spacing.xs,
    fontSize: 14,
    color: theme.colors.white,
  },
});
