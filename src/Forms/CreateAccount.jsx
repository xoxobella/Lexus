// CreateAccount.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { readDB, writeDB } from '../Data/Localstorage'; // Adjust the path as necessary

const CreateAccount = ({ onAccountCreated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const db = readDB();
    
    // Check if the username already exists
    const userExists = db.users.find(user => user.username === username);
    if (userExists) {
      alert('Username already exists!');
      return;
    }

    // Create new user
    const newUser = { username, password };
    db.users.push(newUser);
    writeDB(db); // Write updated data to localStorage

    onAccountCreated(newUser); // Call the function passed as a prop
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Create Account</h2>
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
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;