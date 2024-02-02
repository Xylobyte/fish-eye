class Media {
    constructor(data) {
        this._id = data.id;
        this._photographerId = data.photographerId;
        this._title = data.title;
        this._likes = data.likes;
        this._date = data.date;
        this._price = data.price;

        this.liked = false;
    }

    get likes() {
        return this.liked ? this._likes + 1 : this._likes;
    }

    like() {
        this.liked = !this.liked;
    }
}

class MediaImage extends Media{
    constructor(data, photographerName) {
        super(data);
        this._image = data.image;
    }

    isImage() {
        return true;
    }
}

class MediaVideo extends Media {
    constructor(data, photographerName) {
        super(data);
        this._video = data.video;
    }

    isImage() {
        return false;
    }

    getMediaCardDOM() {
        const fig = document.createElement('figure');
        const video = document.createElement('video');
        video.setAttribute("src", `assets/medias/${this._video}`);
    }
}