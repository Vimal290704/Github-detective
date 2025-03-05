import React from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";

const detailOptions = [
  { key: "overview", label: "Overview" },
  { key: "repos", label: "Repositories" },
  { key: "followers", label: "Followers" },
  { key: "following", label: "Following" },
  { key: "gists", label: "Gists" },
  { key: "orgs", label: "Organizations" },
  { key: "events", label: "Events" },
  { key: "received_events", label: "Received Events" },
  { key: "starred", label: "Starred" },
  { key: "subscriptions", label: "Subscriptions" },
];

const UserPage = () => {
  const { username } = useParams();

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Details for {username}</h2>
      <nav className="flex flex-wrap gap-2 mb-4">
        {detailOptions.map((option) => (
          <NavLink
            key={option.key}
            to={option.key}
            className={({ isActive }) =>
              `px-3 py-2 rounded ${
                isActive ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
              }`
            }
          >
            {option.label}
          </NavLink>
        ))}
      </nav>
      <Outlet context={{ username }} />
    </div>
  );
};

export default UserPage;
