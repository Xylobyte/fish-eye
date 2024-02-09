let lightboxOpen = false;
let actualIndex = -1;

function initLightbox() {
    const links = document.querySelectorAll("#gallery > figure");
    links.forEach((link, i) => {
        link.querySelector('a').addEventListener('click', (e) => {
            e.preventDefault();
            actualIndex = link.querySelector('.like_btn').getAttribute('data-media-id');
            displayLightbox();
        });
    });
}

function displayLightbox() {
    const modal = document.getElementById("lightbox");

    const fig = document.getElementById('media_show');
    const media = mediaList[actualIndex];

    if (media && fig) {
        fig.replaceChildren(...media.getMediaModalDOM());
    }

    modal.style.display = "grid";
    document.getElementById('close_lightbox').focus();
    lightboxOpen = true;

    setTabIndex();
}

function closeLightbox() {
    const modal = document.getElementById("lightbox");
    modal.style.display = "none";
    document.getElementById('open_modal').focus();
    lightboxOpen = false;

    setTabIndex(true);
}