import React from 'react';
import { Overlay } from 'react-native-elements';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View } from 'react-native';
import { Avatar } from 'react-native-elements';

export default function trafficLightModal(props) {
  return (
    <Overlay isVisible={props.visible} height="55%">
      <View>
        <Avatar
          rounded
          size="large"
          containerStyle={{ alignSelf: 'center', top: 40 }}
          overlayContainerStyle={{ backgroundColor: 'red' }}
        />

        <Avatar
          rounded
          size="large"
          containerStyle={{ alignSelf: 'center', top: 70, backgroundColor: '#00ffff' }}
          overlayContainerStyle={{ backgroundColor: 'orange' }}
        />

        <Avatar
          rounded
          size="large"
          containerStyle={{ alignSelf: 'center', top: 100, backgroundColor: '#00ff00' }}
          overlayContainerStyle={{ backgroundColor: 'green' }}
        />
        <View style={{ flexDirection: 'row', margin: -10, alignSelf: 'center' }}>
          <Button
            title="Cancel"
            containerStyle={{ top: 160, width: 100, marginHorizontal: 10 }}
            onPress={props.cancelClicked}
          />

          <Button
            title="Details"
            containerStyle={{ top: 160, width: 100, marginHorizontal: 10 }}
            onPress={props.toDetails}
          />
        </View>
      </View>
    </Overlay>
  );
}