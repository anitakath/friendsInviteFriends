const express = require("express");
const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

const app = express();
const port = 3000;

app.get("/users", async (req, res) => {
  try {
    const userRecords = await admin.auth().listUsers();
    res.json(userRecords.users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Error fetching users");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
