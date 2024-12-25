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
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-3xl font-bold text-center mb-6">Saved Profiles</h2>
      <ul className="space-y-4">
        {profiles.map((profile) => (
          <li key={profile.id} className="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="font-bold text-lg text-gray-800">{profile.username}</div>
            <div className="text-gray-600">{profile.address}, {profile.city}, {profile.state}, {profile.zip}</div>
            <div className="text-gray-600">{profile.bankName} - {profile.accountNumber}</div>
          </li>
        ))}
      </ul>
      {profiles.length === 0 && <p className="text-center text-gray-500 mt-4">No profiles available.</p>}
    </div>
  );
};

export default ProfileDisplay;