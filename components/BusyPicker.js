import React from 'react';
import { Avatar, ThemeProvider } from 'react-native-elements';

export default function busyPicker(props) {
  return (
    <ThemeProvider>
      <Avatar
        title="Yes"
        rounded
        size='xlarge'
        overlayContainerStyle={{ backgroundColor: 'red' }}
        containerStyle={{ alignSelf: 'center', top: '20%' }}
        onPress={props.yesClicked}
      />
      <Avatar
        title="No"
        rounded
        size='xlarge'
        overlayContainerStyle={{ backgroundColor: 'green' }}
        containerStyle={{ alignSelf: 'center', top: '30%' }}
      />
    </ThemeProvider>
  );
}