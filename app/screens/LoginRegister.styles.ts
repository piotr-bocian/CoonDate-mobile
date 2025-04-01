import { StyleSheet } from 'react-native';
import { theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: theme.colors.background,
  },
  logo: {
    width: 160,
    height: 160,
    alignSelf: 'center',
    borderRadius: 24,

  },
  name: {
    color:'#00000',
    width: 250,
    height: 40,
    alignSelf: 'center',
    borderRadius: 24,

  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#1E3D32',
  },
  input: {
    borderWidth: 1,
    borderColor: '#6EC196',
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
    color: '#1E3D32',
    backgroundColor: '#ffffff80',
  },
  button: {
    backgroundColor: '#42A679',
    padding: 16,
    borderRadius: 12,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  switchText: {
    color: '#1E3D32',
    marginTop: 18,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  termsText: {
    marginLeft: 8,
    color: '#1E3D32',
  },
});
