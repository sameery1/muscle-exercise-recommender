import { useState, useEffect } from "react";

function App() {
  const [muscles, setMuscles] = useState([]);
  const [exercises, setExercises] = useState([]);

  const allMuscles = [
    "chest",
    "triceps",
    "shoulders",
    "back",
    "biceps",
    "quads",
    "hamstrings",
    "glutes",
    "calves",
    "abs"
  ];

  const toggleMuscle = (m) => {
    setMuscles((prev) =>
      prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]
    );
  };

  const fetchExercises = async () => {
    const query = muscles.join(",");
    const res = await fetch(`http://localhost:3001/exercises?muscles=${query}`);
    const data = await res.json();
    setExercises(data);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Muscle Exercise Recommender</h1>

      <h3>Select muscles:</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {allMuscles.map((m) => (
          <button
            key={m}
            onClick={() => toggleMuscle(m)}
            style={{
              padding: "10px 15px",
              borderRadius: "8px",
              border: "1px solid #333",
              background: muscles.includes(m) ? "#333" : "#fff",
              color: muscles.includes(m) ? "#fff" : "#000",
              cursor: "pointer",
            }}
          >
            {m}
          </button>
        ))}
      </div>

      <button
        onClick={fetchExercises}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#007bff",
          color: "#fff",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Get Exercises
      </button>

      <h3 style={{ marginTop: "30px" }}>Exercises:</h3>
      <ul>
        {exercises.map((ex, index) => (
          <li key={index}>
            <strong>{ex.name}</strong> ({ex.type}) — equipment: {ex.equipment}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
