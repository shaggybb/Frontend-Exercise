import FetcherService from '../Services/FetcherService';

describe('MyJSONAccordionRepository', () => {
    test('Should instanciate', () => {
        expect(() => {
            new FetcherService();
        }).not.toThrowError();
    });

    test('Should return and empty array', () => {
        const config = {
            MYJSON_URL: 'fake_url'
        };

        const mockStaticF = jest.fn();
        mockStaticF.mockReturnValue(Promise.resolve([{ name: 'test' }]));

        global.fetch = mockStaticF.bind(global);

        const fetcher = new FetcherService();
        expect(fetcher.execute()).toEqual(Promise.resolve([{ name: 'test' }]));
    });
});
