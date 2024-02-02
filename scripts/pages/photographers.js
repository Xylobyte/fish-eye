// Global object of Photographer
let photographer = null;

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
        photographer.setUserInfoOnPhotographerPage();

        const mediaData = await API_Media_enum(id);
        console.log(mediaData)
    } catch (error) {
        console.error(error);
        alert("Photographer id not found !");
    }
}

window.addEventListener('load', () => {
    initView();
})