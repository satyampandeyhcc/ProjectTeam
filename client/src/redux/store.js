import { createStore, applyMiddleware  , combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { alertsReducer } from './reducers/alertsReducer';
import { carsReducer } from './reducers/bikesReducer';
import { bookingsReducer } from './reducers/bookingsReducer';
import { profileImageView  } from './reducers/imageReducer';
const composeEnhancers = composeWithDevTools({});


const rootReducer = combineReducers({
   carsReducer,
   alertsReducer,
   bookingsReducer,
   profileImageView,
   
})

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
   
  )
);

export default store