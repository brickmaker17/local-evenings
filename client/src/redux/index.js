import { createStore, combineReducers, applyMiddleware } from 'redux';
import locations from './locations';

import thunk from 'redux-thunk';

const rootReducer = (combineReducers({ locations }));

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
    // console.log(store.getState());
})

export default store;

