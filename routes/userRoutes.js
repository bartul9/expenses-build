import express from "express";

import { createUser, updateUser, getUser, loginUser, logoutUser } from "../controllers/user.js";

const usersRouter = express.Router();

usersRouter
    .route("/")
    .get(getUser)
    .post(createUser)
    .patch(updateUser);
    
usersRouter
    .route("/login")
    .post(loginUser);

usersRouter
    .route("/logout")
    .get(logoutUser);

export default usersRouter;