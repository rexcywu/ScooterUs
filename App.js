import React, { useState } from 'react';
import { ThemeProvider, Header } from 'react-native-elements';
import LogInScreen from './components/LogInScreen';
import MainScreen from './components/MainScreen';
import Pay from './components/Pay';
import DetailsScreen from './components/DetailsScreen';
import TrafficlightModal from './components/TrafficLightModal';
import RestaurantMapScreen from './components/RestaurantMapScreen';

import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import { ListItem } from 'react-native-elements';
import {View} from 'react-native';


export default function App() {





  const list = [
    {
      name: 'Anne Tang',
      avatar_url: 'https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-1/p240x240/67000915_2255019491202543_7916357447948697600_n.jpg?_nc_cat=106&_nc_oc=AQk40Kj3eB4eOttZPkHD9Z9r1lASxxBDIjRBOAngwLut3Upi1aD9HkDmkHKUhQ5nrks&_nc_ht=scontent-hkg3-1.xx&oh=25c97e0ec9d35d781e62eb51a261a0d3&oe=5E17E47F',
      subtitle: 'The most beautiful lady in the world'
    },
    {
      name: 'Tim Hsu',
      avatar_url: 'https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-1/p240x240/70862044_2406639389419440_601219580907487232_n.jpg?_nc_cat=107&_nc_oc=AQkDh-9f4ju4sKPCcn5czprQEL3qu83x4GQO03OcWsDrU5AsLJiGIEOMmAaACOLiIRE&_nc_ht=scontent-hkg3-1.xx&oh=0e1b3739c421c440a6f83a229d662456&oe=5E2200A5',
      subtitle: 'Just pupu'
    },
    {
      name: 'Wu Cheng-Ye',
      avatar_url: 'https://cdn.fs.agorize.com/QdlVToIeTtC2mrN9a5mF/convert?crop_first=true&fit=crop&h=140&w=140',
      subtitle: 'Handsome senior'
    },{
      name: 'Yuchao',
      avatar_url: 'https://avatars3.githubusercontent.com/u/12479866?s=400&v=4',
      subtitle: 'Year 6'
    },{
      name: 'Wei-Wei',
      avatar_url: 'https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-1/c73.284.510.510a/s240x240/72289442_2526352927452190_1930449475835265024_n.jpg?_nc_cat=109&_nc_oc=AQmBYsPXDt_WfJwjuGws28bokJ5GGz3n694MVC4WGE9yX-44hAujHywPoYuPuXnQ8EE&_nc_ht=scontent-hkg3-1.xx&oh=11847aa137047e0454483d67d49b9235&oe=5E1D04B2',
      subtitle: 'Hawaiianese'
    },
      ];
  
    return (
  <View>
<Image
source={{ uri: 'http://www.dituxin.com/uploads/allimg/160417/1-16041F91503440.jpg' }}
style={{ width: 390, height: 280 }}
/>
          {
            list.map((l, i) => (
              <ListItem
                key={i}
                leftAvatar={{ source: { uri: l.avatar_url } }}
                title={l.name}
                subtitle={l.subtitle}
                bottomDivider
              />
            ))
          }
  </View>


    
 
 

import OrderComplete from './components/OrderComplete'

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
      
      <OrderComplete />
    </ThemeProvider>

  );
}
