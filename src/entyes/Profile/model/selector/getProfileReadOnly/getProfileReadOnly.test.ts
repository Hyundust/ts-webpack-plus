import { StateScheme } from 'app/providers/storeProvider';
import { getProfileReadOnly } from './getProfileReadOnly';

describe('getProfileReadonly.test', () => {
    test('should work with filled state', () => {
        const state: DeepPartial<StateScheme> = {
            profile: {
                readonly: true,
            },
        };
        expect(getProfileReadOnly(state as StateScheme)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getProfileReadOnly(state as StateScheme)).toEqual(undefined);
    });
});
