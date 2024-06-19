const express = require("express");
const notFound = require("./middlewares/not-found");
const userRouter = require("./routes/user-route");
const app = express();

app.use("/users", userRouter);
app.use(notFound);

const port = 8000;
app.listen(port, () => console.log("Server on ", port));
