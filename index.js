import express from 'express';

const PORT = 5050;
const app = express();

app.get("/", (req, res) => {
  res.send("This is my express app");
});

app.get("/me", (req, res) => {
  res.send("Hi I am Laith");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});