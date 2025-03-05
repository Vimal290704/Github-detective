import React from "react";

const OrgList = ({ orgs }) => {
  if (!orgs || orgs.length === 0) return <p className="mt-4">No organizations found.</p>;

  return (
    <div className="my-4">
      <h3 className="text-xl font-bold mb-2">Organizations</h3>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {orgs.map((org) => (
          <li key={org.id} className="flex items-center space-x-2">
            <img src={org.avatar_url} alt={org.login} className="w-10 h-10 rounded-full" />
            <span>{org.login}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrgList;
