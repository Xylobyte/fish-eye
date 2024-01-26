// Global object of Photographer
let photographer = null;

async function initView() {
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get('id');
    const id = idParam ? parseInt(idParam) : null;

    if (id === null) {
        throw new Error("Photographer id not found");
    }

    try {
        const data = await API_Photographer_get(id);
        photographer = new Photographer(data);
        photographer.setUserInfoOnPhotographerPage();
    } catch (error) {
        console.error(error);
    }
}

window.addEventListener('load', () => {
    initView();
})