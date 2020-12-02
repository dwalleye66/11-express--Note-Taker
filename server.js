const express = require("express");
const routes = require("routes");

//server app at port 3306
const app = express();
const PORT = process.env.PORT || 3306;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// js files required
app.use("./routes/api-routes")(app);
app.use("./routes/html-routes")(app);

// use public folder files
app.use(express.static("public"));

//add listener
app.listen(PORT, function () {
    console.log("App listening on PORT; " + PORT);
});

