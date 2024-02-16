// Global variables of Photographer
let photographer = null;
let mediaList = [];

window.addEventListener('load', () => {
    initView();
    initLightbox();
});

document.getElementById('filter_select').addEventListener('change', (e) => {
    filterBy = e.target.value;
    filterGallery();
});

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
    } catch (error) {
        console.error(error);
        alert("Error while fetching data !\n" + error.message);
    }
}

function setUserInfoOnPhotographerPage(photographer) {
    const name = document.getElementById('photographer_name');
    name.textContent = photographer.name;

    const location = document.getElementById('photographer_location');
    location.textContent = photographer.adress();

    const tagline = document.getElementById('photographer_tagline');
    tagline.textContent = photographer.tagline;

    const portrait = document.getElementById('photographer_portrait');
    portrait.setAttribute("src", photographer.profilImage());
    portrait.setAttribute("alt", photographer.name);

    const modalTitle = document.getElementById('modal_title');
    modalTitle.textContent = `Contactez-moi\n${photographer.name}`;

    const price = document.getElementById('price');
    price.textContent = `${photographer.price}€ / jour`;
}

function setTabIndex(remove = false) {
    const elements = document.querySelectorAll('#main a, #main button, #main select, #main input, header a');
    elements.forEach((e) => {
        if (!remove) {
            e.setAttribute('tabindex', '-1');
        } else {
            e.removeAttribute('tabindex');
        }
    });
}
