import FetcherService from './FetcherService';

export default class ServicesFactory {
    static fetcherService = () => {
        return new FetcherService()
    }
}
