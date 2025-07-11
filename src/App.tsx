// src/App.jsx
//import React from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

const App = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <Content />
    </div>
  );
};

export default App;
