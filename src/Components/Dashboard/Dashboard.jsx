import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex">
      
      {/* Sidebar */}
      <div className="w-64 bg-pink-500 text-white p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <ul className="space-y-3">
          <li>
            <Link to="/dashboard" className="block hover:bg-pink-600 rounded px-3 py-2">Overview</Link>
          </li>
          <li>
            <Link to="/dashboard/add-books" className="block hover:bg-pink-600 rounded px-3 py-2">Add Books</Link>
          </li>
          <li>
            <Link to="/dashboard/users" className="block hover:bg-pink-600 rounded px-3 py-2">Users</Link>
          </li>
          <li>
            <Link to="/" className="block bg-blue-500 hover:bg-blue-600 rounded px-3 py-2">Back to Home</Link>
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
