import axios from "axios";
import React, { useState, useEffect } from "react";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const FRONTEND_URL = process.env.REACT_APP_FRONTEND_URL;

// handle user login:
export function user() {
    const [user, setUser] = useState({
        username: '',
        email: ''
    });

    useEffect(() => {
        if (!API_BASE_URL || !FRONTEND_URL) {
            window.location.href = `${FRONTEND_URL || ''}/#/login`;
            return;
        }

        axios.get(`${API_BASE_URL}/verify`, {
                withCredentials: true
            })
            .then((res) => {
                setUser({
                    username: res.data.user.username,
                    email: res.data.user.email
                });
            })
            .catch(() => {
                window.location.href = `${FRONTEND_URL}/#/login`;
            });
    }, []);
    
    return user;
}

// handle logout:
export function handleLogout() {
    axios.get(`${API_BASE_URL}/logout`,
            {
                withCredentials: true
            }
        )
        .finally(() => {
            window.location.href = FRONTEND_URL;
        });
}
