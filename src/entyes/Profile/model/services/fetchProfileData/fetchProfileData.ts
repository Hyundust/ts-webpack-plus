import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/storeProvider";
import { ProfileUser } from "../../types/profile";



export const fetchProfileData = createAsyncThunk<ProfileUser,string,ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (profileId, thunkApi) => {
   const  {extra,rejectWithValue} = thunkApi
      try {
          const response = await extra.api.get<ProfileUser>(`/profile/${profileId}`);
          return response.data;
      } catch (e) {
          console.log(e);
          return rejectWithValue("error");
      }
  },
);