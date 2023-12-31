const expr = require("express");
const errorHandler = require("./middleware/errorhandler");
const connectDB = require("./config/dbConnection");
const port = 3000;
const app = expr();

connectDB();
app.use(expr.json());

// this is the middleware of contactapp.js
app.use("/api/contact/", require("./routes/contactRoutes"));

app.use(errorHandler);
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    msg: "Page not found",
  });
})


// Listen for requests
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
