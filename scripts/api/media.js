async function API_Media_enum(photographerId) {
    const response = await fetch(`/data/photographers.json`);
    const result = await response.json();

    return result.media.filter(m => m.photographerId === photographerId);
}