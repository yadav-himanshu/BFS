import React from "react";

const AdminSigninModal = ({ credentials, handleLogin, setCredentials, setShowModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-4 w-full max-w-[500px] rounded-md shadow-lg">
        <h2 className="text-lg font-bold mb-4 text-white">Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
          className="block w-full text-gray-900 p-2 mb-2 border border-gray-300 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          className="block w-full p-2 text-gray-900 mb-4 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleLogin}
          className="bg-green-500 text-white px-4 py-1 rounded-md mr-2 hover:bg-green-600"
        >
          Login
        </button>
        <button
          onClick={() => setShowModal(false)}
          className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AdminSigninModal;
