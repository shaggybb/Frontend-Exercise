import AccordionMappersFactory from './factory';
import FromArrayToListOfAccordionValueObjectsMapper from './FromArrayToListOfAccordionValueObjectsMapper';
jest.mock('./FromArrayToListOfAccordionValueObjectsMapper');

describe('AccordionMappersFactory', () => {
    test('Should return and empty array', () => {
        AccordionMappersFactory.fromArrayToListOfAccordionValueObjects();
        expect(FromArrayToListOfAccordionValueObjectsMapper).toHaveBeenCalled();
    });
});
