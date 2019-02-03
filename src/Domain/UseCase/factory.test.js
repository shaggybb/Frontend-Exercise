import AccordionUseCasesFactory from './factory';
import GetAccordionItemsFromAJAXContentUseCase from './GetAccordionItemsFromAJAXContentUseCase';
jest.mock('./GetAccordionItemsFromAJAXContentUseCase');

describe('AccordionUseCasesFactory', () => {
    test('Should return and empty array', () => {
        const config = {
            MYJSON_URL: 'fake_url'
        };

        AccordionUseCasesFactory.listOfAccordionItemsUseCase({ config });
        expect(GetAccordionItemsFromAJAXContentUseCase).toHaveBeenCalled();
    });
});
