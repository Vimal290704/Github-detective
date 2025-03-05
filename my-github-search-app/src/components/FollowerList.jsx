import React from "react";

const FollowerList = ({ followers }) => {
  if (!followers || followers.length === 0)
    return <p className="mt-4">No followers found.</p>;

  return (
    <div className="my-4">
      <h3 className="text-xl font-bold mb-2">Followers</h3>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {followers.map((follower) => (
          <li key={follower.id} className="flex items-center space-x-2">
            <img
              src={follower.avatar_url}
              alt={follower.login}
              className="w-10 h-10 rounded-full"
            />
            <span>{follower.login}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowerList;
