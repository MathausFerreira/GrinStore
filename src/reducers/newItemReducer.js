import {SET_ITEM, RESET_FORM, SET_FIELD, ITEM_SAVED_SUCCESS } from '../actions';

// trata cada campo do formulario e n~çao meu objeto da store

const INITIAL_STATE = {
        Name: '',
        Qtd:'',
        Price: '',
        Img:''
    }


export default function (state = INITIAL_STATE, action) {

        switch (action.type) {
                case SET_FIELD:
                        const newState = { ...state };
                        newState[action.field] = action.value;
                        return newState;

                case SET_ITEM:
                case ITEM_UPDATE_SUCCESS:
                        return action.item;

                case RESET_FORM:
                case ITEM_SAVED_SUCCESS:
                        return INITIAL_STATE;
                default:
                        return state;
        }
}