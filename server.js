const express = require("express");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
connectDb();
const app = express();
const errorHandler = require("./middleware/errorHandler");

const port = 5001;

app.use(express.json()); // middleware to accept data from client and it can be used on server
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
