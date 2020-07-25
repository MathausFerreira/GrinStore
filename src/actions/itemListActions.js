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
            .ref(`/users/${currentUser.uid}/Plant`)
            .on('value', snapshot => {
                const items = snapshot.val();
                const action = setItems(items);
                dispatch(action);
            });
    }
}

// export const updatePlus = (Item) => {
//     const { currentUser } = firebase.auth();
//     return async dispatch => {
//         if (plant.id) {
//                 await firebase.database().ref(`users/${currentUser.uid}/Plant/${plant.id}/Actuators`).update({ [field]: value });
//         }
//     }
// }

// export const updateMinus = (Item) => {
//     const { currentUser } = firebase.auth();
//     return async dispatch => {
//         if (plant.id) {
//                 await firebase.database().ref(`users/${currentUser.uid}/Plant/${plant.id}/Actuators`).update({ [field]: value });
//         }
//     }
// }