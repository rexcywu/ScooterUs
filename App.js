import React from 'react';
import { ThemeProvider, SearchBar } from 'react-native-elements';
import LogInScreen from './components/LogInScreen';


export default function App() {
  return (
    <ThemeProvider>
      <SearchBar/>
      <LogInScreen />
      </ThemeProvider>
      
  )
}
