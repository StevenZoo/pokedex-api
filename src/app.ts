import express from "express";
let api = require("./routes/api");

const app = express();
const PORT = 3000;

app.use("/api", api);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
