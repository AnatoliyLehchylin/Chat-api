import {Router} from "express";
import {
    addPostController,
    deletePostController,
    getPostsController,
    editPostController,
    editPostAvatarController,
    deleteAllPostController
} from "./controlls.js";

export const postLegchsRouter = (io) => {
    const router = Router();

    router.get("/", getPostsController);
    router.put("/editAvatar/:id", editPostAvatarController);
    router.delete("/deleteAllPost/:id", deleteAllPostController);
    router.post("/", (req, res) => addPostController(req, res, io));
    router.delete("/:id", (req, res) => deletePostController(req, res, io));
    router.put("/:id", (req, res) => editPostController(req, res, io));

    return router;
};