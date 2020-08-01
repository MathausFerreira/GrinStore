import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Button, Alert } from 'react-native';
import {updateValue,updateUserItemValue  } from '../actions';
import { connect } from 'react-redux';

// aqui é construido a cara do componente da lista
const AvailableItem = (props) => {
    const { eachItem } = props;
    return (
        <TouchableOpacity >
            {/* <View style={styles.line} > */}
                <View style={styles.fixToText}>
                {eachItem.Img ? <Image style={styles.avatar} source={{ uri: eachItem.Img }} /> : 
                <Image style={styles.avatar} source={{ uri: "https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png" }} />}
                <Text style={styles.lineTitle}> {eachItem.Name}</Text>
                <Text style={styles.lineValue}> R$ {eachItem.Price}</Text>
                    <Button title="  -  " onPress={() => {}} />
                    <Text style={styles.Number}>  {eachItem.Qtd} </Text>
                    <Button title="  + " onPress={() => {updateUserItemValue(eachItem,'Qtd',35)}} />
                    <Text>   </Text>
                </View>
                <View style={styles.separator} />
            {/* </View> */}
        </TouchableOpacity>
    );
}
//source={require('../images/flower.png')}
const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:"center",
        borderWidth: 2,
        borderColor:'red',
        padding:2,
    },
    avatar: {
        width: 50,
        aspectRatio: 1,
        resizeMode: 'cover',
        flex: 3,
        marginLeft: 15,
        borderRadius: 3,
    },
    Number: {
        flex:2,
        borderWidth: 2,
        borderColor:'green',
        textAlign:"center",
        fontSize: 25,

    },
    lineTitle: {
        fontSize: 20,
        flex: 7,
    },
    lineValue: {
        fontSize: 13,
        flex: 3,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

const mapDispatchToProps = {
    updateValue,
    updateUserItemValue
}


export default connect(null, mapDispatchToProps)(AvailableItem);