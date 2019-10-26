

import { SearchBar, Divider } from 'react-native-elements';
import React, { useState } from 'react';
import { ThemeProvider, Header } from 'react-native-elements';
import LogInScreen from './components/LogInScreen';
import MainScreen from './components/MainScreen';
import DetailsScreen from './components/DetailsScreen';
import TrafficlightModal from './components/TrafficLightModal';
import ItemLists from './components/ItemLists';
import ButtonGroup from './components/ButtonGroup';

const titles = {
  login: 'Log In',
  main: 'Information',
  details: 'Details'
};


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

      <ButtonGroup/>
      <ItemLists/>
    
    </ThemeProvider>
  );
}
