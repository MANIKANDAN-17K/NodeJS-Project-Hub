const express = require("express");
const cors = require("cors");

const postRoutes = require("./routes/postRoutes");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const notFound = require("./middleware/notFound");

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);
app.use(express.static("public"));

app.use("/api/posts",postRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(3000,()=>{
    console.log("server running on port 3k")
});