import React, { useState } from 'react';
import { ThemeProvider, Text } from 'react-native-elements';

export default function pay() {
    return (
        <ThemeProvider>
            <Text h3>Thank you for your order !</Text>
            <Text h3 h3Style={{width: '100%',height: '100%',fontFamily:'vincHand',fontSize: 20,textAlign: "center"}}>Enjoy your day !</Text>
        </ThemeProvider>
    );
    
}
