import React, { useState } from 'react';
import { ThemeProvider, Header, Rating } from 'react-native-elements';
import LogInScreen from './components/LogInScreen';
import Pay from './components/Pay';
import RestaurantMapScreen from './components/RestaurantMapScreen';
import OrderComplete from './components/OrderComplete';
import RestaurantList from './components/RestaurantList';
import ItemLists from './components/ItemLists';
import StartScreen from './components/startScreen';
import RatingCustomer from './components/RatingCustomer';
import { View, ImageBackground } from 'react-native';


const titles = {
  login: '登入',
  order: '需求',
  restaurant_map: '確認',
  restaurant_list: '附近車輛',
  order_complete: '謝謝',
  rating: '評價'
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
    screen = <LogInScreen loginClicked={() => gotoScene('order')} />;
  } else if (currScreen === 'order') {
    screen = <ItemLists orderPlaced={() => gotoScene('restaurant_map')}  backClicked={() => gotoScene('login')} />;
  } else if (currScreen === 'restaurant_map') {
    screen = <RestaurantMapScreen orderClicked={() => gotoScene('restaurant_list')} backClicked={() => gotoScene('order')} />
  } else if (currScreen === 'restaurant_list') {
    screen = <RestaurantList listItemClicked={() => gotoScene('pay')} backClicked={() => gotoScene('restaurant_map')} />
  } else if (currScreen === 'pay') {
    screen = <Pay orderComplete={() => gotoScene('order_complete')} />
  } else if (currScreen === 'order_complete') {
    screen = <OrderComplete orderClicked={() => gotoScene('rating')} />
  } else if (currScreen === 'rating') {
    screen = <RatingCustomer homeClicked={() => gotoScene('start')} />
  }

  return (
    <ThemeProvider>
      <ImageBackground source={require('./bg_blue.jpg')} style={{ width: '100%', height: '100%' }}>
        {currScreen === 'start' || currScreen === 'pay' || currScreen === 'busy_picker' ?
          null :
          <ThemeProvider theme={{ colors: { primary: '#043b82' } }}>
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
