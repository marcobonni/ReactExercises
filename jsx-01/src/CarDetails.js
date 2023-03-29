import React, { useState, useEffect } from "react";

function CarDetails({ initialData }) {
  const [model, setModel] = useState(initialData.model || "");
  const [year, setYear] = useState(initialData.year || "");
  const [color, setColor] = useState(initialData.color || "");

  useEffect(() => {
    setModel(initialData.model || "");
    setYear(initialData.year || "");
    setColor(initialData.color || "");
  }, [initialData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Model:
        <input type="text" value={model} onChange={(e) => setModel(e.target.value)} />
      </label>
      <br />
      <label>
        Year:
        <input type="number" value={year} onChange={(e) => setYear(e.target.value)} />
      </label>
      <br />
      <label>
        Color:
        <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CarDetails;
