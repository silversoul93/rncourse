import { createStore, combineReducers, compose } from 'redux';
import placesReducer from './reducers/places';

const rootReducer = combineReducers({
  places: placesReducer
});

let composeEnhancers = compose;

// We need it to enable redux into the remote debugger; if we are in dev mode, with the debugger connected, we can use 
// __REDUX_DEVTOOLS_EXTENSION_COMPOSE__, otherwise we simply use the normal compose
if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(/* middlewares */));
};

export default configureStore;