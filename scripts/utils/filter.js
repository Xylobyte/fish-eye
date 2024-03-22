let filterBy = "popu";

const filterGallery = () => {
    mediaList = mediaList.sort((a, b) => {
        if (filterBy === "popu") {
            return b.likes - a.likes;
        } else if (filterBy === "date") {
            return new Date(b.date) - new Date(a.date);
        } else {
            return a.title.localeCompare(b.title);
        }
    });

    const galleryCard = mediaList.map((media) => {
        return media.getMediaCardDOM();
    });

    const gallery = document.getElementById('gallery');
    gallery.replaceChildren(...galleryCard);

    useLikes();
    initLightbox();
};