// UserPage.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const UserPage = ({ user }) => {
  if (!user) {
    return (
      <div className="max-w-md mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4">User Account</h2>
        <p className="text-lg">You are not logged in. Please log in to view your account details.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">User Account</h2>
      <p className="text-lg">Welcome, {user.username}!</p>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Account Details:</h3>
        <ul className="list-disc list-inside">
          <li><strong>Username:</strong> {user.username}</li>
          {/* You can add more user-related information here */}
        </ul>
      </div>
      <div className="mt-6">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
          Edit Account
        </button>
        <button className="ml-4 bg-red-600 text-white px-4 py-2 rounded-md">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default UserPage;