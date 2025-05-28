import {RootState} from '../app/store.ts';
import {Counter} from '../common/types.ts';


export const selectCounter = (state: RootState): Counter => state.counter