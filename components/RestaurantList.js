import React from 'react';
import { Image, ListItem } from 'react-native-elements';
import { View } from 'react-native';

export default function restaurantList(props) {
    const list = [
        {
            name: 'Gogoro',
            avatar_url: 'https://i.imgur.com/SCFe59u.jpeg',
            subtitle: 'ABC-111                       $280'
        },
        {
            name: "SYM",
            avatar_url: 'https://i.imgur.com/SCFe59u.jpeg',
            subtitle: 'ABC-222                       $250'
        },
        {
            name: 'SYM',
            avatar_url: 'https://i.imgur.com/SCFe59u.jpeg',
            subtitle: 'ABC-333                       $250'
        }, 
    ];

    return (
        <View>
            <Image
                source={require('../map.png')}
                style={{ width: 400, height: 450 }}
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