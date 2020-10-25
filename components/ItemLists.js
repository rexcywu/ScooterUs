import { CheckBox, Button, ThemeProvider } from 'react-native-elements'
import React, { useState } from 'react';
import { ButtonGroup } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
export default function itemLists(props) {

  [buttonChecked1, setButtonChecked1] = useState(false);
  [buttonChecked2, setButtonChecked2] = useState(false);
  [buttonChecked3, setButtonChecked3] = useState(false);
  [selectedIndex, setSelectedIndex] = useState(0);

  const buttons = ['司機', '速限上限', '大小','不良習慣'];
  const titles = [
    ['男', '女','皆可'],
    ['50km/hr', '60km/hr', '無上限需求'],
    ['50cc', '100cc', '>=125'],
    ['吸菸', '喝酒', '無特別需求'],
  ];

  function updateIndex(index) {
    setSelectedIndex(index);
    setButtonChecked1(false);
    setButtonChecked2(false);
    setButtonChecked3(false);
  }

  return (
    <View style={styles.container}>
      <ThemeProvider theme={{ colors: { primary: '#043b82' } }}>
        <ButtonGroup
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 100 }}
          onPress={updateIndex}
        />
      </ThemeProvider>

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


      <View style={{ flexDirection: 'row', height: '25%', alignSelf: 'center' }}>
        <ThemeProvider theme={{ colors: { primary: '#043b82' } }}>
          <Button style={styles.button}
            title="返回"
            onPress={props.backClicked}
          />
          <Button style={styles.button}
            title="確定"
            onPress={props.orderPlaced}
          />
        </ThemeProvider>
      </View>
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