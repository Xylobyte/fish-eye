let filterBy = "popu";

function filterGallery() {
    const galleryCard = mediaList.sort((a, b) => {
        if (filterBy === "popu") {
            return b.likes - a.likes;
        } else if (filterBy === "date") {
            console.log('filter by date: ', b);
            return new Date(b.date) - new Date(a.date);
        } else {
            return a.title.localeCompare(b.title);
        }
    }).map((media) => {
        return media.getMediaCardDOM();
    })

    const gallery = document.getElementById('gallery');
    gallery.replaceChildren(...galleryCard);

    useLikes();
}