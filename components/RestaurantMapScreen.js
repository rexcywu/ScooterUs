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
            <Text style={{ margin: 25, fontSize: 20, textAlign: 'center', color: '#1111ff' }}>An open kitchen supports the chef-driven, made-from-scratch dining experience in a comfortable relaxed and warm setting serving quality Mexican & Tex-Mex Cuisine with a focus on fresh ingredients, bold flavours and eye-catching made to order items.</Text>
            <View style={{ flexDirection: 'row', height: '25%', alignSelf: 'center' }}>

                <Button
                    title="Order"
                    containerStyle={{ marginHorizontal: 30, marginVertical: 60, width: 100 }}
                    onPress={props.orderClicked}
                />
            </View>
        </ThemeProvider>
    );
}