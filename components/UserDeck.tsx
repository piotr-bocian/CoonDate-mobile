import React, { useState, useRef, forwardRef, useImperativeHandle, useCallback } from 'react';
import { View, StyleSheet, Dimensions, Animated, PanResponder, Text } from 'react-native';
import { UserCard } from './UserCard';
import { theme } from '../constants/theme';
import szop1 from '../assets/images/szop1.png';
import szop2 from '../assets/images/szop2.png';
import szop3 from '../assets/images/szop3.png'; 

const { width, height } = Dimensions.get('window');
const SWIPE_THRESHOLD = 120;

const mockUsers = [
  {
    id: '1',
    image: szop1,
    name: 'Precel',
    age: 26,
    bio: 'I like eating grapes',
  },
  {
    id: '2',
    image: szop2,
    name: 'Pączek',
    age: 24,
    bio: 'Certified tree climber',
  },
  {
    id: '3',
    image: szop3,
    name: 'Szyszka',
    age: 29,
    bio: 'I will bite you but in a pleasant way',
  },
];

export type UserDeckRef = {
  swipe: (direction: 'left' | 'right' | 'up') => void;
};

export const UserDeck = forwardRef<UserDeckRef>((_, ref) => {
  const [users, setUsers] = useState(mockUsers);
  const position = useRef(new Animated.ValueXY()).current;

  const opacity = position.x.interpolate({
    inputRange: [-width / 2, 0, width / 2],
    outputRange: [0, 1, 0],
    extrapolate: 'clamp',
  });
  
  const rotate = position.x.interpolate({
    inputRange: [-width, 0, width],
    outputRange: ['-15deg', '0deg', '15deg'],
    extrapolate: 'clamp',
  });
  
  const scale = position.x.interpolate({
    inputRange: [-width, 0, width],
    outputRange: [0.9, 1, 0.9],
    extrapolate: 'clamp',
  });

  const nextCardScale = position.x.interpolate({
    inputRange: [-width / 2, 0, width / 2],
    outputRange: [0.95, 1, 0.95],
    extrapolate: 'clamp',
});

const nextCardTranslateY = position.x.interpolate({
    inputRange: [-width / 2, 0, width / 2],
    outputRange: [20, 0, 20], // subtelne unoszenie drugiej karty
    extrapolate: 'clamp',
});
  

  // swipe przez gest lub przycisk
  const swipeOff = useCallback((direction: 'left' | 'right' | 'up') => {
    let toValue;
    if (direction === 'up') {
      toValue = { x: 0, y: -height };
    } else {
      toValue = { x: direction === 'left' ? -width * 2 : width * 2, y: 0 };
    }
  
    Animated.timing(position, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      position.setValue({ x: 0, y: 0 });
      setUsers(prev => prev.slice(1));
    });
  }, [position, setUsers]);

  useImperativeHandle(ref, () => ({
    swipe: swipeOff
  }));

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gesture) => {
      position.setValue({ x: gesture.dx, y: gesture.dy });
    },
    onPanResponderRelease: (_, gesture) => {
        if (gesture.dy < -SWIPE_THRESHOLD) {
            swipeOff('up');
        } else if (Math.abs(gesture.dx) > SWIPE_THRESHOLD) {
            swipeOff(gesture.dx > 0 ? 'right' : 'left');
        } else {
            Animated.spring(position, {
                toValue: { x: 0, y: 0 },
                friction: 5,
                useNativeDriver: true,
            }).start();
      }
    },
  });
  
  if (users.length === 0) {
    return (
        <View style={styles.noMoreCards}>
            <Text style={styles.noMoreText}>No more cards 🦝</Text>
        </View>
    );
}
  return (
    <View style={styles.container}>
      {users.map((user, index) => {      
        if (index === 0) {
          return (
            <Animated.View
              key={user.id}
              {...panResponder.panHandlers}
              style={[
                styles.card,
                { transform: [{ translateX: position.x }, { translateY: position.y }, { rotate }, {scale}], opacity },
              ]}
            >
              <UserCard {...user} />
            </Animated.View>
          );
        } else if (index === 1) {
          return (
            <Animated.View
              key={user.id}
              style={[styles.card, { transform: [{ scale: nextCardScale }, { translateY: nextCardTranslateY },], opacity: 0.8 }]}
            >
              <UserCard {...user} />
            </Animated.View>
          );
        } else {
          return (
            <View key={user.id} style={[styles.card, { transform: [{ scale: 0.95 }], opacity: 0.5 }]}>
              <UserCard {...user} />
            </View>
          );
        }
      }).reverse()}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.7,
  },
  card: {
    position: 'absolute',
  },
  noMoreCards: {
    width: width * 0.9,    // tak jak karta
    height: height * 0.6,  // tak jak karta
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.radius.lg,
    backgroundColor: 'rgba(255,255,255,0.05)', // opcjonalnie lekka ramka
},
noMoreText: {
    fontSize: 24,
    color: theme.colors.white,
    opacity: 0.6,
    textAlign: 'center',
},
});


