import React from "react";
import { Switch, Route } from "react-router-dom";
import VideoList from "./VideoList";
import VideoForm from "./VideoForm";
import VideoDetails from "./VideoDetails";

const ApplicationViews = () => {
  return (
      /* Looks for the Url and will render to first route that is a match */
    <Switch>
        {/* 'Exact' we only want to render this component with this Url */}
      <Route path="/" exact>
        <VideoList />
      </Route>
        {/* If the url matche the value of the path attribute the children will render. */}
      <Route path="/videos/add">
        <VideoForm />
      </Route>
        {/* Using a colon tells the reactrouter that this is will be some 'id' parameter. */}
      <Route path="/videos/GetVideoWithComments/:id">
        <VideoDetails/>
      </Route>
      {/* <Route path="/users/:id">
        <UserVideos/>
      </Route>  */}
    </Switch>
  );
};

export default ApplicationViews;
