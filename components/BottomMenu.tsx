import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { theme } from '../constants/theme';
import { ViewType } from '../app/(tabs)/index';

type Props = {
    active: ViewType;
    onChange: (screen: ViewType) => void;
};

export const BottomMenu: React.FC<Props> = ({ active, onChange }) => {
    return (
        <View style={styles.container}>
        <TouchableOpacity style={styles.icon} onPress={() => onChange('deck')}>
            <FontAwesome name="home" size={22} color={active === 'deck' ? theme.colors.primary : '#ccc'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={() => onChange('likes')}>
            <FontAwesome name="heart" size={22} color={active === 'likes' ? theme.colors.primary : '#ccc'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={() => onChange('matches')}>
            <FontAwesome name="comments" size={22} color={active === 'matches' ? theme.colors.primary : '#ccc'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={() => onChange('profile')}>
            <FontAwesome name="user" size={22} color={active === 'profile' ? theme.colors.primary : '#ccc'} />
        </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',   // <<< KLUCZOWE
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,             // zmniejszona wysokość
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme.colors.primaryDark,
        borderTopWidth: 1,
        borderTopColor: 'rgba(255,255,255,0.1)',
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
});
