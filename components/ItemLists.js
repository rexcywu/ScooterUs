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
  [selectedIndex, setSelectedIndex] = useState(0);

  const buttons = ['Main Dish', 'Snacks', 'Drinks'];
  const titles = [
    ['$92 PASTOR TACOS', '$56 GREEN SALSA', '$88 STREET CORN', '$98 CAESAR SALAD', '$78 SOFT TACOS', '$52 CHICKEN N LIME SOUP'],
    ['$56 GREEN SALSA', '$88 STREET CORN', '$92 PASTOR TACOS', '$52 CHICKEN N LIME SOUP', '$98 CAESAR SALAD', '$78 SOFT TACOS'],
    ['$78 SOFT TACOS', '$56 GREEN SALSA', '$88 STREET CORN', '$98 CAESAR SALAD', '$92 PASTOR TACOS', '$52 CHICKEN N LIME SOUP'],
  ];

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
        title={titles[selectedIndex][0]}
        onPress={() => { setButtonChecked1(!buttonChecked1) }}
      />

      <CheckBox
        checked={buttonChecked2}
        title={titles[selectedIndex][1]}
        onPress={() => { setButtonChecked2(!buttonChecked2) }}
      />

      <CheckBox
        checked={buttonChecked3}
        title={titles[selectedIndex][2]}
        onPress={() => { setButtonChecked3(!buttonChecked3) }}
      />

      <CheckBox
        checked={buttonChecked4}
        title={titles[selectedIndex][3]}
        onPress={() => { setButtonChecked4(!buttonChecked4) }}
      />

      <CheckBox
        checked={buttonChecked5}
        title={titles[selectedIndex][4]}
        onPress={() => { setButtonChecked5(!buttonChecked5) }}
      />

      <CheckBox
        checked={buttonChecked6}
        title={titles[selectedIndex][5]}
        onPress={() => { setButtonChecked6(!buttonChecked6) }}
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