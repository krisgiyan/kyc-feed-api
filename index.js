const express = require("express");
const app = express();

const PORT = 8000;

// Define routes
app.get("/", (req, res) => {
    res.send("Welcome to the API!");
});

app.get("/users", (req, res) => {
    res.json([{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
