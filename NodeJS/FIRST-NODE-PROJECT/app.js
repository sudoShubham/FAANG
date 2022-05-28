const http = require("http");
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/adminRoutes");
const userRouter = require("./routes/userRoutes");
const errorController = require("./controllers/error");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(userRouter);

app.use(errorController.get404Error);

const server = http.createServer(app);
server.listen(3000, () => {
  console.log("Server started on port: 3000");
});
