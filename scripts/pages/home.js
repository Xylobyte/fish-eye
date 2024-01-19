async function initView() {
    const data = await API_Photographers_enum();
    const photographerSection = document.querySelector('.photographer_section');

    data.forEach(e => {
        const photographer = new Photographer(e);
        photographerSection.appendChild(photographer.getUserCardDOM());
    })
}

window.addEventListener('load', () => {
    initView();
})
