// Global object of Photographer
let photographer = null;
const mediaList = [];
let filterBy = "popu";

async function initView() {
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get('id');
    const id = idParam ? parseInt(idParam) : null;

    if (id === null) {
        alert("Photographer id not found !");
        throw new Error("Photographer id not found");
    }

    try {
        const data = await API_Photographer_get(id);
        photographer = new Photographer(data);
        setUserInfoOnPhotographerPage(photographer);

        const mediaData = await API_Media_enum(id);
        mediaList.push(...mediaData.map((d) => new MediaFactory(d, photographer.name)));

        filterGallery();
        useLikes();
    } catch (error) {
        console.error(error);
        alert("Error while fetching data !\n" + error.message);
    }
}

window.addEventListener('load', () => {
    initView();
})

function filterGallery() {
    const galleryCard = mediaList.sort((a, b) => {
        if (filterBy === "popu") {
            return b.likes - a.likes;
        } else if (filterBy === "date") {
            return new Date(b.date) - new Date(a.date);
        } else {
            return a.title.localeCompare(b.title);
        }
    }).map((media) => {
        return media.getMediaCardDOM();
    })

    const gallery = document.getElementById('gallery');
    gallery.replaceChildren(...galleryCard);
}

function setUserInfoOnPhotographerPage(phtographer) {
    const name = document.getElementById('photographer_name');
    name.textContent = photographer.name;

    const location = document.getElementById('photographer_location');
    location.textContent = photographer.adress();

    const tagline = document.getElementById('photographer_tagline');
    tagline.textContent = photographer.tagline;

    const portrait = document.getElementById('photographer_portrait');
    portrait.setAttribute("src", phtographer.profilImage());
    portrait.setAttribute("alt", photographer.name);

    const modalTitle = document.getElementById('modal_title');
    modalTitle.textContent = `Contactez-moi\n${photographer.name}`;

    const price = document.getElementById('price');
    price.textContent = `${photographer.price}€ / jour`;
}