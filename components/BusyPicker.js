import React from 'react';
import { Avatar, Image, ThemeProvider, Text } from 'react-native-elements';
import { View } from 'react-native';

export default function busyPicker(props) {
  return (
    <ThemeProvider>
      <Text h1 h1Style={{ alignSelf: 'center', top: '20%' }}>In a Hurry?</Text>
      <View style={{ width: '75%', height: '70%', top: '25%', left: '30%' }}>
        <Image
          source={require('../hurry-businessman.png')}
          style={{ width: '50%', height: '50%', alignSelf: 'center' }}
        />
      </View>
      <View style={{ flexDirection: 'row', alignSelf: 'center', top: '-50%' }}>
        <Avatar
          icon={{ name: 'check', color: 'black' }}
          rounded
          size='xlarge'
          overlayContainerStyle={{ shadowColor: 'black', backgroundColor: 'white', margin: 25 }}
          onPress={props.yesClicked}
        />
        <Avatar
          icon={{ name: 'close', color: 'black' }}
          rounded
          size='xlarge'
          overlayContainerStyle={{ shadowColor: 'black', backgroundColor: 'white', margin: 25 }}
        />
      </View>
    </ThemeProvider>
  );
}