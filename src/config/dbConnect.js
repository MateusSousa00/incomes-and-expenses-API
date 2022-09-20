import mongoose from "mongoose";

mongoose.connect('mongodb+srv://MateusSousa00:passwd123@challbackseptember.qiroawg.mongodb.net/?retryWrites=true&w=majority')

let db = mongoose.connection;

export default db;

