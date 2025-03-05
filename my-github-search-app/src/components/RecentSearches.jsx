import React from "react";

const RecentSearches = ({ searches, onSelect }) => {
  if (!searches || searches.length === 0) return null;

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        Recent Searches
      </h3>
      <ul className="space-y-2">
        {searches.map((search, index) => (
          <li key={index}>
            <button
              onClick={() => onSelect(search)}
              className="text-blue-500 hover:underline"
            >
              {search}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentSearches;
