import mongoose from "mongoose";
import userSchema from "./userSchema.js";

const UserModel = mongoose.model("userNews", userSchema, "userNews");

export default UserModel;