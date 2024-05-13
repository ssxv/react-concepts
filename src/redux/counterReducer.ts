import { Reducer } from 'redux';
import { INCREMENT, DECREMENT } from './counterActions';

export interface ICounterState {
  count: number;
}

const initialState: ICounterState = {
  count: 0,
};

const counterReducer: Reducer<ICounterState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;
