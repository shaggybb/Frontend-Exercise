import ServicesFactory from './factory';
import FetcherService from './FetcherService';
jest.mock('./FetcherService')


describe('ServicesFactory', () => {

    test('Should return and empty array', () => {
        const config = {
            MYJSON_URL: 'fake_url'
        };

        ServicesFactory.fetcherService({ config });
        expect(FetcherService).toHaveBeenCalled();
    });
});
