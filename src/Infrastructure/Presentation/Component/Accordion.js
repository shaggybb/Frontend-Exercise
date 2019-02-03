import '../Common/styles/base.scss'
import './_accordion.scss';
import AccordionUseCasesFactory from "../../../Domain/UseCase/factory";

export default class Accordion {
    constructor(el) {
        const container =
            typeof el === 'string' ? document.querySelector(el) : el;

        if (container === null) {
            throw Error(
                'Invalid argument: The object passed cannot be found or is not considered a valid DOM item'
            );
        }

        /**
         * Default options
         */
        this.settings = {
            id: `irh-accordion-${Math.ceil(Math.random() * 10000) + 1}`,
            suitComponent: {
                main: 'irh-Accordion',
                header: 'irh-Accordion-header',
                panel: 'irh-Accordion-panel',
                isExpanded: 'is-expanded',
                isLoading: 'is-loading'
            }
        };

        this.selectedItem = null;

        this.container = container;
        this.container.classList.add(this.settings.suitComponent.main);
        this.container.setAttribute('id', this.settings.id);
        this.container.addEventListener('click', this.handleClick);

        const headers = Array.from(this.container.querySelectorAll('dt'));
        this.applySUIT(headers);
    }

    applySUIT(headers) {
        headers.map(header => {
            header.classList.add(this.settings.suitComponent.header);
            header.nextElementSibling.classList.add(this.settings.suitComponent.panel);
        });
    }

    handleClick = event => {
        const {header, isExpanded} = this.settings.suitComponent;
        const headerInstance = event.target;

        if (!event.target.classList.contains(header)) {
            return;
        }

        if (this.selectedItem) {
            this.selectedItem.classList.toggle(isExpanded);
        }

        if (this.selectedItem === headerInstance) {
            this.selectedItem = null;
            return;
        }

        headerInstance.classList.add(isExpanded);
        this.selectedItem = headerInstance;
    }

    addItem(accordionVO) {
        const dt = document.createElement('dt');
        const dd = document.createElement('dd');

        dt.innerHTML = accordionVO.getTitle();
        dd.innerHTML = accordionVO.getContent();

        this.container.append(dt);
        this.container.append(dd);

        this.applySUIT([dt]);

        this.container.classList.remove(this.settings.suitComponent.isLoading);
    }

    fetchAccordionItemFromListOfAccordionItemsUseCase({ config }) {
        this.container.classList.add(this.settings.suitComponent.isLoading);

        const getAccordionItemsFromAJAXContent = AccordionUseCasesFactory.listOfAccordionItemsUseCase(
            {
                config
            }
        );

        getAccordionItemsFromAJAXContent
            .execute()
            .then(listOfAccordionsValueObject =>
                listOfAccordionsValueObject.map(accordionValueObject =>
                    this.addItem(accordionValueObject)
                )
            );
    }
}
