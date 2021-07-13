const baseUrl = '/api/userprofile';

export const getUserVideos = (id) => {
    return fetch(`${baseUrl}/GetWithVideos/${id}/`)
        .then((res) => res.json())
};