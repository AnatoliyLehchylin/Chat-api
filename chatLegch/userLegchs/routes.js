import {Router} from "express";
import {
    addUserController,
    deleteUserController,
    getUsersController,
    editUserController,
    loginUserController,
    editPasswordUserController
} from "./controlls.js";

export const userLegchsRouter = Router();

userLegchsRouter.get("/:id", getUsersController);
userLegchsRouter.post("/register", addUserController);
userLegchsRouter.post("/login", loginUserController);
userLegchsRouter.delete("/:id", deleteUserController);
userLegchsRouter.put("/:id", editUserController);
userLegchsRouter.post("/editPassword/:id", editPasswordUserController);
