let lightboxOpen = false;
let actualIndex = -1;

document.getElementById('lightbox').addEventListener('keydown', (e) => {
    if (lightboxOpen && e.key === 'Escape') {
        closeLightbox();
    } else if (lightboxOpen && e.key === 'ArrowRight') {
        lightboxNext();
    } else if (lightboxOpen && e.key === 'ArrowLeft') {
        lightboxPrev();
    }
});

document.getElementById('btn_next').addEventListener('click', () => lightboxNext());
document.getElementById('btn_prev').addEventListener('click', () => lightboxPrev());

function lightboxNext() {
    if (actualIndex < mediaList.length-1) actualIndex++;
    else actualIndex = 0;

    displayLightbox();
}

function lightboxPrev() {
    if (actualIndex > 0) actualIndex--;
    else actualIndex = mediaList.length-1;

    displayLightbox();
}

function initLightbox() {
    const links = document.querySelectorAll("#gallery > figure");
    links.forEach((link, i) => {
        link.querySelector('a').addEventListener('click', (e) => {
            e.preventDefault();
            actualIndex = i;
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
    !lightboxOpen && document.getElementById('close_lightbox').focus();
    lightboxOpen = true;

    setTabIndex();
}

function closeLightbox() {
    const modal = document.getElementById("lightbox");
    modal.style.display = "none";
    lightboxOpen = false;

    setTabIndex(true);
}