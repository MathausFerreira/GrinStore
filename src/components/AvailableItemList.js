import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import AvailableItem from '../components/AvailableItem';

const AvailableItemList = props => {
    const { Item, onPressItem } = props;
    // console.log(`ITem:  ${Item}`)
    const items = Item.map(eachItem => {
        return (<AvailableItem key={eachItem.id} eachItem={eachItem} />)
    });

    return (
        <ScrollView style={styles.container}>
            {items}
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    },
    
})

export default AvailableItemList;