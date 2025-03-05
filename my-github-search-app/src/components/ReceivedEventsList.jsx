import React from "react";

const ReceivedEventsList = ({ events }) => {
  if (!events || events.length === 0) return <p className="mt-4">No received events found.</p>;

  return (
    <div className="my-4">
      <h3 className="text-xl font-bold mb-2">Received Events</h3>
      <ul>
        {events.map((event, index) => (
          <li key={index} className="mb-2">
            <p>
              <strong>{event.type}</strong> at <em>{event.repo?.name}</em>
            </p>
            <p className="text-gray-600">{new Date(event.created_at).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReceivedEventsList;
