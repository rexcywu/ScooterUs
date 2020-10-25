import React from 'react';
import { Avatar, ThemeProvider, Text, AirbnbRating } from 'react-native-elements';
import { View } from 'react-native';

export default function pay(props) {
    return (
        <ThemeProvider>
            <Text h3 h3Style={{ fontFamily: 'Papyrus', top: '7%', fontSize: 40, textAlign: "center", alignSelf: 'center', color: '#043b82' }}>謝謝您的使用</Text>
            <Text h4 h4Style={{ top: '15%', fontSize: 30, textAlign: 'center', alignSelf: 'center', color: '#ff6666' }}>請耐心等待</Text>
            <Text h3 h3Style={{ fontFamily: 'Papyrus', top: '35%', fontSize: 30, textAlign: "center", alignSelf: 'center', color: '#043b82' }}>如有任何問題請聯繫客服</Text>
            <Text h4 h4Style={{ fontFamily: 'Georgia', top: '37%', fontSize: 25, textAlign: "center", alignSelf: 'center', color: '#043b82' }}>02-12345678</Text>
            <View style={{ top: '35%' }}>
                <Text h3 h3Style={{ bottom: '-100%', fontSize: 60, left: '0%', alignSelf: 'center', color: '#043b82' }} onPress={props.orderClicked}>→</Text>
            </View>
        </ThemeProvider>
    );

}
