import incomes from "../models/Income.js";

class IncomeController {
  static getIncomes = (req, res) => {
    incomes.find((err, incomes) => {
      res.status(200).json(incomes);
    });
  };

  static getIncomeById = (req, res) => {
    const id = req.params.id;
    incomes.findById(id, (err, incomes) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - could not find Id.` });
      } else {
        res.status(200).send(incomes);
      }
    });
  };

  static inputIncome = (req, res) => {
    let income = new incomes(req.body);
    income.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - failed to input Income.` });
      } else {
        res.status(201).send(income.toJSON());
      }
    });
  };

  static updateIncome = (req, res) => {
    const id = req.params.id;
    incomes.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(200).send({ message: "Income updated sucessfully" });
      }
    });
  };

  static deleteIncome = (req, res) => {
    const id = req.params.id;
    incomes.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(200).send({ message: "Income deleted sucessfully" });
      }
    });
  };
}

export default IncomeController;