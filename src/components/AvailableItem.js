import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Button,Alert } from 'react-native';
import { setWholeItem, updatePlus, updateMinus, } from '../actions';
import { connect } from 'react-redux';

// aqui é construido a cara do componente da lista
const AvailableItem = (props) => {
    const { eachItem } = props;
    return (
        <TouchableOpacity >
            {/* <View style={styles.line} > */}
                <View style={styles.fixToText}>
                {eachItem.img ? <Image style={styles.avatar} source={{ uri: eachItem.img }} /> : <Image style={styles.avatar} source={{ uri: "https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png" }} />}
                <Text style={styles.lineText}> {eachItem.Name}</Text>
                    <Button title="  -  " onPress={() => {updateMinus(eachItem.key)}} />
                    <Text style={styles.Number}> 00 </Text>
                    <Button title="  + " onPress={() => {updatePlus(eachItem.key)}} />
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
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

const mapDispatchToProps = {
    setWholeItem,
    updatePlus,
    updateMinus,
}


export default connect(null, mapDispatchToProps)(AvailableItem);