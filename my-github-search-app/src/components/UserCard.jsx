import React from "react";
import { useNavigate } from "react-router-dom";
import "tailwindcss";

const UserCard = ({ user }) => {
  const navigate = useNavigate();

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <div className="flex flex-col md:flex-row items-center border-b pb-6">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-32 h-32 rounded-full ring-4 ring-blue-200"
          />
          <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800">
              {user.name || user.login}
            </h2>
            <p className="text-lg text-gray-500">@{user.login}</p>
            {user.bio && <p className="mt-2 text-gray-700">{user.bio}</p>}
            <div className="mt-4 space-x-4">
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
              >
                View Profile
              </a>
              {user.blog && (
                <a
                  href={user.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
                >
                  Visit Blog
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <div>
            <span className="font-semibold">Company:</span>{" "}
            {user.company || "N/A"}
          </div>
          <div>
            <span className="font-semibold">Location:</span>{" "}
            {user.location || "N/A"}
          </div>
          <div>
            <span className="font-semibold">Email:</span> {user.email || "N/A"}
          </div>
          <div>
            <span className="font-semibold">Twitter:</span>{" "}
            {user.twitter_username ? `@${user.twitter_username}` : "N/A"}
          </div>
          <div>
            <span className="font-semibold">Followers:</span> {user.followers}
          </div>
          <div>
            <span className="font-semibold">Following:</span> {user.following}
          </div>
          <div>
            <span className="font-semibold">Public Repos:</span>{" "}
            {user.public_repos}
          </div>
          <div>
            <span className="font-semibold">Public Gists:</span>{" "}
            {user.public_gists}
          </div>
          <div>
            <span className="font-semibold">Created At:</span>{" "}
            {new Date(user.created_at).toLocaleDateString()}
          </div>
          <div>
            <span className="font-semibold">Updated At:</span>{" "}
            {new Date(user.updated_at).toLocaleDateString()}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Search Another User
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
