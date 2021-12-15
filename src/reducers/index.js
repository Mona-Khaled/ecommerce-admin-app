//root reducer creation

import authReducer from './auth.reducers';
import useReducer from './user.reducer';
import productReducer from './product.reducer';
import orderReducer from './order.reducer';
import categoryReducer from './category.reducer';
import pageReducer from './page.reducer';
import { combineReducers } from 'redux';

//When you dispatch an action creator it passes the action object to the root reducer.
//The action object is passed through the entire state tree and any reducers that process 
//the action type consume it.

const rootReducer = combineReducers({
    auth: authReducer,
    user: useReducer,
    product: productReducer,
    order: orderReducer,
    category: categoryReducer,
    page: pageReducer
});

export default rootReducer;