import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    text: {
        type: String,
        // required: true
    },
    userName: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    photoFileUserPost: String,
    photoFile: String
}, {timestamps: {createdAt: 'created_at'}});

export default postSchema;