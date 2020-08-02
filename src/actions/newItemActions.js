
import firebase from 'firebase';

export const SET_FIELD = 'SET_FIELD';
export const setField = (field, value) => {
    return {
        type: SET_FIELD,
        field,
        value
    }
};

export const SET_ITEM = 'SET_ITEM'
export const setItems = item => ({
    type: SET_ITEM,
    item,
})

export const RESET_FORM = 'RESET_FORM';
export const resetForm = () => ({
    type: RESET_FORM
});

export const ITEM_SAVED_SUCCESS = 'ITEM_SAVED_SUCCESS';
export const itemSavedSuccess = () => ({
    type: ITEM_SAVED_SUCCESS
});

export const ITEM_UPDATE_SUCCESS = 'ITEM_UPDATE_SUCCESS';
export const ItemUpdateSuccess = () => ({
    type: ITEM_UPDATE_SUCCESS
});

export const saveNewItem = Item => {
    const { currentUser } = firebase.auth();
    return async dispatch => {
        if (Item.id) {
            await firebase.database().ref(`Inventory/${Item.id}`).set(Item);
        } else {
            await firebase.database().ref(`Inventory`).push(Item);
        }
        dispatch(ItemSavedSuccess())
    }
}

export const deleteItem = (Item) => {
    return dispatch => {
        // // return new Promise((resolve, reject) => {
        //     console.log("IDD")
        //     console.log(Item)
            Alert.alert('Deletar', `Deseja realmente deletar  ${Item.Name}`, [
                {
                    text: 'Não',
                    onPress: () => { 
                        // resolve(false);
                    },
                    style: 'cancel'
                },
                {
                    text: 'Sim',
                    onPress: async () => { 
                        const {currentUser} = firebase.auth();
                        try{
                            await firebase
                            .database()
                            .ref(`/Inventory/${Item.id}`)
                            .remove()
                            resolve(true);
                        } catch(e) {
                            reject(e);
                        }
                    },
                }
            ], { cancelable: false }
            )
        // })
    }
}