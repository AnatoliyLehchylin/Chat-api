import mongoose from "mongoose";
import userSchema from "./userSchema.js";

const UserModel = mongoose.model("userLegchs", userSchema, "userLegchs");

export default UserModel;