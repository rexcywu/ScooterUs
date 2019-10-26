import { CheckBox, ThemeProvider, Button } from 'react-native-elements'
import React from 'react';
import { ButtonGroup} from 'react-native-elements';
export default function itemLists(props) {
   
      
  const buttons = ['Main Dish', 'Snacks','Drinks'];
  const  selectedIndex = 0;
  
  
  return (
    <ThemeProvider>

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

      <Button
        title="Place Order"
        containerStyle={{ margin: 25 }}
        onPress={props.orderPlaced}
      />

    </ThemeProvider>
  );
}

