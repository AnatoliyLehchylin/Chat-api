import mongoose from "mongoose";
import userSchema from "./userSchema.js";

const UserModel = mongoose.model("user", userSchema);

export default UserModel;