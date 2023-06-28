import { StateScheme } from 'app/providers/storeProvider';
import { getProfileData } from './getProfileData';
import { Currency } from 'entyes/Currency';
import { Country } from 'entyes/Country';

describe('getProfileData.test', () => {
    test('should return error', () => {
        const data = {
            username: 'admin',
            age: 22,
            country: Country.Ukraine,
            lastname: 'NERTZ',
            first: 'asd',
            city: 'asf',
            currency: Currency.USD,
        };
        const state: DeepPartial<StateScheme> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateScheme)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getProfileData(state as StateScheme)).toEqual(undefined);
    });
});
