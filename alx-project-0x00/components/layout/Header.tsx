import React from "react";

const accommodationTypes = [
  "Rooms",
  "Mansion",
  "Countryside",
  "Apartments",
  "Villas",
  "Cabins",
];

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-md py-4 px-8 flex flex-col md:flex-row items-center justify-between">
      {/* Logo */}
      <div className="flex items-center mb-2 md:mb-0">
        <img src="/globe.svg" alt="Logo" className="h-8 w-8 mr-2" />
        <span className="text-xl font-bold">StayFinder</span>
      </div>
      {/* Accommodation Types */}
      <nav className="flex space-x-4 mb-2 md:mb-0">
        {accommodationTypes.map((type) => (
          <button
            key={type}
            className="text-gray-700 hover:text-blue-600 font-medium px-2 py-1 rounded"
          >
            {type}
          </button>
        ))}
      </nav>
      {/* Search Bar */}
      <div className="flex items-center space-x-2 mb-2 md:mb-0">
        <input
          type="text"
          placeholder="Search destinations, properties..."
          className="border rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition">
          Search
        </button>
      </div>
      {/* Auth Buttons */}
      <div className="flex space-x-2">
        <button className="text-blue-600 border border-blue-600 px-3 py-1 rounded hover:bg-blue-50">
          Sign In
        </button>
        <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
