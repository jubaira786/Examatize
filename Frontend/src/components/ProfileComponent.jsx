import React from 'react'
import { useState,useEffect } from 'react'
const ProfileComponent = () => {
    const [userData, setUserData] = useState({'name':'dummy name', 'rollNo':'18bce0001', 'mail':'juiid@.com', 'department':'cse', 'yearOfStudy':'3'});

    useEffect(() => {
        // Fetch user data from the server and set it in userData state
        // Replace this with your actual API call
        fetch('/api/users')
            .then(response => response.json())
            .then(data => setUserData(data));
    }, []);

  return (
    <>
      <div>
            <h2>User Profile</h2>
            <div>
                <label>Name:</label>
                <p>{userData.name}</p>
            </div>
            <div>
                <label>Roll No:</label>
                <p>{userData.rollNo}</p>
            </div>
            <div>
                <label>Mail:</label>
                <p>{userData.mail}</p>
            </div>
            <div>
                <label>Department:</label>
                <p>{userData.department}</p>
            </div>
            <div>
                <label>Year of study:</label>
                <p>{userData.yearOfStudy}</p>
            </div>
        </div>
    </>
  )
}

export {ProfileComponent}