import firebase from 'firebase';

export const SET_LIST = 'SET_LIST'
export const setItems = item => ({
    type: SET_LIST,
    item,
})



export const watchItem = () => {
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

export const updateValue = (Item, field, value) => {
    console.log(Item.id)
    return async dispatch => {
        if (Item.id) {
            // const val = Item.Qtd+1;
                await firebase.database().ref(`Inventory/${Item.id}`).update({ [field]: value });
        }
    }
}
export const updateUserItemValue = (Item, field, value) => {
    const { currentUser } = firebase.auth();
    console.log(Item.id)
    return async dispatch => {
        if (Item.id) {
            // const val = Item.Qtd+1;
                await firebase.database().ref(`users/${currentUser.id}/userProducts/${Item.id}`).update({ [field]: value });
        }
    }
}



// export const watchItem = () => {
//     const { currentUser } = firebase.auth();
//     return dispatch => {
//         firebase
//             .database()
//             .ref(`/users/${currentUser.uid}/userProducts`)
//             .on('value', snapshot => {
//                 const items = snapshot.val();
//                 const action = setItems(items);
//                 dispatch(action);
//             });
//     }
// }
