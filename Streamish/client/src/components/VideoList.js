import React, { useEffect, useState } from "react";
import Video from './Video';
import { getAllVideos, searchVideo } from "../modules/videoManager";

// Setting the state once data is grabbed, well will re-render the DOM to display the video list
const VideoList = () => {
    const [videos, setVideos] = useState([]);

    // We want to search a video on the list
    const [search, setSearch] = useState([]);

    const getVideos = () => {
        getAllVideos().then(videos => setVideos(videos));
    };

    // This will be our event handler that will take the input of the users search
    const handleSearch = (event) => {
        event.preventDefault()
        console.log(event)

        let searchInput = event.target.value
        let searchVideos = {}

        searchVideos[event.target.id] = searchInput
        searchVideo(searchInput)
            .then(videos => setVideos(videos))
    }

    useEffect(() => {
        getVideos();
    }, []);

    return (
        <div>

            <form>
                <input class="search" type="text" required placeholder="Search for Video..."
                    onChange={handleSearch} />
            </form>

            <div className="container">
                <div className="row justify-content-center">
                    {videos.map((video) => (
                        <Video video={video} key={video.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VideoList;
