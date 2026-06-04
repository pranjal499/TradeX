// Home layout: composes the menu and the main dashboard view.

import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { useUser } from "./UserFunction";

const Home = () => {
  const userInfo = useUser();

  return (
    <>
      <TopBar user={userInfo}/>
      <Dashboard user={userInfo}/>
    </>
  );
};

export default Home;
