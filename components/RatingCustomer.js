import React from 'react';
import { Avatar, ThemeProvider, Text, AirbnbRating } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';

export default function customerRating(props) {
    return (
        <ThemeProvider>
            <Text h3 h3Style={{ fontFamily: 'Papyrus', top: '7%', fontSize: 40, textAlign: "center", alignSelf: 'center', color: '#043b82' }}>謝謝您的搭乘!</Text>
            <Text h4 h4Style={{ top: '15%', fontSize: 20, textAlign: 'center', alignSelf: 'center', color: '#ff6666' }}>您對此次搭乘的評價</Text>
            <Text h3 h3Style={{ fontFamily: 'Papyrus', top: '35%', fontSize: 40, textAlign: "center", alignSelf: 'center', color: '#043b82' }}>歡迎再度使用</Text>

            <Avatar
                icon={{ name: 'home', color: '#043b82' }}
                size='large'
                rounded
                onPress={props.homeClicked}
                overlayContainerStyle={{ bottom: '-500%', left: '200%', backgroundColor: 'white' }}
            />

            <AirbnbRating
                reviews={["", "", "", "", ""]}
                overlayContainerStyle={{ top: '20%' }}
                defaultRating={100}
            />
        </ThemeProvider>
    );

}