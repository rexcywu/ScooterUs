import { TouchableOpacity } from 'react-native';
import { Image, ThemeProvider } from 'react-native-elements';
import React, { useState } from 'react';
// Standard Image

export default function pay(props) {
    return (
        <ThemeProvider>
            <TouchableOpacity onPress={props.orderComplete}>
                <Image
                    source={require('../Pay.png')}
                    style={{ width: '100%', height: '100%' }}
                />
            </TouchableOpacity>
        </ThemeProvider>
    );

}

