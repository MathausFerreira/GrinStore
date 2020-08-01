import React, { Component } from 'react';
import { Image, View, Slider, StyleSheet,
     TextInput, Button, Picker, Text, ScrollView,
     KeyboardAvoidingView, ActivityIndicator, Alert } from 'react-native';

import FormRow from '../components/FormRow';
import { connect } from 'react-redux'


import {setField, saveNewItem, setWholeItem, resetForm} from '../actions';


class NewItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        }
    }

    componentDidMount() {
        const {navigation, setWholeItem, resetForm} = this.props;
        const {params} = navigation.state;

        if(params && params.ItemToEdit){
            setWholeItem(params.ItemToEdit);
        } else{
            resetForm();
        }

    }

    render() {
        const { newItem, } = this.props;
        return (
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} >
                <ScrollView style={styles.container}>
                    <View style={styles.viewLogo}>
                    <Image style={styles.avatar} source={{ uri: "https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png" }} />
                    </View>
                    <FormRow>
                        <TextInput
                            style={styles.input}
                            placeholder='Nome do Produto'
                            value={newItem.Name}
                            onChangeTenewItemt={value => setField('Name', value)}
                        />
                    </FormRow>
                    <FormRow>
                        <TextInput
                            style={styles.input}
                            placeholder='Preço'
                            value={newItem.Price}
                            onChangeText={value => setField('Price', value)}
                        />
                    </FormRow>
                    <FormRow>
                        <TextInput
                            style={styles.input}
                            placeholder='Quantidade'
                            value={newItem.Qtd}
                            onChangeText={value => setField('Qtd', value)}
                        />
                    </FormRow>
                    {
                        this.state.isLoading
                            ? <ActivityIndicator />
                            : <Button
                                title="Salvar"
                                onPress={async () => {
                                    this.setState({ isLoading: true });
                                    try {
                                        await saveNewItem(newPlant);
                                        this.props.navigation.replace('Home');                                        
                                    } catch (error) {
                                        Alert.alert('Error!', 'error.message');
                                    } finally {
                                        this.setState({ isLoading: false })
                                    }
                                    this.setState({ isLoading: false });
                                }} />
                    }
                </ScrollView>
                <View style={{ height: 100 }} />
            </KeyboardAvoidingView>
        );
       
        


    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 0,
        paddingBottom: 10,
        marginBottom: 20,
    },
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
    },
    logo: {
        height: 224,
        width: 156,
        borderWidth: 0,
        resizeMode:'stretch'
    },
    viewLogo: {
        padding: 5,
        flexDirection: 'column',
        alignItems: 'center'
    },
});

function mapStateToProps(state) {
    return {
        NewItem: state.newItem
    }
}

const mapDispatchToProps = {
    setField,
    saveNewItem,
    setWholeItem,
    resetForm,
}

export default connect(mapStateToProps, mapDispatchToProps)(NewItem);