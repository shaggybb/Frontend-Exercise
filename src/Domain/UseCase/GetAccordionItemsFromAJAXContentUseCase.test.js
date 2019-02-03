
import GetAccordionItemsFromAJAXContentUseCase from './GetAccordionItemsFromAJAXContentUseCase';
import MyJSONAccordionRepository from '../Repositories/MyJSONAccordionRepository';
jest.mock('../Repositories/MyJSONAccordionRepository')

describe('GetAccordionItemsFromAJAXContentUseCase', () => {
    test('Should not instanciate', () => {
        expect(() => {
            new GetAccordionItemsFromAJAXContentUseCase();
        }).toThrowError();
    });

    test('Should return and empty array', async () => {
        const repository = new MyJSONAccordionRepository();
        const instance = new GetAccordionItemsFromAJAXContentUseCase({
            repository
        });

        instance.execute().then(data => {
            expect(MyJSONAccordionRepository).toHaveBeenCalledTimes(1);
        });
    });
});
