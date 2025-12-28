import { useState } from "react";

const Sidebar = ({ fleets, setFleets }) => {
  const [form, setForm] = useState({
    regNo: "",
    category: "",
    driver: "",
    availability: "",
  });

  const handleAdd = () => {
    if (!form.regNo || !form.category || !form.driver || !form.availability) {
      alert("All fields required");
      return;
    }

    setFleets([
      ...fleets,
      { ...form, id: Date.now() },
    ]);

    setForm({
      regNo: "",
      category: "",
      driver: "",
      availability: "",
    });
  };

  return (
    <div>
      <h3>Add Fleet</h3>

      <input placeholder="Vehicle Reg No" value={form.regNo}
        onChange={(e) => setForm({ ...form, regNo: e.target.value })} />

      <select value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}>
        <option value="">Select Category</option>
        <option>Auto</option>
        <option>Car</option>
        <option>Truck</option>
        <option>Bus</option>
      </select>

      <input placeholder="Driver Name" value={form.driver}
        onChange={(e) => setForm({ ...form, driver: e.target.value })} />

      <select value={form.availability}
        onChange={(e) => setForm({ ...form, availability: e.target.value })}>
        <option value="">Availability</option>
        <option>Available</option>
        <option>Unavailable</option>
      </select>

      <button onClick={handleAdd}>Add Fleet</button>
    </div>
  );
};

export default Sidebar;
