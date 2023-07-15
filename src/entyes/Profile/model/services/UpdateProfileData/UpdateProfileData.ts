import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/storeProvider";
import { ProfileUser } from "../../types/profile"
import { getProfileForm } from "../../selector/getProfileForm/getProfileForm";
import { validateProfileData } from "../ValidateProfileData/validateProfileData";
import { ValidateProfileError } from "../../types/profile";

export const updateProfileData = createAsyncThunk<ProfileUser,void,ThunkConfig<ValidateProfileError[]>>(
  'profile/updateProfileData',
  async (_, {extra,rejectWithValue,getState}) => {

    const formData = getProfileForm(getState());
    const errors = validateProfileData(formData);
    if(errors.length){
        return rejectWithValue(errors);
    }
      try {
          const response = await extra.api.put<ProfileUser>(`/profile/${formData?.id}`,formData);
          return response.data;
      } catch (e) {
          console.log(e);
          return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
      }
  },
);