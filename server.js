const express = require("express");
const routes = require("./routes");
const app = express();

//Declare Port
const PORT = process.env.PORT || 3306;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));
app.use(routes);

//Listening
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

