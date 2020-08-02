import {combineReducers} from 'redux';

import userReducer from './userReducer';
import itemListReducer from './itemListReducer';
import newItemReducer from "./newItemReducer";
import inventoryListReducer from './inventoryListReducer';

export default combineReducers({
    user: userReducer,
    userItemList: itemListReducer,    
    newItem: newItemReducer,
    inventoryList: inventoryListReducer,

});