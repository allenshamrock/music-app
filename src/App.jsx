import React from "react";
import Hero from "./componenets/main/Hero.jsx"
import Navbar from "./componenets/Navbar";

const App = () => {
  return (
    <div className="flex">
      <Navbar />

      <div className="flex-grow bg-gray-100">
        <header className="bg-gray-800 py-4 px-6">
          <Hero/>
        </header>
      </div>
    </div>
  );
};

export default App;
