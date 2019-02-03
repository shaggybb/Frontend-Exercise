import GetAccordionItemsFromAJAXContentUseCase from './GetAccordionItemsFromAJAXContentUseCase';
import AccordionRepositoriesFactory from '../Repositories/factory';

export default class AccordionUseCasesFactory {
    static listOfAccordionItemsUseCase = ({config}) => {
        return new GetAccordionItemsFromAJAXContentUseCase({
            repository: AccordionRepositoriesFactory.myJsonAccordionRepository({config})
        })
    }
}
