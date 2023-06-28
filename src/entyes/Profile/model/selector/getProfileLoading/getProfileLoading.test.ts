import { StateScheme } from 'app/providers/storeProvider';
import { getProfileLoading } from './getProfileLoading';


describe('getProfileLoading.test', () => {
    test('should return error', () => {
        
        const state: DeepPartial<StateScheme> = {
            profile: {
                loading:true
            },
        };
        expect(getProfileLoading(state as StateScheme)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getProfileLoading(state as StateScheme)).toEqual(undefined);
    });
});
