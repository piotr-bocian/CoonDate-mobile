// app/_layout.tsx
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="auth" options={{ headerShown: false }} />
    </Stack>
  );
}
