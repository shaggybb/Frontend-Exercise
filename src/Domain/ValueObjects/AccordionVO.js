export default class AccordionVO {
    constructor(title = null, content = null) {
        if (title === null) {
            throw new TypeError('Title must be defined');
        }

        if (content === null) {
            throw new TypeError('Content must be defined');
        }
        this._title = title;
        this._content = content;
    }

    getTitle() {
        return this._title;
    }

    getContent() {
        return this._content;
    }
}
