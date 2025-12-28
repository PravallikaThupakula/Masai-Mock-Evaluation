import { useState, useCallback } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FleetCard from "../components/FleetCard";

const Admin = () => {
  const [fleets, setFleets] = useState([]);

  const updateDriver = useCallback((id) => {
    const newDriver = prompt("Enter new driver name");
    if (!newDriver || newDriver.trim() === "") return;

    setFleets((prev) =>
      prev.map((fleet) =>
        fleet.id === id ? { ...fleet, driver: newDriver } : fleet
      )
    );
  }, []);

  const toggleAvailability = useCallback((id) => {
    setFleets((prev) =>
      prev.map((fleet) =>
        fleet.id === id
          ? {
              ...fleet,
              availability:
                fleet.availability === "Available"
                  ? "Unavailable"
                  : "Available",
            }
          : fleet
      )
    );
  }, []);

  const deleteFleet = useCallback((id) => {
    if (confirm("Are you sure you want to delete?")) {
      setFleets((prev) => prev.filter((fleet) => fleet.id !== id));
    }
  }, []);

  return (
    <div>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar fleets={fleets} setFleets={setFleets} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
          {fleets.map((fleet) => (
            <FleetCard
              key={fleet.id}
              fleet={fleet}
              onUpdateDriver={updateDriver}
              onToggleAvailability={toggleAvailability}
              onDelete={deleteFleet}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
