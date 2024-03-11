export { Post };

class Post {
    title_;
    shortDescription_;
    text_;
    date_;
    constructor(title, shortDescription, text) {
        this.title_ = title;
        this.shortDescription_ = shortDescription;
        this.text_ = text;
        this.date_ = new Date().toLocaleDateString();
    }
}
