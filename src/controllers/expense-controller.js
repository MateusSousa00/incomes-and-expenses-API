import expenses from "../models/Expenses.js";

class ExpenseController {
  static getExpenses = (req, res) => {
    expenses.find((err, expenses) => {
      res.status(200).json(expenses);
    });
  };

  static getExpenseById = (req, res) => {
    const id = req.params.id;
    expenses.findById(id, (err, expenses) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - could not find Id.` });
      } else {
        res.status(200).send(expenses);
      }
    });
  };

  static inputExpense = (req, res) => {
    let expenses = new expenses(req.body);
    expenses.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - failed to input Expenses.` });
      } else {
        res.status(201).send(expenses.toJSON());
      }
    });
  };

  static updateExpense = (req, res) => {
    const id = req.params.id;
    expenses.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(200).send({ message: "Expenses updated sucessfully" });
      }
    });
  };

  static deleteExpense = (req, res) => {
    const id = req.params.id;
    expenses.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(200).send({ message: "Expenses deleted sucessfully" });
      }
    });
  };
}

export default ExpenseController;