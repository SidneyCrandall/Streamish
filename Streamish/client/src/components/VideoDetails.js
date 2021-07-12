import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { useParams } from "react-router-dom";
import Video from "./Video";
import { getVideoById } from "../modules/videoManager";

// Using the getVideo call from VideoMangaer,js, we are going to call info for a specified video
// We will use 'id' as a param in order to get the info of that video.
const VideoDetails = () => {
  const [video, setVideo] = useState();

  // the use of the useParams hook to access the route param from the manager
  const { id } = useParams();

  useEffect(() => {
    getVideoById(id).then(setVideo);
  }, [id]);

  if (!video) {
    return null;
  }

  // The return maps through our data in the API and renders it.
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-6">
          <Video video={video} userProfile={video.userProfile} />
          <ListGroup>
            {video.comments?.map((c) => (
              <ListGroupItem>{c.message}</ListGroupItem>
            ))}
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;