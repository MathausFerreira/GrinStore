import React from 'react';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';

import AvailableItemList from '../components/AvailableItemList';

import { connect } from 'react-redux';
import { watchItem, setItems } from '../actions';

class Home extends React.Component {
    componentDidMount() {
        this.props.watchItem();
    }

    render() {
        const { itemList, user } = this.props;
        // console.log(` User email : ${user}`);
        if (itemList === null) {
            return <ActivityIndicator />;
        }
        return (
            <View style={styles.container}>
                <View style={styles.containerName}> 
                    <Text style={styles.userName}> {user.email}</Text>
                </View>
                <AvailableItemList Item={itemList} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    containerName:{
        alignItems:"center",
        justifyContent:"center",
        height:50,
        backgroundColor: '#aaa',
    },
    actionButton: {
        padding: 10,
    },
    userName: {
        fontSize: 25,
        color: 'white',
    },
});

const mapStateToProps = state => {
    const { itemList, user } = state;
    console.log(user);
    if (itemList === null) {
        return { itemList }
    }
    const keys = Object.keys(itemList);
    const ItemWithKeys = keys.map(id => { return { ...itemList[id], id } })

    const User = { ...user.user };
    // console.log(ItemWithKeys)
    return {
        itemList: ItemWithKeys,
        user: User
    };
}

export default connect(mapStateToProps, { watchItem, setItems })(Home);
