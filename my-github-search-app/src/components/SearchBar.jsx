import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username);
      setUsername("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center mt-4"
    >
      <input
        type="text"
        placeholder="Search GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-r-lg hover:bg-blue-600 transition-colors"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
