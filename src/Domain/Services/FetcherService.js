export default class FetcherService {
    execute(url) {
        return window.fetch(url);
    }
}
