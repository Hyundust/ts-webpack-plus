import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { User } from "entyes/User";
import i18n from "shared/config/i18n/i18n";
import { LOCAL_STORAGE_KEY } from "shared/const/localstorage";
import { userActions } from "entyes/User";

export interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk< User,LoginByUsernameProps,{ rejectValue: string }>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
      try {
          const response = await axios.post<User>('http://localhost:8000/login', authData);

          if (!response.data) {
              throw new Error();
          }
          localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(response.data))
          thunkAPI.dispatch(userActions.setAuthData(response.data))
         

          return response.data;
      } catch (e) {
          console.log(e);
          return thunkAPI.rejectWithValue("error");
      }
  },
);
