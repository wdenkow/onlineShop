import express from "express";

const app = express();
const PORT = 3002;

app.get("/", (req, res) => {
  res.json({
    message: "hellow",
  });
});

app.listen(PORT, (req, res) => {
  console.log(`${PORT} listening`);
});
