import { createStore, combineReducers } from 'redux';
import reducer from '../reducers';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    reducer
});

export default () => {
    return createStore(rootReducer, applyMiddleware(thunk));
}