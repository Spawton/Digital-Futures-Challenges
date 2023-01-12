export default class NewsConstructor {
    constructor(id, webPublicationDate, webTitle, webUrl, fields) {
        this.id = id;
        this.webPublicationDate = webPublicationDate;
        this.webTitle = webTitle;
        this.webUrl = webUrl;
        this.thumbnail = fields.thumbnail;
        this.bodyText = fields.bodyText;
    }
}