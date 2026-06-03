import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";

// handle user login:
export function user() {
    // Navigate function:
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: '',
        email: ''
    });

    useEffect(() => {
        try {
            axios.get('http://localhost:3002/verify', {
                withCredentials: true
            })
                .then((res) => {
                    setUser({
                        username: res.data.user.username,
                        email: res.data.user.email
                    });
                })
        }
        catch (err) {
            window.location.href = 'http://localhost:3000/login';
        }
    }, []);
    
    return user;
}

// handle logout:
export function handleLogout() {
    try{
        axios.get('http://localhost:3002/logout',
            {
                withCredentials: true
            }
        );

        window.location.href = 'http://localhost:3000';
        
    }
    catch(err) {
    }
}