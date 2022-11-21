const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FilmSchema = new Schema({
    name: String,
    GraduationYear: Number,
    price: Number
});



module.exports = mongoose.model('film', FilmSchema);