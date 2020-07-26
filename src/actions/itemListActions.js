import firebase from 'firebase';
// import { Alert } from 'react-native';

export const SET_ITEMS = 'SET_ITEMS'
const setItems = items => ({
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


export const updatePlus = (Item) => {
    const { currentUser } = firebase.auth();
    console.log(Item)
    return async dispatch => {
        if (Item.id) {
            const val = Item.Qtd+1;
                await firebase.database().ref(`Inventory/${Item.id}`).update({ Qtd: val });
        }
    }
}

export const updateMinus = (Item) => {
    const { currentUser } = firebase.auth();
    return async dispatch => {
        if (plant.id) {
                await firebase.database().ref(`users/${currentUser.uid}/Plant/${plant.id}/Actuators`).update({ [field]: value });
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
