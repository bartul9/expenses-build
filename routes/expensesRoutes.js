import express from "express";

import { getExpenses, createExpense, deleteExpense, updateExpense, findExpense, getChartData } from "../controllers/expenses.js";

const expensesRouter = express.Router();

expensesRouter
    .route("/")
    .get(getExpenses)
    .post(createExpense);

expensesRouter
    .route("/chartData")
    .get(getChartData);
    
expensesRouter
    .route("/:id")
    .get(findExpense)
    .delete(deleteExpense)
    .patch(updateExpense);


export default expensesRouter;