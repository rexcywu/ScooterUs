import React, { useState } from 'react';
import { ThemeProvider, Header } from 'react-native-elements';
import LogInScreen from './components/LogInScreen';
import Pay from './components/Pay';
import BusyPicker from './components/BusyPicker';
import RestaurantMapScreen from './components/RestaurantMapScreen';
import OrderComplete from './components/OrderComplete';
import RestaurantList from './components/RestaurantList';
import ItemLists from './components/ItemLists';
import StartScreen from './components/startScreen';
import { View, ImageBackground } from 'react-native';


const titles = {
  login: 'Log In',
  busy_picker: 'Are you busy?',
  restaurant_list: 'Restaurants',
  restaurant_map: 'Details',
  order: 'Order'
};

export default function App() {
  [currScreen, setCurrScreen] = useState('start');

  function gotoScene(sceneName) {
    setCurrScreen(sceneName);
  }

  let screen;
  if (currScreen === 'start') {
    screen = <StartScreen startClicked={() => gotoScene('login')} />
  } else if (currScreen === 'login') {
    screen = <LogInScreen loginClicked={() => gotoScene('busy_picker')} />;
  } else if (currScreen === 'busy_picker') {
    screen = <BusyPicker yesClicked={() => gotoScene('restaurant_list')} />;
  } else if (currScreen === 'restaurant_list') {
    screen = <RestaurantList listItemClicked={() => gotoScene('restaurant_map')} />;
  } else if (currScreen === 'restaurant_map') {
    screen = <RestaurantMapScreen orderClicked={() => gotoScene('order')} />
  } else if (currScreen === 'order') {
    screen = <ItemLists orderPlaced={() => gotoScene('pay')} />
  } else if (currScreen === 'pay') {
    screen = <Pay orderComplete={() => gotoScene('order_complete')} />
  } else if (currScreen === 'order_complete') {
    screen = <OrderComplete homeClicked={() => gotoScene('restaurant_list')} />
  }

  return (
    <ThemeProvider>
      <ImageBackground source={require('./bg.png')} style={{ width: '100%', height: '100%' }}>
        {currScreen === 'start' || currScreen === 'pay' || currScreen === 'busy_picker' ?
          null :
          <ThemeProvider theme={{ colors: { primary: '#aa1242' } }}>
            <Header
              centerComponent={{ text: titles[currScreen], style: { color: '#ffffff', fontSize: 28 } }}
            />
          </ThemeProvider>
        }
        {screen}
      </ImageBackground>

    </ThemeProvider>
  );
}
