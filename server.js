const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config;

connectDb();
const app = express(); // handles the request and response from the server to the client

const port = process.env.PORT || 5000;
app.use(express.json()); // acts as a body oparser for express
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);
app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
