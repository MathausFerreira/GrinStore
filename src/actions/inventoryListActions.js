import firebase from 'firebase';

export const SET_LIST = 'SET_LIST'
export const setItems = item => ({
    type: SET_LIST,
    item,
})

export const watchInventory = () => {
    const { currentUser } = firebase.auth();
    return dispatch => {
        firebase
            .database()
            .ref(`Inventory`)
            .on('value', snapshot => {
                const items = snapshot.val();
                const action = setItems(items);
                dispatch(action);
            });
    }
}

export const updateInventoryItemValue = (Item, field, value) => {
    // const { currentUser } = firebase.auth();
    // console.log(Item.id)
    return async dispatch => {
        if (Item.id) {
            // const val = Item.Qtd+1;
                await firebase.database().ref(`Inventory/${Item.id}`).update({ [field]: parseFloat(item.Qtd)+value });
        }
    }
}
