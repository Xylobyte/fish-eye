window.addEventListener('load', () => {
    initView();
});

const initView = async () => {
    try {
        const data = await API_Photographers_enum();
        const photographerSection = document.querySelector('.photographer_section');

        data.forEach(e => {
            const photographer = new Photographer(e);
            photographerSection.appendChild(photographer.getUserCardDOM());
        });
    } catch (error) {
        console.error(error);
    }
};
