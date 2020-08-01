import firebase from 'firebase';
// import { Alert } from 'react-native';

export const SET_ITEMS = 'SET_ITEMS'
export const setItems = items => ({
    type: SET_ITEMS,
    items,
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

export const updateValue = (Item, field, value) => {
    console.log(Item.id)
    return async dispatch => {
        if (Item.id) {
            // const val = Item.Qtd+1;
                await firebase.database().ref(`Inventory/${Item.id}`).update({ [field]: value });
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
