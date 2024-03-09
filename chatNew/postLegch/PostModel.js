import mongoose from "mongoose";
import postSchema from "./postSchema.js";

const PostModel = mongoose.model("postLegchs", postSchema, "postLegchs");

export default PostModel;