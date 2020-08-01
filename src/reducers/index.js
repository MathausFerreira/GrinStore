import {combineReducers} from 'redux';

import userReducer from './userReducer';
import itemListReducer from './itemListReducer';
import newItemReducer from "./newItemReducer";

export default combineReducers({
    user: userReducer,
    itemList: itemListReducer,    
    newItem: newItemReducer,

});