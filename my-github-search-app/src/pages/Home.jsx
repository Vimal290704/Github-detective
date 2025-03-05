import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar"; 
import RecentSearches from "../components/RecentSearches"; 

const Home = () => {
  const navigate = useNavigate();
  const [recentSearches, setRecentSearches] = useState([]);
  useEffect(() => {
    const storedSearches = localStorage.getItem("recentSearches");
    if (storedSearches) {
      setRecentSearches(JSON.parse(storedSearches));
    }
  }, []);

  const updateRecentSearches = (username) => {
    const updatedSearches = [
      username,
      ...recentSearches.filter((item) => item !== username),
    ].slice(0, 5);
    setRecentSearches(updatedSearches);
    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
  };

  const handleSearch = (username) => {
    if (!username) return;
    updateRecentSearches(username);
    navigate(`/user/${username}/overview`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold mb-4">
        GitHub User Search
      </h1>
      <SearchBar onSearch={handleSearch} />
      {recentSearches.length > 0 && (
        <RecentSearches searches={recentSearches} onSelect={handleSearch} />
      )}
    </div>
  );
};

export default Home;
