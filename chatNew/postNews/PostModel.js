import mongoose from "mongoose";
import postSchema from "./postSchema.js";

const PostModel = mongoose.model("postNews", postSchema, "postNews");

export default PostModel;