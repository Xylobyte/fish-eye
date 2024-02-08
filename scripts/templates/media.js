class Media {
    constructor(data) {
        this._id = data.id;
        this._photographerId = data.photographerId;
        this._title = data.title;
        this._likes = data.likes;
        this._date = data.date;
        this._price = data.price;

        this._liked = false;
    }

    get id() {
        return this._id;
    }

    get likes() {
        return this._liked ? this._likes + 1 : this._likes;
    }

    get liked() {
        return this._liked;
    }

    like() {
        this._liked = !this._liked;
    }
}

class MediaImage extends Media{
    constructor(data, photographerName) {
        super(data);
        this._image = data.image;
        this._photographer = photographerName;
    }

    isImage() {
        return true;
    }

    getMediaCardDOM() {
        const fig = document.createElement('figure');

        const img = document.createElement('img');
        img.setAttribute("src", `assets/medias/${this._photographer}/small/${this._image}`);
        img.setAttribute("alt", this._title);

        const a = document.createElement('a');
        a.setAttribute("href", '#');
        a.appendChild(img);

        const figCaption = document.createElement('figcaption');
        const span = document.createElement('span');
        span.textContent = this._title;

        const button = document.createElement('button');
        button.setAttribute("aria-label", "Likes");
        button.setAttribute("data-media-id", this._id);
        button.classList.add("like_btn");
        button.innerHTML = this.likes + ' ' + likeSvg;

        figCaption.appendChild(span);
        figCaption.appendChild(button);

        fig.appendChild(a);
        fig.appendChild(figCaption);

        return fig;
    }
}

class MediaVideo extends Media {
    constructor(data, photographerName) {
        super(data);
        this._video = data.video;
        this._photographer = photographerName;
    }

    isImage() {
        return false;
    }

    getMediaCardDOM() {
        const fig = document.createElement('figure');

        const img = document.createElement('img');
        img.setAttribute("src", `assets/medias/${this._photographer}/small/${this._video.split('.')[0]}.webp`);
        img.setAttribute("alt", this._title);

        const a = document.createElement('a');
        a.setAttribute("href", '#');
        a.appendChild(img);

        const figCaption = document.createElement('figcaption');
        const span = document.createElement('span');
        span.textContent = this._title;

        const button = document.createElement('button');
        button.setAttribute("aria-label", "Likes");
        button.setAttribute("data-media-id", this._id);
        button.classList.add("like_btn");
        button.innerHTML = this.likes + ' ' + likeSvg;

        figCaption.appendChild(span);
        figCaption.appendChild(button);

        fig.appendChild(a);
        fig.appendChild(figCaption);

        return fig;
    }
}