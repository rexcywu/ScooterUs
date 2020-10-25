import React from 'react';
import { ThemeProvider, Input, Button, Avatar, fontFamily } from 'react-native-elements';

export default function loginScreen(props) {
    return (
        <ThemeProvider>
            <Avatar
                rounded size="xlarge"
                containerStyle={{ alignSelf: 'center', top: 100 }}
                source={{ uri: 'https://techcrunch.com/wp-content/uploads/2014/10/anonymity.jpg?w=730&crop=1' }}
            />
            <Input
                label="帳號"
                containerStyle={{ alignSelf: 'center', top: 150, width: 350 }}
            />
            <Input
                label="密碼"
                containerStyle={{ alignSelf: 'center', top: 175, width: 350}}
                secureTextEntry={true}
            />
            <ThemeProvider theme={{ colors: { primary: '#043b82' } }}>
                <Button
                    title="登入"
                    raised
                    containerStyle={{ alignSelf: 'center', top: 250, width: 150 }}
                    onPress={props.loginClicked}
                />
            </ThemeProvider>
        </ThemeProvider >
    );
}