// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

const ProfileDisplay = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch('http://localhost:3000/profiles');
        if (!response.ok) {
          throw new Error('Failed to fetch profiles');
        }
        const data = await response.json();
        setProfiles(data);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };
  
    fetchProfiles();
  }, []);
  
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Saved Profiles</h2>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id} className="mb-2">
            <div className="font-bold">{profile.username}</div>
            <div>{profile.address}, {profile.city}, {profile.state}, {profile.zip}</div>
            <div>{profile.bankName} - {profile.accountNumber}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileDisplay;