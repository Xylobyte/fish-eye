// Global variables of Photographer
let photographer = null;
const mediaList = [];

window.addEventListener('load', () => {
    initView();
})

document.getElementById('filter_select').addEventListener('change', (e) => {
    filterBy = e.target.value;
    filterGallery();
})

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