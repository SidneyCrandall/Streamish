import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const Video = ({ video }) => {
    return (
        <Card >
            <p className="text-left px-2">Posted by: {video.userProfile.name}</p>
            <CardBody>
                {/* iFrame embaeds videos to our DOM. they will now display in a more user friendly way */}
                <iframe className="video"
                    src={video.url}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />

                <p>
                    <strong>{video.title}</strong>
                </p>
                <p>{video.description}</p>
                {/* We need to map through the comments that are joined to the videos. We use dot notation
                    in order follow the path of data.*/}
                <p>{video.comments?.map(v => v.message)}</p>
                <Link to={`/videos/${video.id}`}>
                    <strong>{video.title}</strong>
                </Link>
            </CardBody>
        </Card>
    );
};

// Unlike before you are exporting the whole of this componnent
export default Video;