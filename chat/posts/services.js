import {
    addPostDataAccess,
    deletePostDataAccess,
    getPostsDataAccess,
    editPostDataAccess,
    editPostAvatarDataAccess,
    deleteAllPostDataAccess
} from "./dataAccess.js";
import {imageResizePost} from "../../utils/imageUtils.js";
import PostModel from "./PostModel.js";

export const getProductService = async () => {
    const data = await getPostsDataAccess();

    return data;
};

export const addNewPostService = async (data) => {
    if (data.photoFile) {
        const imgRes = await imageResizePost(data.photoFile);
        data = { ...data, photoFile: imgRes };
    }
    const newPost = await addPostDataAccess(data);

    return newPost;
};

export const deletePostServices = async (id) => {
    const deletePost = await deletePostDataAccess(id);

    return deletePost;
};

export const editPostService = async (id, data) => {
    if (data.photoFile) {
        const imgRes = await imageResizePost(data.photoFile);
        data = { ...data, photoFile: imgRes };
    }

    const editPost = await editPostDataAccess(id, data);

    return editPost;
};

export const editPostAvatarService = async (id, data) => {
    try {
        const postsToUpdate = await PostModel.find({ userID: id});

        if (postsToUpdate.length > 0) {

            const editPost = await editPostAvatarDataAccess(id, data);

            return editPost;
        } else {
            console.log('Нет сообщений пользователей с id= ', id);
        }
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
};

export const deleteAllPostServices = async (id) => {

    try {
        const postsToDelete = await PostModel.find({ userID: id});

        if (postsToDelete.length > 0) {

            const deletePost = await deleteAllPostDataAccess(id);

            return deletePost;

        } else {
            console.log('Нет сообщений пользователей с id= ', id);
        }
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }

};
