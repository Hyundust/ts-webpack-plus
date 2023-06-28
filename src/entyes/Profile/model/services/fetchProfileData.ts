import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/storeProvider";
import { ProfileUser } from "../types/profile";



export const fetchProfileData = createAsyncThunk<ProfileUser,void,ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, {extra,rejectWithValue}) => {
      try {
          const response = await extra.api.get<ProfileUser>('/profile');
          return response.data;
      } catch (e) {
          console.log(e);
          return rejectWithValue("error");
      }
  },
);