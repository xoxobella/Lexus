// SignIn.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { readDB, writeDB } from '../Data/Localstorage'; // Adjust the path as necessary

// eslint-disable-next-line react/prop-types
const SignIn = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create user object
    const user = {
      username,
      password,
      address,
      mobile,
      profilePicture,
    };

    // Read existing data from db.json
    const db = readDB();

    // Check if the username already exists
    const userExists = db.users.find((u) => u.username === username);
    if (userExists) {
      alert('Username already exists!');
      return;
    }

    // Add new user to the database
    db.users.push(user);
    writeDB(db); // Write updated data to db.json

    // Call the onLogin function passed as a prop
    onLogin(user);
    
    // Reset form fields
    setUsername('');
    setPassword('');
    setAddress('');
    setMobile('');
    setProfilePicture(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file)); // Create a URL for the uploaded image
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Sign In</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Mobile Number</label>
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Profile Picture</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        {profilePicture && (
          <div className="mt-2">
            <img src={profilePicture} alt="Profile Preview" className="w-32 h-32 object-cover rounded-md" />
          </div>
        )}
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;