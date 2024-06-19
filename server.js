const express = require("express");
const notFound = require("./middlewares/not-found");
const errorMiddleware = require("./middlewares/error-middleware");

const userRouter = require("./routes/user-route");
const app = express();

app.use("/register", (req, res) => {
  res.json({ message: "Register...." });
});

app.use("login", (req, res, next) => {
  res.json({ msg: "Successful Login" });
});
app.use("/users", userRouter);
app.use(notFound);
app.use(errorMiddleware);

const port = 8000;
app.listen(port, () => console.log("Server on ", port));
io;
