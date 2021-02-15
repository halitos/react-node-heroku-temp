import React, { useState, useEffect } from "react";
import "./App.css";
import ListItem from "./components/ListItem";

function App() {
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((data) => data.json())
      .then((data) => setNotes(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ListItem notes={notes} />
      </header>
    </div>
  );
}

export default App;
