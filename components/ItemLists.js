import { CheckBox, ThemeProvider, Button } from 'react-native-elements'
import React from 'react';

export default function itemLists(props) {
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
      />

      <Button
        title="Place Order"
        containerStyle={{ margin: 25 }}
        onPress={props.orderPlaced}
      />

    </ThemeProvider>
  );
}

