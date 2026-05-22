// Home layout: composes the menu and the main dashboard view.

import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {

  // Navigate function:
    const navigate = useNavigate();

  const [user, setUser] = useState({
    username: '',
    email: ''
  });
  
  useEffect(() => {
    axios.get('http://localhost:3002/verify', {
      withCredentials: true
    })
      .then((res) => {
        console.log(res)
        setUser({
          username: res.data.user.username,
          email: res.data.user.email
        });
      })
  }, []);


  return (
    <>
      <TopBar user={user}/>
      <Dashboard user={user}/>
    </>
  );
};

export default Home;