import { CheckBox, Button, ThemeProvider } from 'react-native-elements'
import React, { useState } from 'react';
import { ButtonGroup } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
export default function itemLists(props) {

  [buttonChecked1, setButtonChecked1] = useState(false);
  [buttonChecked2, setButtonChecked2] = useState(false);
  [buttonChecked3, setButtonChecked3] = useState(false);
  [buttonChecked4, setButtonChecked4] = useState(false);
  [buttonChecked5, setButtonChecked5] = useState(false);
  [buttonChecked6, setButtonChecked6] = useState(false);
  [buttonChecked7, setButtonChecked7] = useState(false);
  [selectedIndex, setSelectedIndex] = useState(0);

  const buttons = ['Main Dish', 'Snacks', 'Drinks'];

  function updateIndex(index) {
    setSelectedIndex(index);
  }

  return (
    <View style={styles.container}>

      <ButtonGroup
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{ height: 100 }}
        onPress={updateIndex}
      />

      <CheckBox
        checked={buttonChecked1}
        title='$92 PASTOR TACOS'
        onPress={() => { setButtonChecked1(!buttonChecked1) }}
      />

      <CheckBox
        checked={buttonChecked2}
        title='$56 GREEN SALSA'
        onPress={() => { setButtonChecked2(!buttonChecked2) }}
      />

      <CheckBox
        checked={buttonChecked3}
        title='$88 STREET CORN'
        onPress={() => { setButtonChecked3(!buttonChecked3) }}
      />

      <CheckBox
        checked={buttonChecked4}
        title='$98 CAESAR SALAD'
        onPress={() => { setButtonChecked4(!buttonChecked4) }}
      />

      <CheckBox
        checked={buttonChecked5}
        title='$78 SOFT TACOS '
        onPress={() => { setButtonChecked5(!buttonChecked5) }}
      />

      <CheckBox
        checked={buttonChecked6}
        title='$52 CHICKEN N LIME SOUP'
        onPress={() => { setButtonChecked6(!buttonChecked6) }}
      />

      <CheckBox
        checked={buttonChecked7}
        title='Click Here to Remove This Item'
        onPress={() => { setButtonChecked7(!buttonChecked7) }}
      />

      <ThemeProvider theme={{ colors: { primary: '#a297db' } }}>
        <Button style={styles.button}
          title="Place Order"
          onPress={props.orderPlaced}
        />
      </ThemeProvider>

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
    padding: 10,
    margin: 15
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
})