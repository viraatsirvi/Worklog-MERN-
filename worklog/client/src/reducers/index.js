import { combineReducers } from 'redux';

// Reducers
import searchReducer from './search-reducer';
// import seatchartReducer from './seatchart-reducer';
// import checkoutReducer from './checkout-reducer';

// Combine Reducers
var reducers = combineReducers({
    search: searchReducer,
    // seatchart: seatchartReducer,
    // checkout: checkoutReducer
});

export default reducers;
