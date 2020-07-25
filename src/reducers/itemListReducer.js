import { SET_ITEMS } from '../actions';

// trata cada campo do formulario e n~çao meu objeto da store
const INITIAL_STATE = null;

export default function(state = INITIAL_STATE, action) {

        switch (action.type) {
                case SET_ITEMS:
                        return action.items;

                default:
                        return state;
        }
}