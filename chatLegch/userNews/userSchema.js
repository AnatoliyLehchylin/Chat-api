import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    photoFileUser: String,
    photoFileUserPost: String
}, {timestamps: {createdAt: 'created_at'}}); //timestamps - нові документи створюються с додатковим полем - дата створення


export default userSchema;