export default class GetAccordionItemsFromAJAXContentUseCase {
    constructor({ repository }) {
        this._repository = repository;
    }

    async execute() {
        const listOfAccordItemsValueObject = await this._repository.all();
        return listOfAccordItemsValueObject;
    }
}
