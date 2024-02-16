class Media {
    constructor(data) {
        this._id = data.id;
        this._title = data.title;
        this._likes = data.likes;
        this._date = data.date;

        this._liked = false;
    }

    get id() {
        return this._id;
    }

    get liked() {
        return this._liked;
    }

    get likes() {
        return this._liked ? this._likes + 1 : this._likes;
    }

    get date() {
        return this._date;
    }

    get title() {
        return this._title;
    }

    like() {
        this._liked = !this._liked;
    }

    generateMediaCardDOM(url) {
        const fig = document.createElement('figure');

        const img = document.createElement('img');
        img.setAttribute("src", url);
        img.setAttribute("alt", `${this._title}, closeup view`);

        const a = document.createElement('a');
        a.setAttribute("href", '#');
        a.appendChild(img);

        const figCaption = document.createElement('figcaption');
        const span = document.createElement('span');
        span.textContent = this._title;

        const button = document.createElement('button');
        button.setAttribute("aria-label", `Like ${this._title}`);
        button.setAttribute("data-media-id", this._id);
        button.classList.add("like_btn");
        button.innerHTML = `${this.likes} ${this._liked ? likedSvg : likeSvg}`;

        figCaption.appendChild(span);
        figCaption.appendChild(button);

        fig.appendChild(a);
        fig.appendChild(figCaption);

        return fig;
    }
}

class MediaImage extends Media {
    constructor(data, photographerName) {
        super(data);
        this._image = data.image;
        this._photographer = photographerName;
    }

    getMediaCardDOM() {
        return this.generateMediaCardDOM(`assets/medias/${this._photographer}/small/${this._image}`);
    }

    getMediaModalDOM() {
        const elements = [];

        const img = document.createElement('img');
        img.setAttribute("src", `assets/medias/${this._photographer}/${this._image}`);
        img.setAttribute("alt", `${this._title}`);
        elements.push(img);

        const figCaption = document.createElement('figcaption');
        figCaption.textContent = `${this._title}`;
        elements.push(figCaption);

        return elements;
    }
}

class MediaVideo extends Media {
    constructor(data, photographerName) {
        super(data);
        this._video = data.video;
        this._photographer = photographerName;
    }

    getMediaCardDOM() {
        return this.generateMediaCardDOM(`assets/medias/${this._photographer}/small/${this._video.split('.')[0]}.webp`);
    }

    getMediaModalDOM() {
        const elements = [];

        const video = document.createElement('video');
        video.setAttribute("src", `assets/medias/${this._photographer}/${this._video}`);
        video.setAttribute('controls', 'true');
        video.setAttribute('loop', 'true');
        video.setAttribute('poster', `assets/medias/${this._photographer}/small/${this._video.split('.')[0]}.webp`);
        video.setAttribute("aria-label", `${this._title}`);
        elements.push(video);

        const figCaption = document.createElement('figcaption');
        figCaption.textContent = `${this._title}`;
        elements.push(figCaption);

        return elements;
    }
}