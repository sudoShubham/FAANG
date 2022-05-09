const http = require("http");
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const adminData = require("./routes/adminRoutes");
const userRouter = require("./routes/userRoutes");
const rootDir = require("./util/path");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.router);
app.use(userRouter);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

const server = http.createServer(app);
server.listen(3000, () => {
  console.log("Server started on port: 3000");
});
