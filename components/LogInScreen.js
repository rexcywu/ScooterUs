import React from 'react';
import { ThemeProvider, Input, Button, Avatar } from 'react-native-elements';

export default function loginScreen(props) {
    return (
        <ThemeProvider>
            <Avatar
                rounded size="xlarge"
                containerStyle={{ alignSelf: 'center', top: 100 }}
                source={{ uri: 'https://techcrunch.com/wp-content/uploads/2014/10/anonymity.jpg?w=730&crop=1' }}
            />
            <Input
                label="username"
                containerStyle={{ alignSelf: 'center', top: 150, width: 350 }}
            />
            <Input
                label="password"
                containerStyle={{ alignSelf: 'center', top: 175, width: 350 }}
                secureTextEntry={true}
            />
            <Button
                title="Log In"
                raised
                containerStyle={{ alignSelf: 'center', top: 250, width: 150 }}
                onPress={props.loginClicked}
            />
        </ThemeProvider>
    );
}