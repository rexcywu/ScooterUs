import React from 'react';
import { Avatar, ThemeProvider, Text } from 'react-native-elements';
import { View } from 'react-native';

export default function busyPicker(props) {
  return (
    <ThemeProvider>
      <Text h1 h1Style={{ alignSelf: 'center', top: '15%' }}>In a Hurry?</Text>
      <View style={{ flexDirection: 'row', alignSelf: 'center', top: '50%' }}>
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