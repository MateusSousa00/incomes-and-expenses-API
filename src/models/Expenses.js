import mongoose from "mongoose";

const expensesSchema = new mongoose.Schema({
  id: { type: String },
  description: { type: String, required: true },
  value: { type: Number, required: true },
  date: { type: Date, required: true },
});

const expenses = mongoose.model("expenses", expensesSchema);

export default expenses;
