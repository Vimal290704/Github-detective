import React from "react";

const SubscriptionsList = ({ repos }) => {
  if (!repos || repos.length === 0)
    return <p className="mt-4">No subscriptions found.</p>;

  return (
    <div className="my-4">
      <h3 className="text-xl font-bold mb-2">Subscriptions</h3>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id} className="mb-2">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              {repo.name}
            </a>
            {repo.description && (
              <p className="text-gray-600">{repo.description}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubscriptionsList;
