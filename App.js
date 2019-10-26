import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import LogInScreen from './components/LogInScreen';
import TrafficlightModal from './components/TrafficLightModal';

export default function App() {
  return (
    <ThemeProvider>
      <TrafficlightModal />
    </ThemeProvider>
  );
}
