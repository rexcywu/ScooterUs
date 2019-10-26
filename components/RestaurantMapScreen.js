import React from 'react';
import { ThemeProvider, Tooltip, Image, Text, Button } from 'react-native-elements';
import { View } from 'react-native';

export default function restaurantMapScreen(props) {
    return (
        <ThemeProvider>
            <View style={{ width: '100%', height: '60%' }}>
                <Tooltip
                    popover={<Text style={{ color: 'white' }}>This restaurant is blah blah blah blah blah soooooo goood!!!!!!!!!</Text>}
                    backgroundColor='black'
                    height={100}
                    width={300}
                >
                    <Image
                        source={require('../map2.png')}
                        style={{ width: '100%', height: '100%' }}
                    />
                </Tooltip>

            </View>
            <View style={{ flexDirection: 'row', height: '40%', alignSelf: 'center' }}>
                <Button
                    title="Details"
                    containerStyle={{ marginHorizontal: 30, marginVertical: 60, width: 100 }}
                />
                <Button
                    title="Order"
                    containerStyle={{ marginHorizontal: 30, marginVertical: 60, width: 100 }}
                    onPress={props.orderClicked}
                />
            </View>
        </ThemeProvider>
    );
}