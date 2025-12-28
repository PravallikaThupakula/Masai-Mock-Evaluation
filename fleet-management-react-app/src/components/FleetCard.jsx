import React from "react";

const FleetCard = ({ fleet, onUpdateDriver, onToggleAvailability, onDelete }) => {
  console.log("Rendered:", fleet.regNo);

  return (
    <div>
      <img src="https://via.placeholder.com/150" alt="vehicle" />
      <p>{fleet.regNo}</p>
      <p>{fleet.category}</p>
      <p>{fleet.driver}</p>
      <p>{fleet.availability}</p>

      <button onClick={() => onUpdateDriver(fleet.id)}>Update Driver</button>
      <button onClick={() => onToggleAvailability(fleet.id)}>Toggle Availability</button>
      <button onClick={() => onDelete(fleet.id)}>Delete</button>
    </div>
  );
};

export default React.memo(FleetCard);
