export default class MyJSONAccordionRepository {
    constructor({ config, fetcher, mapper }) {
        this._config = config;
        this._fetcher = fetcher;
        this._mapper = mapper;
    }

    async all() {
        const myJSONUrl = this._config.MYJSON_URL;
        const response = await this._fetcher.execute(myJSONUrl);
        const responseArray = await response.json();

        return this._mapper.transform(responseArray);
    }
}
