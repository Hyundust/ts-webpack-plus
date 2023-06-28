import { StateScheme } from 'app/providers/storeProvider';
import { ValidateProfileError } from '../../types/profile';
import { getProfileValidateError } from './getProfileValidateError';

describe('getProfileValidateErrors.test', () => {
    test('should work with filled state', () => {
        const state: DeepPartial<StateScheme> = {
            profile: {
                ValidateError : [
                    ValidateProfileError.SERVER_ERROR,
                    ValidateProfileError.INCORRECT_USER_AGE,
                ],
            },
        };
        expect(getProfileValidateError(state as StateScheme)).toEqual([
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.INCORRECT_USER_AGE,
        ]);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getProfileValidateError(state as StateScheme)).toEqual(undefined);
    });
});
