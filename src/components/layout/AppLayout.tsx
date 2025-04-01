import React from 'react';
import { View, StyleSheet } from 'react-native';
import { theme } from '../../constants/theme';
import { TopBar } from './TopBar';
import { useSafeSpacing } from '../../hooks/useSafeSpacing';

type Props = {
  children: React.ReactNode;
};

export const AppLayout: React.FC<Props> = ({ children }) => {
    const safe = useSafeSpacing();
    return (
    <View style={[styles.container, safe]}>
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
