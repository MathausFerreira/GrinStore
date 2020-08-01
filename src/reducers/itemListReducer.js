import { SET_LIST } from '../actions';

// trata cada campo do formulario e n~çao meu objeto da store

const INITIAL_STATE = {
        id: null,
        Name: '',
        Qtd:'',
        Price: '',
        Img:''
    }


export default function (state = INITIAL_STATE, action) {

        switch (action.type) {

                case SET_LIST:
                        return action.items;
                default:
                        return state;
        }
}