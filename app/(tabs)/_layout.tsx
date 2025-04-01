import { Stack } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { theme } from '../../constants/theme';

export default function Layout() {
  return (
    <View style={styles.container}>
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background, // <-- globalne tło
  },
});
