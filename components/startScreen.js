import React from 'react';
import { Button, View } from 'react-native';
import { Text, ThemeProvider, Icon } from 'react-native-elements';

export default function startScene(props) {
    return (
        <ThemeProvider>
            <Text h3 h3Style={{ fontFamily: 'Papyrus', fontWeight: 'bold',top: '25%', fontSize: 75, textAlign: "center", alignSelf: 'center', color: '#043b82' }}>ScooterUs</Text>
            <Text h3 h3Style={{ fontFamily: 'Trebuchet MS',fontStyle: 'italic', top: '26%', fontSize: 24, textAlign: "center", alignSelf: 'center', color: '#043b82' }}>最值得信賴的P2P機車平台</Text>
            <View style={{ top: '35%' }}>
                <Text h3 h3Style={{ bottom: '-300%', fontSize: 60, left: '0%', alignSelf: 'center', color: '#043b82' }} onPress={props.startClicked}>→</Text>
            </View>
        </ThemeProvider>
    );
}