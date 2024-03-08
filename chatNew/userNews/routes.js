import {Router} from "express";
import {
    addUserController,
    deleteUserController,
    getUsersController,
    editUserController,
    loginUserController,
    editPasswordUserController
} from "./controlls.js";

export const userNewsRouter = Router();

userNewsRouter.get("/:id", getUsersController);
userNewsRouter.post("/register", addUserController);
userNewsRouter.post("/login", loginUserController);
userNewsRouter.delete("/:id", deleteUserController);
userNewsRouter.put("/:id", editUserController);
userNewsRouter.post("/editPassword/:id", editPasswordUserController);
