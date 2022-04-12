import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import user from '../components/form-submition/userSlice';
import editUserProfile from '../components/form-edit/editSlice';

const stringMiddleware = () => (next: any) => (action: any) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
};
const reducers = combineReducers({
  user,
  editUserProfile
});
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};
const persistedReducer = persistReducer<any, any>(persistConfig, reducers);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },}).concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch