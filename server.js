import express from "express";
const app = express();

app.get("/", (_req, res) => {
  res.send("Hello from the Server");
});

app.listen(6969, () => {
  console.log("Server is running at port: 6969");
});
