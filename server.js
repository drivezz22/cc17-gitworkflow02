const express = require("express");
const notFound = require("./middlewares/not-found");
const app = express();

app.use(notFound);

const port = 8000;
app.listen(port, () => console.log("Server on ", port));
