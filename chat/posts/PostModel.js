import mongoose from "mongoose";
import postSchema from "./postSchema.js";

const PostModel = mongoose.model("post", postSchema);

export default PostModel;