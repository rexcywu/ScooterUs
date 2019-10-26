import { ActivityIndicator } from 'react-native';
import { Image, ThemeProvider } from 'react-native-elements';
import React, { useState } from 'react';
// Standard Image

export default function pay() {
    return (
        <ThemeProvider>
        <Image
            source={require('../Pay.png') }
            style={{ width: '100%',height: '100%'}}
        />
        </ThemeProvider>
    );
    
}

