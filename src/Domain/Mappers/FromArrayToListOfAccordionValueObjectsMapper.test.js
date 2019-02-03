import FromArrayToListOfAccordionValueObjectsMapper from './FromArrayToListOfAccordionValueObjectsMapper';

jest.mock('../ValueObjects/AccordionVO.js');

describe('FromArrayToListOfAccordionValueObjectsMapper', () => {
    test('Should instanciate', () => {
        expect(() => {
            new FromArrayToListOfAccordionValueObjectsMapper();
        }).not.toThrowError();
    });

    test('Should return an empty array', () => {
        const instance = new FromArrayToListOfAccordionValueObjectsMapper();
        expect(instance.transform([])).toEqual([]);
    });

    test('Should return an array with one object', () => {
        const instance = new FromArrayToListOfAccordionValueObjectsMapper();
        expect(
            instance.transform([
                {
                    section: 'a',
                    content: 'b'
                }
            ])
        ).toEqual([
            {
                content: 'b',
                section: 'a'
            }
        ]);
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
        expect(
            instance.transform(items)
        ).toEqual(items);
    });
});
