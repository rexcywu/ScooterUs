import React, {Component} from 'react';
import { ThemeProvider, ButtonGroup} from 'react-native-elements';
export default function buttonGroup() {
   
      
    const buttons = ['Food', 'List', 'Pay!'];
    const  selectedIndex = 0;
      
        return (
    <ThemeProvider>
      <ButtonGroup
        style={{ alignSelf: 'center', color:'#ffffff'}}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{height: 100}}
      />
      </ThemeProvider>
    );
    
  }