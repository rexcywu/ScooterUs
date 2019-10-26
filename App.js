import React, { useState } from 'react';
import { ThemeProvider, Header } from 'react-native-elements';
import LogInScreen from './components/LogInScreen';
<<<<<<< HEAD
import MainScreen from './components/MainScreen';
import DetailsScreen from './components/DetailsScreen';

const titles = {
  login: 'Log In',
  main: 'Information',
  details: 'Details'
};
=======
import TrafficlightModal from './components/TrafficLightModal';
>>>>>>> 8c6d9987623ea4081426098ba95d7c8c97a2147d

export default function App() {
  [currScreen, setCurrScreen] = useState('login');

  function loginButtonHandler() {
    setCurrScreen('main');
  }

  let screen;
  if (currScreen === 'login') {
    screen = <LogInScreen loginClicked={loginButtonHandler} />;
  } else if (currScreen === 'main') {
    screen = <MainScreen />;
  } else if (currScreen === 'details') {
    screen = <DetailsScreen />;
  }

  return (
    <ThemeProvider>
<<<<<<< HEAD
      <Header
        centerComponent={{ text: titles[currScreen], style: { color: '#ffffff', fontSize: 22 } }}
      />
      {screen}
=======
      <TrafficlightModal />
>>>>>>> 8c6d9987623ea4081426098ba95d7c8c97a2147d
    </ThemeProvider>
  );
}
