import {Router} from "express";
import {
    addUserController,
    deleteUserController,
    getUsersController,
    editUserController,
    loginUserController,
    editPasswordUserController
} from "./controlls.js";

export const usersRouter = Router();

usersRouter.get("/:id", getUsersController);
usersRouter.post("/register", addUserController);
usersRouter.post("/login", loginUserController);
usersRouter.delete("/:id", deleteUserController);
usersRouter.put("/:id", editUserController);
usersRouter.post("/editPassword/:id", editPasswordUserController);
