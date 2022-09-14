import mongoose from "mongoose";

const incomeSchema = new mongoose.Schema({
  id: { type: String },
  description: { type: String, required: true },
  value: { type: Number, required: true },
  date: { type: Date, required: true },
});

const incomes = mongoose.model("incomes", incomeSchema);

export default incomes;
