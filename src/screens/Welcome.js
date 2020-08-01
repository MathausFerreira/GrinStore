import React from 'react';
import { StyleSheet, View, ActivityIndicator, ScrollView, Text, TouchableOpacity, Image} from 'react-native';

import { connect } from 'react-redux';

class Welcome extends React.Component {
    componentDidMount() {
        // this.props.watchItem();
    }

    render() {
        const { user } = this.props;

        if (user === null) {
            return <ActivityIndicator />;
        }
        return (
            <ScrollView>
                <View style={[styles.container]} >
                    <View style={styles.containerPicture}>
                        {user.Img ? <Image source={{ uri: user.Img }} /> : <Image source={{ uri: "https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png" }} />}
                    </View>
                    <Text style={styles.userName}> {user.email}</Text>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => { return this.props.navigation.navigate('Home')}}>
                        <View style={styles.central}>
                            <Text style={styles.text}> Comprar </Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.espaco} />
                  <TouchableOpacity onPress={() => { return this.props.navigation.navigate('Home')}}>
                        <View style={styles.central}>
                            <Text style={styles.text}> Minha conta </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { return this.props.navigation.navigate('NewItem')}}>
                        <View style={styles.central}>
                            <Text style={styles.text}> Cadastrar Item </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.container}>
                    <View style={styles.central} />
                    <View style={styles.espaco} />
                    <View style={styles.central} />
                </View> */}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    text:{
        fontSize: 20,
        color: 'blue',
    },
    userName: {
        fontSize: 25,
        color: 'white',
    },
    container: {
        flexDirection: 'row',
        justifyContent: "center",
        backgroundColor: '#555',
        borderColor: 'green',
        borderWidth: 2,
        padding: 10,
    },
    containerPicture: {
        width: 250,
        height: 250,
        borderRadius:40,
        borderColor:'black',
        borderWidth:2,
    },
    central: {
        // flex: 1,
        backgroundColor: '#999',
        borderColor: 'red',
        borderWidth: 2,
        borderRadius: 40,
        width: 150,
        height: 150,
        padding: 10,
    },
    espaco: {
        // flex:1,
        width: 20,
    }

});

const mapStateToProps = state => {
    const { user } = state;
    return { user };

    // const keys = Object.keys(itemList);
    // const ItemWithKeys = keys.map(id => { return { ...itemList[id], id } })
    // console.log(ItemWithKeys)
}

export default connect(mapStateToProps, null)(Welcome);
