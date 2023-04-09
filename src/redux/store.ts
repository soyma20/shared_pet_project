import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { homeReducer } from './slices/home-slice';

const rootReducer = combineReducers({homeReducer});

export const setupStore =() => configureStore({reducer:rootReducer});

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
