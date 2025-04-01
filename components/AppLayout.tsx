import React from 'react';
import { View, StyleSheet } from 'react-native';
import { theme } from '../constants/theme';
import { TopBar } from './TopBar';

type Props = {
  children: React.ReactNode;
};

export const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primaryDark, // globalne ciemnozielone tło
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: theme.spacing.md, // mała przerwa pod TopBar
  },
});
