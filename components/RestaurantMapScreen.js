import React from 'react';
import { ThemeProvider, Image, Button, Text } from 'react-native-elements';
import { View } from 'react-native';

export default function restaurantMapScreen(props) {
    return (
        <ThemeProvider>
            <View style={{ width: '100%', height: '40%' }}>

                <Image
                    source={require('../el_charro.jpg')}
                    style={{ width: '100%', height: '100%' }}
                />

            </View>
            <Text style={{ margin: 30, fontSize: 24, textAlign: 'center', color: 'black', fontFamily: 'Palatino' }}>Dining in a comfortable relaxed and warm setting serving quality Mexican Cuisine</Text>
            <View style={{ flexDirection: 'row', height: '25%', alignSelf: 'center' }}>
                <ThemeProvider style={{ flexDirection: 'row', alignSelf: 'center' }} theme={{ colors: { primary: '#aa1242' } }}>
                    <Button
                        title="Back"
                        containerStyle={{ marginHorizontal: 30, marginVertical: 60, width: 100 }}
                        onPress={props.backClicked}
                    />
                    <Button
                        title="Order"
                        containerStyle={{ marginHorizontal: 30, marginVertical: 60, width: 100 }}
                        onPress={props.orderClicked}
                    />
                </ThemeProvider>
            </View>

        </ThemeProvider>
    );
}