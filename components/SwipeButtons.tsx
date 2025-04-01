import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../constants/theme';
import { FontAwesome } from '@expo/vector-icons'; // <<< TO JEST POPRAWNY IMPORT

type Props = {
    onSwipeLeft: () => void;
    onSwipeRight: () => void;
    onSuperLike: () => void;
};

export const SwipeButtons: React.FC<Props> = ({ onSwipeLeft, onSwipeRight, onSuperLike }) => {
  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={onSwipeLeft} style={[styles.button, styles.nope]}>
        <FontAwesome name="times" size={28} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity onPress={onSuperLike} style={[styles.button, styles.superLike]}>
        <FontAwesome name="star" size={24} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity onPress={onSwipeRight} style={[styles.button, styles.like]}>
        <FontAwesome name="heart" size={28} color="#fff" />
      </TouchableOpacity>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: theme.spacing.lg,
    width: '70%',
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nope: {
    backgroundColor: '#FF6B6B',
  },
  superLike: {
    backgroundColor: '#4FC3F7',
  },
  like: {
    backgroundColor: '#6EC196',
  },
});
