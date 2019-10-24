import React from 'react';
import { ThemeProvider, Input, Button, Avatar } from 'react-native-elements';

export default function loginScreen() {
    return (
        <ThemeProvider>
            <Avatar
                rounded size="xlarge"
                containerStyle={{ alignSelf: 'center', top: 150 }}
            />
            <Input
                label="username"
                containerStyle={{ alignSelf: 'center', top: 200, width: 350 }}
            />
            <Input
                label="password"
                containerStyle={{ alignSelf: 'center', top: 225, width: 350 }}
            />
            <Button
                title="Log In"
                raised
                containerStyle={{ alignSelf: 'center', top: 275, width: 150 }}
            />
        </ThemeProvider>
    );
}