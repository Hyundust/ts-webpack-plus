import { AsyncThunkAction } from "@reduxjs/toolkit";
import { StateScheme } from "app/providers/storeProvider";
import axios from "axios";
import { AxiosStatic } from "axios";
// Define a type for the async thunk action creator function that takes an `Arg` argument,
// returns an async thunk action of type `AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>`,
// and has generic type parameters for `Return` (the return type of the async thunk),
// and `RejectedValue` (the type of the value that can be rejected from the async thunk).
type ActionCreatorType<Return, Arg, RejectedValue> = (arg:Arg )=> AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

jest.mock("axios");
const mockedAxios = jest.mocked(axios);

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>; // A mocked `dispatch` function
  getState: () => StateScheme; // A function that returns the current app state
  actionCreator:ActionCreatorType<Return, Arg, RejectedValue>; // The async thunk action creator function

  api: jest.MockedFunctionDeep<AxiosStatic>;
  navigate: jest.MockedFn<any>;

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue> ){
    this.dispatch = jest.fn();
    this.getState = jest.fn();
    this.actionCreator = actionCreator;
    this.api = mockedAxios
    this.navigate = jest.fn();
  }

  // A method that calls the async thunk with the specified `arg` parameter
  async CallThunk(arg:Arg){
    const action = this.actionCreator(arg); // Create the async thunk action
    const result = await action(this.dispatch, this.getState, {api:this.api,navigate:this.navigate}); // Dispatch the async thunk and wait for its completion
    return result; // Return the result of the async thunk
  }
}
