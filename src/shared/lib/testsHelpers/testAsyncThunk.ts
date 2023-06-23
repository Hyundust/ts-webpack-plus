import { AsyncThunkAction } from "@reduxjs/toolkit";
import { StateScheme } from "app/providers/storeProvider";

// Define a type for the async thunk action creator function that takes an `Arg` argument,
// returns an async thunk action of type `AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>`,
// and has generic type parameters for `Return` (the return type of the async thunk),
// and `RejectedValue` (the type of the value that can be rejected from the async thunk).
type ActionCreatorType<Return, Arg, RejectedValue> = (arg:Arg )=> AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>; // A mocked `dispatch` function
  getState: () => StateScheme; // A function that returns the current app state
  actionCreator:ActionCreatorType<Return, Arg, RejectedValue>; // The async thunk action creator function

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue> ){
    this.dispatch = jest.fn();
    this.getState = jest.fn();
    this.actionCreator = actionCreator;
  }

  // A method that calls the async thunk with the specified `arg` parameter
  async CallThunk(arg:Arg){
    const action = this.actionCreator(arg); // Create the async thunk action
    const result = await action(this.dispatch, this.getState, undefined); // Dispatch the async thunk and wait for its completion
    return result; // Return the result of the async thunk
  }
}
