import express from "express";

import { getExpenses, createExpense, deleteExpense, updateExpense, findExpense } from "../controllers/expenses.js";

const expensesRouter = express.Router();

expensesRouter
    .route("/")
    .get(getExpenses)
    .post(createExpense);
    
expensesRouter
    .route("/:id")
    .get(findExpense)
    .delete(deleteExpense)
    .patch(updateExpense);


export default expensesRouter;