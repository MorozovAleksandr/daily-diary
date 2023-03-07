import { CounterState } from './';

import { RootState } from '../../store';

export const selectCounter = (state: RootState): CounterState['value'] => state.counter.value;
