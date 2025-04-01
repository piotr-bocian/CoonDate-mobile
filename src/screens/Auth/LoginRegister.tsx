import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Animated, Switch, Image } from 'react-native';
import { styles } from './LoginRegister.styles';
import { LogoWithName } from '../../components/LogowithName';
import { theme } from '../../constants/theme';

type Props = {
  onSignIn: () => void;  
}

export const LoginRegister: React.FC<Props> = ({ onSignIn }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const fadeAnim = useRef(new Animated.Value(1)).current;

  const toggleMode = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, { toValue: 0, duration: 200, useNativeDriver: true }),
      Animated.timing(fadeAnim, { toValue: 1, duration: 200, useNativeDriver: true }),
    ]).start(() => setIsRegistering(!isRegistering));
  };

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      
      <LogoWithName />
      <Text style={styles.title}>{isRegistering ? 'Sign Up' : 'Sign In'}</Text>

      {isRegistering && (
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#5F8D78"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      )}

      <TextInput
        style={styles.input}
        placeholder={isRegistering ? "Username" : "Email or Username"}
        placeholderTextColor="#5F8D78"
        value={login}
        onChangeText={setLogin}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#5F8D78"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {isRegistering && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Repeat Password"
            placeholderTextColor="#5F8D78"
            value={repeatPassword}
            onChangeText={setRepeatPassword}
            secureTextEntry
          />

          <View style={styles.termsContainer}>
            <Switch
              value={acceptTerms}
              onValueChange={setAcceptTerms}
              thumbColor={acceptTerms ? '#42A679' : '#ccc'}
            />
            <Text style={styles.termsText}>I accept the Terms of Service</Text>
          </View>
        </>
      )}

      <TouchableOpacity style={styles.button} onPress={onSignIn}>
        <Text style={styles.buttonText }>{isRegistering ? 'Create Account' : 'Sign In'}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={toggleMode}>
        <Text style={styles.switchText}>
          {isRegistering ? 'Already have an account? Sign in' : "Don't have an account? Create one"}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
}
