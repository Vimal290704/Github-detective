import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
      <p>Try to refresh the page</p>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
