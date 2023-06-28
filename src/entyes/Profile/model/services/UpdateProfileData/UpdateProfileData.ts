import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/storeProvider";
import { ProfileUser } from "../../types/profile"
import { getProfileForm } from "../../selector/getProfileForm/getProfileReadOnly";


export const updateProfileData = createAsyncThunk<ProfileUser,void,ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, {extra,rejectWithValue,getState}) => {

    const formData = getProfileForm(getState());
      try {
          const response = await extra.api.put<ProfileUser>('/profile',formData);
          return response.data;
      } catch (e) {
          console.log(e);
          return rejectWithValue("error");
      }
  },
);