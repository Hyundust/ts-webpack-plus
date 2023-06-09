import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { User } from "entyes/User";
import i18n from "shared/config/i18n/i18n";
import { LOCAL_STORAGE_KEY } from "shared/const/localstorage";
import { userActions } from "entyes/User";
import { ThunkConfig } from "app/providers/storeProvider";
import { ThunkExtraArg } from "app/providers/storeProvider/config/configScheme";


export interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
                                     User,
                                     LoginByUsernameProps,
                                     ThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, {dispatch,extra,rejectWithValue}) => {
      try {
          const response = await extra.api.post<User>('/login', authData);
          
          if (!response.data) {
              throw new Error();
          }
          localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(response.data))
          dispatch(userActions.setAuthData(response.data))
          
         

          return response.data;
      } catch (e) {
          console.log(e); 
          return rejectWithValue("error");
      }
  },
);
