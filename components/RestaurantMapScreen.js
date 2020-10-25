import React from 'react';
import { ThemeProvider, Image, Button, Text } from 'react-native-elements';
import { View } from 'react-native';

export default function restaurantMapScreen(props) {
    return (
        <ThemeProvider>
            <View style={{ width: '100%', height: '40%' }}>

                <Image
                    source={require('../motorcycleicon.jpg')}
                    style={{ width: '100%', height: '100%' }}
                />

            </View>
            <Text style={{ margin: 30, fontSize: 24, textAlign: 'center', color: 'black', fontFamily: 'Palatino' }}>你確定要訂嗎？</Text>
            <View style={{ flexDirection: 'row', height: '25%', alignSelf: 'center' }}>
                <ThemeProvider style={{ flexDirection: 'row', alignSelf: 'center' }} theme={{ colors: { primary: '#043b82' } }}>
                    <Button
                        title="否"
                        containerStyle={{ marginHorizontal: 30, marginVertical: 60, width: 100 }}
                        onPress={props.backClicked}
                    />
                    <Button
                        title="是"
                        containerStyle={{ marginHorizontal: 30, marginVertical: 60, width: 100 }}
                        onPress={props.orderClicked}
                    />
                </ThemeProvider>
            </View>

        </ThemeProvider>
    );
}