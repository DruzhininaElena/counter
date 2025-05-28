import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {counterReducer} from '../model/counter-reducer.ts';
import {loadState, saveState} from '../common/utils/localStorage.ts';

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: loadState()
}, )

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    });
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
