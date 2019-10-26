import React from 'react';
import { Button, View } from 'react-native';
import { Text, ThemeProvider } from 'react-native-elements';

export default function startScene(props) {
    return (
        <ThemeProvider>
            <Text h3 h3Style={{ fontFamily: 'Papyrus', top: '15%', fontSize: 60, textAlign: "center", alignSelf: 'center', color: '#FF69B4' }}>PRESTO</Text>
            <View style={{ top: '35%' }}>
                <Button title="START" color='red' onPress={props.startClicked} />
            </View>
        </ThemeProvider>
    );
}