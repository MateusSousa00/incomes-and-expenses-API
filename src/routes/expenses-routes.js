import express from "express";
import ExpenseController from "../controllers/expense-controller.js";

const router = express.Router();

router
  .get("/expenses", ExpenseController.getExpenses)
  .get("/expenses/:id", ExpenseController.getExpenseById)
  .post("/expenses", ExpenseController.inputExpense)
  .put("/expenses/:id", ExpenseController.updateExpense)
  .delete("/expenses/:id", ExpenseController.deleteExpense);

export default router;
