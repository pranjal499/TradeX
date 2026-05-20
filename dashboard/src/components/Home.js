// Home layout: composes the menu and the main dashboard view.

import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;