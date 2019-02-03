import AccordionVO from '../ValueObjects/AccordionVO';

export default class FromArrayToListOfAccordionValueObjectsMapper {
    transform(data) {
        return data.map(item => {
            const { section, content } = item;
            return new AccordionVO(section, content);
        });
    }
}
