import React, { useState } from 'react';
import { ThemeProvider, Header } from 'react-native-elements';
import LogInScreen from './components/LogInScreen';
import MainScreen from './components/MainScreen';
import Pay from './components/Pay';
import DetailsScreen from './components/DetailsScreen';
import TrafficlightModal from './components/TrafficLightModal';
import OrderComplete from './components/OrderComplete'

const titles = {
  login: 'Log In',
  main: 'Information',
  details: 'Details'
};

export default function App() {
  [currScreen, setCurrScreen] = useState('login');
  [modalShow, setModalShow] = useState(false);

  function gotoScene(sceneName) {
    setCurrScreen(sceneName);
  }

  function setTrafficLightHandler(show) {
    setModalShow(show);
  }

  let screen;
  if (currScreen === 'login') {
    screen = <LogInScreen loginClicked={() => gotoScene('main')} />;
  } else if (currScreen === 'main') {
    screen = <MainScreen showModalClicked={() => setTrafficLightHandler(true)} />;
  } else if (currScreen === 'details') {
    screen = <DetailsScreen />;
  }

  return (
    <ThemeProvider>
      
      <OrderComplete />
    </ThemeProvider>
  );
}
