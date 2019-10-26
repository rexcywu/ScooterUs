import { CheckBox } from 'react-native-elements'
import React, {useState} from 'react';
import { ThemeProvider} from 'react-native-elements';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function ItemLists() {
    return (
<ThemeProvider>


<CheckBox
  title='Enter something!'
/>

<CheckBox
  title='Enter something!'
/>

<CheckBox
  title='Enter something!'
/>

<CheckBox
  title='Enter something!'
/>

<CheckBox
  title='Enter something!'
/>

<CheckBox
  title='Enter something!'

  
/>

<CheckBox
  title='Click Here to Remove This Item'
  iconRight
  iconType='material'
  
/>

</ThemeProvider>       
    );
}

