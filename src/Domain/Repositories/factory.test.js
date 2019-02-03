import AccordionRepositoriesFactory from './factory';
import MyJSONAccordionRepository from './MyJSONAccordionRepository';
jest.mock('./MyJSONAccordionRepository');

describe('AccordionRepositoriesFactory', () => {
    test('Should return and empty array', () => {
        const config = {
            MYJSON_URL: 'fake_url'
        };

        AccordionRepositoriesFactory.myJsonAccordionRepository({ config });
        expect(MyJSONAccordionRepository).toHaveBeenCalled();
    });
});
