import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

import usersRouter from "./routes/userRoutes.js";
import expensesRouter from "./routes/expensesRoutes.js";
import balancesRouter from "./routes/balancesRoutes.js";
import sessionCheck from "./middlewares/sessionCheck.js";

dotenv.config({ path: "./.env.production.local" });

const app = express();

// Do user authantication with email

const corsOptions = {
    origin:"https://monify-app-75e153959749.herokuapp.com", 
    credentials:true,
    optionSuccessStatus:200
};

// Middlewares
app.use(cookieParser());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors(corsOptions));
app.use(sessionCheck);

// Routes
app.use("/api/users", usersRouter);
app.use("/api/expenses", expensesRouter);
app.use("/api/balances", balancesRouter);

// Build config
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.resolve(__dirname, './client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

export default app;

