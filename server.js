const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();
const db = require("./models")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/api-routes")(app);

db.sequelize.sync().then(function(){
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
});
});