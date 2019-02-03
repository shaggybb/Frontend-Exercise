import Accordion from './Infrastructure/Presentation/Component/Accordion';

const definitionList = document.querySelector('dl');
const accordionInstance = new Accordion(definitionList);

const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
};

document.forms[0].addEventListener('submit', event => {
    event.preventDefault();

    const jsonURLs = [
        'https://api.myjson.com/bins/1fpsks',
        'https://api.myjson.com/bins/qpl64',
        'https://api.myjson.com/bins/1h9ir0'
    ];
    const url = jsonURLs[getRandomInt(jsonURLs.length)];
    const config = {
        MYJSON_URL: url
    };

    accordionInstance.fetchAccordionItemFromListOfAccordionItemsUseCase({
        config
    });
});
