import { StateScheme } from 'app/providers/storeProvider';
import { Currency } from 'entyes/Currency';
import { Country } from 'entyes/Country';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should return error', () => {
        const form= {
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
                form,
            },
        };
        expect(getProfileForm(state as StateScheme)).toEqual(form);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getProfileForm(state as StateScheme)).toEqual(undefined);
    });
});
