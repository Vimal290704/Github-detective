import React from "react";

const GistList = ({ gists }) => {
  if (!gists || gists.length === 0) return <p className="mt-4">No gists found.</p>;

  return (
    <div className="my-4">
      <h3 className="text-xl font-bold mb-2">Gists</h3>
      <ul>
        {gists.map((gist) => (
          <li key={gist.id} className="mb-2">
            <a href={gist.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              {gist.description || "No description"}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GistList;
