async function API_Photographers_enum() {
    const response = await fetch('/data/photographers.json');
    const result = await response.json();

    return result.photographers;
}

async function API_Photographer_get(id) {
    const response = await fetch(`/data/photographers.json`);
    const result = await response.json();

    return result.photographers.find(p => p.id === id);
}