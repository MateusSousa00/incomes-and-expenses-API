import express from "express";
import expenses from "./expenses-routes.js";
import incomes from "./incomes-routes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ title: "Challenge Backend September." });
  });
  app.use(express.json(), expenses, incomes);
};

export default routes;
