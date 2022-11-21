const exspress = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = exspress();

mongoose.connect("mongodb+srv://ksonjik:ksonjik@cluster0.w6nhfki.mongodb.net/TestBase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

app.use(bodyParser.json());
app.use("/api", require("./api"))

app.listen(4000, () => {
    console.log("Server");
});