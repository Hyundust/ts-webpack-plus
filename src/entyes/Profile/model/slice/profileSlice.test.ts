import { ProfileScheme } from "../types/profile";
import { profileReducer,profileActions } from "./profileSlice";
import { Country } from "entyes/Country";
import { Currency } from "entyes/Currency";
import { ValidateProfileError } from "../types/profile";
import { updateProfileData } from "../services/UpdateProfileData/UpdateProfileData";

const data = {
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    lastname: 'ulbi tv',
    first: 'asd',
    city: 'asf',
    currency: Currency.USD,
};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileScheme> = { readonly: false };
        expect(profileReducer(
            state as ProfileScheme,
            profileActions.setReadOnly(true),
        )).toEqual({ readonly: true });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileScheme> = { data, form: { username: '' } };

        expect(profileReducer(
            state as ProfileScheme,
            profileActions.cancelEditToServer,
        )).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileScheme> = { form: { username: '123' } };

        expect(profileReducer(
            state as ProfileScheme,
            profileActions.updateProfile({
                username: '123456',
            }),
        )).toEqual({
            form: { username: '123456' },
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileScheme> = {
            loading: false,
            ValidateError: [ValidateProfileError.SERVER_ERROR],
        };

        expect(profileReducer(
            state as ProfileScheme,
            updateProfileData.pending,
        )).toEqual({
            loading: true,
            ValidateErrors: undefined,
        });
    });

    test('test update profile service fullfiled', () => {
        const state: DeepPartial<ProfileScheme> = {
            loading: true,
        };

        expect(profileReducer(
            state as ProfileScheme,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            loading: false,
            validateErrors: undefined,
            readonly: true,
            ValidateError: undefined,
            form: data,
            data,
        });
    });
});
