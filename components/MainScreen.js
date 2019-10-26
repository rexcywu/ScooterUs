import React from 'react';
import { ThemeProvider, Avatar, Text, Button } from 'react-native-elements';

export default function detailScreen() {
    return (
        <ThemeProvider>
            <Avatar
                rounded size="large"
                containerStyle={{ alignSelf: 'center', top: 80 }}
            />
            <Text
                style={{ alignSelf: 'center', top: 100 }}
            >Name</Text>

            <Button
                style={{ alignSelf: 'center', top: 400 }}
                title="Link to Traffic Light"
            />
        </ThemeProvider>
    );
}