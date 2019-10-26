import React, { useState } from 'react';
import { ThemeProvider, Header } from 'react-native-elements';
import LogInScreen from './components/LogInScreen';
import MainScreen from './components/MainScreen';
import DetailsScreen from './components/DetailsScreen';
import TrafficlightModal from './components/TrafficLightModal';

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
      <Header
        centerComponent={{ text: titles[currScreen], style: { color: '#ffffff', fontSize: 22 } }}
      />
      {screen}
      <TrafficlightModal
        visible={modalShow}
        cancelClicked={() => setTrafficLightHandler(false)}
        toDetails={() => { gotoScene('details'); setTrafficLightHandler(false) }}
      />
    </ThemeProvider>
  );
}
