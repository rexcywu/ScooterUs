import React from 'react';
import { ThemeProvider, Text } from 'react-native-elements';

export default function pay() {
    return (
        <ThemeProvider>
            <Text h3 h3Style={{ fontFamily: 'Futura',top: '15%', fontSize: 40, textAlign: "center", alignSelf: 'center', color: '#AE57A4' }}>Thank you for your order !</Text>
            <Text h3 h3Style={{ fontFamily: 'Futura',top: '30%', fontSize: 40, textAlign: "center", alignSelf: 'center',color: '#AE57A4' }}>Enjoy your day !</Text>
        </ThemeProvider>
    );

}
