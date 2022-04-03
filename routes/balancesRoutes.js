import express from "express";

import { findBalance, getBalances, createBalance, deleteBalance, updateBalance } from "../controllers/balances.js";

const balancesRouter = express.Router();

balancesRouter
    .route("/")
    .get(getBalances)
    .post(createBalance);

balancesRouter
    .route("/:id")
    .get(findBalance)
    .post(deleteBalance)
    .patch(updateBalance);

export default balancesRouter;