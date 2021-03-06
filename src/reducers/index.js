import categoryReducer from "./category.reducers";
import orderReducer from "./order.reducers";
import productReducer from './product.reducers';
import { combineReducers } from 'redux';
/** 
 * combineReducers is to merge all the Reducers in the folder.
 * This avoids the importing of reducers individually.
**/
const rootReducer = combineReducers({
    category: categoryReducer,
    product: productReducer,
    order: orderReducer,
});

export default rootReducer;