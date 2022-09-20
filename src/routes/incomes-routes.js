import express from "express";
import IncomeController from "../controllers/income-controller.js";

const router = express.Router();

router
  .get("/incomes", IncomeController.getIncomes)
  .get("/incomes/:id", IncomeController.getIncomeById)
  .post("/incomes", IncomeController.inputIncome)
  .put("/incomes/:id", IncomeController.updateIncome)
  .delete("/incomes/:id", IncomeController.deleteIncome);

export default router;
