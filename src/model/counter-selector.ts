import {RootState} from '../app/store.ts';
import {Counter} from '../app/App.tsx';

export const selectCounter = (state: RootState): Counter => state.counter