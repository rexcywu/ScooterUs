import React from 'react';
import { Image, ListItem } from 'react-native-elements';
import { View } from 'react-native';

export default function restaurantList(props) {
    const list = [
        {
            name: 'El Charro',
            avatar_url: 'http://delaneys.com.hk/wp-content/uploads/2015/11/Logo_E_001.png',
            subtitle: 'A chef-driven open kitchen.'
        },
        {
            name: "Delaney's",
            avatar_url: 'https://lh5.googleusercontent.com/p/AF1QipNczegB18LHeeIEZjMJgELUSKDI7Z2Vt0TLTlUk=w426-h240-k-no',
            subtitle: 'French Ambrosia.'
        },
        {
            name: 'Umami',
            avatar_url: 'https://lh5.googleusercontent.com/p/AF1QipNKF9gSBInCnGL11Rxj6m895nM5gaht7BdW_xYv=w408-h279-k-no',
            subtitle: 'Japanese delicacy.'
        }, {
            name: 'DiVino',
            avatar_url: 'https://lh5.googleusercontent.com/p/AF1QipM7XeULzGb-2YT8DKaYkxW4-ttZBUMjzr9QmOdP=w408-h305-k-no',
            subtitle: 'Fine wine & bears.'
        }, {
            name: 'Wildfire',
            avatar_url: 'https://s3.amazonaws.com/bucket2.wildfirerestaurant.com/wp-content/uploads/wildfire-101.jpg',
            subtitle: 'A fantastic American steak house.'
        },
    ];

    return (
        <View>
            <Image
                source={require('../map.png')}
                style={{ width: 500, height: 450 }}
            />
            {
                list.map((l, i) => (
                    <ListItem
                        key={i}
                        leftAvatar={{ source: { uri: l.avatar_url } }}
                        title={l.name}
                        subtitle={l.subtitle}
                        bottomDivider
                        onPress={props.listItemClicked}
                    />
                ))
            }
        </View>
    );
}