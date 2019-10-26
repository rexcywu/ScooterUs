import React from 'react';
import { Overlay } from 'react-native-elements';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View} from 'react-native';
import { Avatar } from 'react-native-elements';

export default function trafficLightModal() {
    return (
        <Overlay isVisible>
        

     
            
<Avatar
     rounded
     size="large"
     containerStyle={{ alignSelf: 'center', top: 40 }}
     source={{
      uri:
        'https://cdn11.bigcommerce.com/s-hfhomm5/images/stencil/500x659/products/180/451/Solid_Red_Sized__25214.1507754519.jpg?c=2&imbypass=on',
     }}
    />
       
<Avatar
     rounded
     size="large"
     containerStyle={{ alignSelf: 'center', top: 80 }}
     source={{
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/ICS_Quebec.svg/1200px-ICS_Quebec.svg.png',
        
     }}  />
      
<Avatar
     rounded
     size="large"
     containerStyle={{ alignSelf: 'center', top: 120}}
     source={{
      uri:
        'https://shop.r10s.jp/d-inform/cabinet/02364988/02364994/img58301982.jpg',
     }}/>
<View style={{flexDirection: 'row'}} containerStyle={{alignSelf: 'center'}}>
<Button
  title="yes"
  containerStyle={{ top: 160 , width: 100}}
/>

<Button
  title="no"
  containerStyle={{  top: 160, width: 100}}
/></View>
         </Overlay>
     );
}