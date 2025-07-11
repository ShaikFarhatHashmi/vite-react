// src/components/Sidebar.jsx
//import React from "react";

const Sidebar = () => {
  return (
    <aside className="hidden md:block bg-gray-800 text-white  w-64 p-4 min-h-screen">
      <h2 className="text-xl font-bold mb-4">Sidebar</h2>
      <ul className="space-y-2">
        <li className="hover:text-blue-400 cursor-pointer">Dashboard</li>
        <li className="hover:text-blue-400 cursor-pointer">Settings</li>
        <li className="hover:text-blue-400 cursor-pointer">Profile</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
