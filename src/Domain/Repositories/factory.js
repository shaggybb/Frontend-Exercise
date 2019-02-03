import AccordionMappersFactory from '../Mappers/factory';
import MyJSONAccordionRepository from './MyJSONAccordionRepository';
import ServicesFactory from '../Services/factory';

export default class AccordionRepositoriesFactory {
    static myJsonAccordionRepository = ({ config }) =>
        new MyJSONAccordionRepository({
            config,
            fetcher: ServicesFactory.fetcherService(),
            mapper: AccordionMappersFactory.fromArrayToListOfAccordionValueObjects()
        });
}
