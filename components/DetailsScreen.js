import React from 'react';
import { ThemeProvider, Image, Avatar } from 'react-native-elements';
import image from '../assets/fridge.jpg';

export default function detailScreen() {
    return (
        <ThemeProvider>
            <Avatar />
        </ThemeProvider>
    );
}