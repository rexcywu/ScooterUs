import React from 'react';
import { Avatar, ThemeProvider, Text } from 'react-native-elements';



export default function pay() {
    return (
        <ThemeProvider>
            <Text h3 h3Style={{ fontFamily: 'Papyrus',top: '15%', fontSize: 40, textAlign: "center", alignSelf: 'center', color: '#FF69B4' }}>Thank you for your order !</Text>
            <Text h3 h3Style={{ fontFamily: 'Papyrus',top: '30%', fontSize: 40, textAlign: "center", alignSelf: 'center',color: '#FF69B4' }}>Enjoy your day !</Text>
            <Avatar
          icon={{ name: 'hourglass-full', color: 'black' }}
          size='medium'
          overlayContainerStyle={{ shadowColor: 'black', backgroundColor: 'white', margin: 25 }}
        />
        </ThemeProvider>
    );

}
