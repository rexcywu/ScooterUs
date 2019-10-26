import React from 'react';
import { Button, View } from 'react-native';
import { Text, ThemeProvider, Icon } from 'react-native-elements';

export default function startScene(props) {
    return (
        <ThemeProvider>
            <Text h3 h3Style={{ fontFamily: 'Papyrus', top: '25%', fontSize: 70, textAlign: "center", alignSelf: 'center', color: '#aa1242' }}>PRESTO</Text>
            <View style={{ top: '35%' }}>
                <Text h3 h3Style={{ bottom: '-300%', fontSize: 60, left: '0%', alignSelf: 'center', color: '#aa1242' }} onPress={props.startClicked}>→</Text>
            </View>
        </ThemeProvider>
    );
}