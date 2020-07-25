import {combineReducers} from 'redux';

import userReducer from './userReducer';
import itemListReducer from './itemListReducer';

export default combineReducers({
    user: userReducer,
    itemList: itemListReducer,    
    // newItem: newItemFormReducer,

});