import { useState } from "react";
import Pet from "./Pet";

export default function App() {
  const [legs, setLegs] = useState(4); // Default value

  return (
    <div>
      <h1>PropTypes Examples</h1>
      <Pet animal={17} color={15} legs={legs} />

      <label>
        Modify Number of Legs:
        <input
          type="text"
          value={legs}
          onChange={(e) => setLegs(e.target.value)} // Incorrect type (string)
        />
      </label>
    </div>
  );
}
