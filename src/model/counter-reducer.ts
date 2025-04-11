import {createAction, createReducer} from '@reduxjs/toolkit';
import {Counter} from '../app/App.tsx';

const initialState: Counter = {
    count: 0,
    maxCount: 5,
    startCount: 0,
    isSetting: false
}

export const changeMaxCountAC = createAction<{ newMaxCount: number }>('counter/changeMaxCount')
export const changeStartCountAC = createAction<{ newStartCount: number }>('counter/changeStartCount')
export const incrementCountAC = createAction('counter/incrementCount')
export const resetCountAC = createAction('counter/resetCount')
export const changeIsSettingsAC = createAction<{ isSetting: boolean }>('counter/changeIsSettings')


export const counterReducer = createReducer(initialState, builder => {
    builder
        .addCase(changeMaxCountAC, (state, action) => {
            state.maxCount = action.payload.newMaxCount
            state.isSetting = false
        })
        .addCase(changeStartCountAC, (state, action) => {
            state.startCount = action.payload.newStartCount
            state.count = action.payload.newStartCount
            state.isSetting = false
        })
        .addCase(incrementCountAC, (state) => {
            state.count += 1
        })
        .addCase(resetCountAC, (state) => {
            state.count = state.startCount
        })
        .addCase(changeIsSettingsAC, (state, action) => {
            state.isSetting = action.payload.isSetting
        })
})