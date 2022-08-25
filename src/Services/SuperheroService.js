import axios from "axios";

const pathAPI = "http://localhost:3000";
const headers = {
    'Content-Type': 'application/json'
}

export async function getSuperHeros() {
    const response = await axios(`${pathAPI}/super-heros`, {
        method: 'GET',
        headers: headers,
    })
    return await response.data;
}

export async function getSuperHeroById(id) {
    const response = await axios(`${pathAPI}/super-heros/${id}`, {
        method: 'GET',
        headers: headers,
    })
    return await response.data;
}

export async function updateSuperHero(request, id, data) {
    const formData = new FormData();
    formData.append("file", request.file[0]);
    formData.append("power_stats", request.power_stats)
    formData.append("id", id)
    formData.append("name", data.name)
    formData.append("synopsis", data.synopsis)
    formData.append("starring", data.starring)
    formData.append("directed_by", data.directed_by)

    const response = await fetch(`${pathAPI}/super-heros`, {
        method: 'POST',
        body: formData
    })
    return await response.data;
}