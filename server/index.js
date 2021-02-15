const path = require("path");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

// for build
app.use(express.static(path.resolve(__dirname, "../client/build")));

// GET reg to /api route

app.get("/api", (req, res) => {
  res.json({ msg: "Calisiyor mu?" });
});

// all other GET reqs
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
