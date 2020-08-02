import React from 'react';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';

import AvailableItemList from '../components/AvailableItemList';

import { connect } from 'react-redux';
import { watchUserItem, setItems } from '../actions';

class Home extends React.Component {
    componentDidMount() {
        this.props.watchUserItem();
    }

    render() {
        const { userItemList, user } = this.props;
        // console.log(` User email : ${user}`);
        if (userItemList === null) {
            return <ActivityIndicator />;
        }
        return (
            <View style={styles.container}>
                <View style={styles.containerName}> 
                    <Text style={styles.userName}> {user.email}</Text>
                </View>
                <AvailableItemList Item={userItemList} />
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
    const {userItemList, user } = state;
    console.log(user);
    if (userItemList === null) {
        return { userItemList }
    }
    const keys = Object.keys(userItemList);
    const ItemWithKeys = keys.map(id => { return { ...userItemList[id], id } })

    const User = { ...user.user };
    // console.log(ItemWithKeys)
    return {
        userItemList: ItemWithKeys,
        user: User
    };
}

export default connect(mapStateToProps, { watchUserItem, setItems })(Home);
