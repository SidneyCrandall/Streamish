import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addVideo } from "../modules/videoManager";

// We need to tell the browser app what info they will be taking in and parsing through to add to the database
const VideoForm = ({ getVideos }) => {
  const emptyVideo = {
    title: '',
    description: '',
    url: ''
  };

  // Setting the state of video. It will be empty till we have put data in the form. 
  const [video, setVideo] = useState(emptyVideo);

  const history = useHistory();

  // The program will listen for input so it can decide begain holding that data
  // The datatbase is compormised fo key value pairs.
  // We are setting the handleInputChange to listen for the value we are inputting for the key of Video
  const handleInputChange = (evt) => {
    const value = evt.target.value;
    const key = evt.target.id;

    // Now take that new array and make a copy
    const videoCopy = { ...video };

    videoCopy[key] = value;
    setVideo(videoCopy);
  };

  // Once the save button is hit send that info to the API
  const handleSave = (evt) => {
    evt.preventDefault();

    // We no longer want to display the vidoe list and new video form. 
    // Lets just display a form then display the list with the new video
    // Since it was sent in the above setp we not need to add it and return a view of the newly added VidoeList
    addVideo(video).then((p) => {
        // Navigate the user back to the home route
        history.push("/");
    });
  };

  // This is what the DOM will display
  // We just want a user to input a Title for the video, the "EMBEDDED" url link, and a breif description of the video for other uses to see
  // The above code insures that the form holds the info you put in to add to the database
  return (
    <Form>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input type="text" name="title" id="title" placeholder="video title"
          value={video.title}
          onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <Label for="url">URL</Label>
        <Input type="text" name="url" id="url" placeholder="video link" 
          value={video.url}
          onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input type="textarea" name="description" id="description"
          value={video.description}
          onChange={handleInputChange} />
      </FormGroup>
      <Button className="btn btn-primary" onClick={handleSave}>Submit</Button>
    </Form>
  );
};

export default VideoForm;
