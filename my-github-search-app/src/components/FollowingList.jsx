import React from "react";

const FollowingList = ({ following }) => {
  if (!following || following.length === 0) return <p className="mt-4">No following found.</p>;

  return (
    <div className="my-4">
      <h3 className="text-xl font-bold mb-2">Following</h3>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {following.map((user) => (
          <li key={user.id} className="flex items-center space-x-2">
            <img src={user.avatar_url} alt={user.login} className="w-10 h-10 rounded-full" />
            <span>{user.login}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowingList;
