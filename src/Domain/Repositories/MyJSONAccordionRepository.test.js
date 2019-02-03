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
        const mockJsonPromise = Promise.resolve([
            { }
        ]);
        const mockFetcherPromise = Promise.resolve({
            json: () => mockJsonPromise
        });

        jest.spyOn(fetcher, 'execute').mockImplementation(
            () => mockFetcherPromise
        );
        jest.spyOn(mapper, 'transform').mockImplementation(() => [ {a:1} ]);

        const instance = new MyJSONAccordionRepository({
            config,
            fetcher,
            mapper
        });

        instance.all().then(data => {
            expect(data).toEqual([ {a:1} ]);
            fetcher.execute.mockClear();
            mapper.transform.mockClear();
        });
    });
});
