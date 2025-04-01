import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { theme } from '../../constants/theme';
import avatar from '../../../assets/szop1.png';

type Props = {
    onSignOut: () => void;
};

export const ProfileScreen: React.FC<Props> = ({ onSignOut }) => {
    return (
        <View style={styles.container}>
            <Image source={avatar} style={styles.avatar} />

            <Text style={styles.name}>Alice, 26</Text>
            <Text style={styles.bio}>Loves music, hiking and cats 🐱</Text>

            <TouchableOpacity style={styles.editButton}>
                <Text style={styles.editButtonText}>Edit Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signOutButton} onPress={onSignOut}>
                 <Text style={styles.signOutButtonText}>Sign Out</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 20,
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: theme.colors.white,
    },
    bio: {
        fontSize: 16,
        color: theme.colors.white,
        opacity: 0.8,
        textAlign: 'center',
        marginVertical: 10,
    },
    editButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: theme.colors.primary,
        borderRadius: theme.radius.md,
    },
    editButtonText: {
        color: theme.colors.white,
        fontWeight: 'bold',
    },
    signOutButton: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#FF6B6B',
        borderRadius: theme.radius.md,
    },
    
    signOutButtonText: {
        color: theme.colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
