import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Video from "./Video";
import { getAllVideos } from "../modules/videoManager";

const UserVideos = () => {

    const [videos, setVideos] = useState([]);

    const { id } = useParams();

    const getVideos = () => {
        getAllVideos().then(videos => {
            var userVido = videos.filter(v => v.userProfileId.toString() === id)
                setVideos(userVido)
        })
    }

    useEffect(() => {
        getVideos();
    }, [id]);

    return (
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-sm-12 col-lg-6">
                <div>
                    {videos.map((video) => {
                         <Video video={video} key={video.id} />  
                    })}
                </div>
            </div>
            </div>
        </div>
    );
};

export default UserVideos; 