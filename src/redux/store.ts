import {configureStore, combineReducers, Action} from '@reduxjs/toolkit';
import {ThunkAction} from 'redux-thunk';
import rootReducer, {RootState} from './reducers';
import middleware from './middlewares';

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

const store = configureStore({
  reducer: rootReducer,
  middleware
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./reducers/index', () => {
    const newRootReducer = require('./reducers/index').default;
    store.replaceReducer(newRootReducer);
  });
}

export default store;
