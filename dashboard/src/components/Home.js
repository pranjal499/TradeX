// Home layout: composes the menu and the main dashboard view.

import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {user} from "./UserFunction";

const Home = () => {
  const userInfo = user();

  return (
    <>
      <TopBar user={userInfo}/>
      <Dashboard user={userInfo}/>
    </>
  );
};

export default Home;