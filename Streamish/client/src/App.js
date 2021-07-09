import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import ApplicationViews from "./components/ApplicationViews";
import Header from "./components/Header";

// We have wrapped this App view now in a route in order to use Applicatiob views
// This is what a user will always see. 
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <ApplicationViews />
      </Router>
    </div>
  );
}

export default App;
