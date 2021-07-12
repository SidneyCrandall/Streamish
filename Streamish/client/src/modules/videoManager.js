// Relative Url
const baseUrl = '/api/video';

// Updated to include comments to be displayed along with the Video
// 'GetWithComments' is re-called from the VideoContrller.cs
export const getAllVideos = () => {
  return fetch(`${baseUrl}/GetWithComments`)
    .then((res) => res.json())
};

// We want to add an "Embedded" video to the list
export const addVideo = (video) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(video),
  });
};

// Used to call the details of a specified video.
export const getVideoById = (id) => {
    return fetch(`${baseUrl}/GetVideoWithComments?id=${id}`)
      .then(res => res.json());
};

// Search for a video. Since the video can be named anything we leave it as a variable that will parse through our API and match the video Title.
export const searchVideo = (searchTerm) => {
    return fetch(`${baseUrl}/search?q=${searchTerm}`)
        .then((res) => res.json())
};

// Display videos of users
export const getVideosByUserId = (id) => {
  return fetch(`/api/UserProfile/UserProfileVideos?=${id}`)
    .then((res) => res.json())
};