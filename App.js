import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import LogInScreen from './components/LogInScreen';

export default function App() {
  return (
    <ThemeProvider>
      <LogInScreen />
    </ThemeProvider>
  );
}
