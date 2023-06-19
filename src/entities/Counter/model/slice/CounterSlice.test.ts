import { CounterScheme } from "../types/CounterSchema";
import { counterReducer, counterActions } from "./CounterSlice";

describe('counter reducer', () => {
  const initialState: CounterScheme = {
    value: 0
  };

  test('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  test('should handle increment', () => {
    const actual = counterReducer(initialState, counterActions.increment());
    expect(actual.value).toEqual(1);
  });

  test('should handle decrement', () => {
    const actual = counterReducer(initialState, counterActions.decrement());
    expect(actual.value).toEqual(-1);
  });
});
