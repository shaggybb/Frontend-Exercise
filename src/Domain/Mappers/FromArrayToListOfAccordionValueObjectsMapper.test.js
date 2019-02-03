import FromArrayToListOfAccordionValueObjectsMapper from './FromArrayToListOfAccordionValueObjectsMapper';
import AccordionVO from "../ValueObjects/AccordionVO";

jest.mock('../ValueObjects/AccordionVO.js');

describe('FromArrayToListOfAccordionValueObjectsMapper', () => {
    test('Should instanciate', () => {
        expect(() => {
            new FromArrayToListOfAccordionValueObjectsMapper();
        }).not.toThrowError();
    });

    test('Should return an empty array', () => {
        const instance = new FromArrayToListOfAccordionValueObjectsMapper();
        const data = instance.transform([]);
        expect(data).toBeInstanceOf(Array);
    });

    test('Should return an array with one object', () => {
        const instance = new FromArrayToListOfAccordionValueObjectsMapper();
        const data = instance.transform([
            {
                section: 'a',
                content: 'b'
            }
        ]);
        expect(data).toBeInstanceOf(Array);
        expect(data[0]).toBeInstanceOf(AccordionVO);
    });

    test('Should return an array with multiple objetcts', () => {
        const instance = new FromArrayToListOfAccordionValueObjectsMapper();
        const items = [
            {
                section: 'a',
                content: 'b'
            },
            {
                section: 'a',
                content: 'b'
            },
            {
                section: 'a',
                content: 'b'
            }
        ];
        const data = instance.transform(items);

        expect(data).toBeInstanceOf(Array);
        data.forEach(item => expect(item).toBeInstanceOf(AccordionVO));
    });
});
