class Photographer {
    constructor(data) {
        this._name = data.name;
        this._id = data.id;
        this._city = data.city;
        this._country = data.country;
        this._tagline = data.tagline;
        this._price = data.price;
        this._portrait = data.portrait;
    }

    getUserCardDOM() {
        const article = document.createElement('article');
        const img = document.createElement('img');
        img.setAttribute("src", `assets/photographers/${this._portrait}`);
        const h2 = document.createElement('h2');
        h2.textContent = this._name;
        article.appendChild(img);
        article.appendChild(h2);

        const infoDiv = document.createElement('div');
        const location = document.createElement('span');
        location.textContent = `${this._city}, ${this._country}`;
        const tagline = document.createElement('p');
        tagline.textContent = this._tagline;
        const price = document.createElement('span');
        price.textContent = `${this._price}€/jour`;

        infoDiv.appendChild(location);
        infoDiv.appendChild(tagline);
        infoDiv.appendChild(price);

        article.appendChild(infoDiv);

        const link = document.createElement('a');
        link.setAttribute("href", `photographer.html?id=${this._id}`);

        link.appendChild(article);

        return (link);
    }
}
