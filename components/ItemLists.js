import { CheckBox, ThemeProvider, Button } from 'react-native-elements'
import React from 'react';
import { ButtonGroup} from 'react-native-elements';
import {
  StyleSheet,
  View,
} from 'react-native'
export default function itemLists(props) {
   
      
  const buttons = ['Main Dish', 'Snacks','Drinks'];
  const  selectedIndex = 0;
  
  
  return (
    <View style={styles.container}>

    <ButtonGroup
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{height: 100}}
      />

      <CheckBox
        title='$92 PASTOR TACOS'
      />

      <CheckBox
        title='$56 GREEN SALSA'
      />

      <CheckBox
        title='$88 STREET CORN'
      />

      <CheckBox
        title='$98 CAESAR SALAD'
      />

      <CheckBox
        title='$78 SOFT TACOS '
      />

      <CheckBox
        title='$52 CHICKEN N LIME SOUP'
      />

      <CheckBox
        title='Click Here to Remove This Item'
      />

      <Button style={styles.button}
        title="Place Order"
        onPress={props.orderPlaced}
      />

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#a297db',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
})

