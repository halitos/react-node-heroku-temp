import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((data) => data.json())
      .then((data) => setData(data.msg));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{data ? data : "loading"}</p>
      </header>
    </div>
  );
}

export default App;
