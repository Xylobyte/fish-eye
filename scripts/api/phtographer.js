const API_Photographers_enum = async () => {
    const response = await fetch('data/photographers.json');
    const result = await response.json();

    return result.photographers;
};

const API_Photographer_get = async (id) => {
    const response = await fetch(`data/photographers.json`);
    const result = await response.json();

    return result.photographers.find(p => p.id === id);
};