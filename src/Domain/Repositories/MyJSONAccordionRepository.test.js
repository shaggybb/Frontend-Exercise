import MyJSONAccordionRepository from './MyJSONAccordionRepository';
import FetcherService from '../Services/FetcherService';
import FromArrayToListOfAccordionValueObjectsMapper from '../Mappers/FromArrayToListOfAccordionValueObjectsMapper';

describe('MyJSONAccordionRepository', () => {
    test('Should not instanciate', () => {
        expect(() => {
            new MyJSONAccordionRepository();
        }).toThrowError();
    });

    test('Should return and empty array', async () => {
        const config = {
            MYJSON_URL: 'fake_url'
        };

        const fetcher = new FetcherService();
        const mapper = new FromArrayToListOfAccordionValueObjectsMapper();

        const mockSuccessResponse = {};
        const mockJsonPromise = Promise.resolve(mockSuccessResponse);
        const mockFetcherPromise = Promise.resolve({
            json: () => mockJsonPromise
        });

        jest.spyOn(fetcher, 'execute').mockImplementation(() => mockFetcherPromise);
        jest.spyOn(mapper, 'transform').mockImplementation(() => []);

        const instance = new MyJSONAccordionRepository({
            config,
            fetcher,
            mapper
        });

        await expect(instance.all()).toEqual(new Promise(resolve => {}));

        fetcher.execute.mockClear();
        mapper.transform.mockClear();
    });
});
