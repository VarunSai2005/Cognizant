import axios from 'axios';
import React, { useState } from 'react';

const profile = () => {
    const [profile, setProfile] = useState("");

    function getProfile() {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("You need to login first");
            return
        }

        console.log(token);
        axios.get("http://localhost:3030/profile", {
            headers: {
                Authorization: `Bearer ${token}` 
            }
        }).then((res) => {
            console.log(res.data.user);
            setProfile(res.data.user.username);
        }).catch((err) => {
            console.error(err);
            alert("Failed to fetch profile");
        });
    }

    return (
        <div>
            <button onClick={getProfile}>Show Profile</button>
            <h4>{profile}</h4>
        </div>
    )
}

export default profile
