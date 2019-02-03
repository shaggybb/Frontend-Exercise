import FromArrayToListOfAccordionValueObjectsMapper from './FromArrayToListOfAccordionValueObjectsMapper';

export default class AccordionMappersFactory {
    static fromArrayToListOfAccordionValueObjects = () => {
        return new FromArrayToListOfAccordionValueObjectsMapper()
    }
}
