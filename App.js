import React, { useState } from 'react';
import { ThemeProvider, Header } from 'react-native-elements';
import LogInScreen from './components/LogInScreen';
import MainScreen from './components/MainScreen';
import DetailsScreen from './components/DetailsScreen';
import TrafficlightModal from './components/TrafficLightModal';
import RestaurantMapScreen from './components/RestaurantMapScreen';

const titles = {
  login: 'Log In',
  main: 'Information',
  details: 'Details',
  restaurant_map: 'Restaurant'
};

export default function App() {
  [currScreen, setCurrScreen] = useState('restaurant_map');
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
  } else if (currScreen === 'restaurant_map') {
    screen = <RestaurantMapScreen />
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
