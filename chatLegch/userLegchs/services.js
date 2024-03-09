import {
    addUserDataAccess,
    deleteUserDataAccess,
    getUsersDataAccess,
    editUserDataAccess,
    editPasswordUserDataAccess
} from "./dataAccess.js";

import {hashPassword, checkPassword} from "../../utils/passwordUtils.js";
import UserModel from "./UserModel.js";
import {imageResize} from "../../utils/imageUtils.js";

export const getUsersService = async (id) => {
    const user = await getUsersDataAccess(id);

    if (!user) {
        return null
    }

    return user
};

export const addNewUserService = async (data) => {
    const existingUser = await UserModel.findOne({name: data.name});
    if (existingUser) {
        console.log('Username already exists');
        return null
    }

    if (data.photoFileUser) {
        const imgRes = await imageResize(data.photoFileUser, 200, 100);
        const imgResPost = await imageResize(data.photoFileUser, 200, 70);

        data = {...data, photoFileUser: imgRes, photoFileUserPost: imgResPost};
    }

    const hashedPassword = await hashPassword(data.password);

    const newUser = await addUserDataAccess({...data, password: hashedPassword});

    return newUser;
};

export const loginUserService = async (data) => {
    const existingUser = await UserModel.findOne({name: data.name});

    if (!existingUser) {
        console.log('User not found');
        return null
    }

    const isPasswordValid = await checkPassword(data.password, existingUser.password);

    if (!isPasswordValid) {
        console.log('Invalid password');
        return null
    }

    return existingUser;
};

export const deleteUserService = async (id) => {
    const deleteUser = await deleteUserDataAccess(id);

    return deleteUser;
};

export const editUserService = async (id, data) => {
    if (data.photoFileUser) {
        const imgRes = await imageResize(data.photoFileUser, 200, 100);
        const imgResPost = await imageResize(data.photoFileUser, 200, 70);

        data = {...data, photoFileUser: imgRes, photoFileUserPost: imgResPost};
    } else {
        data = {...data, photoFileUser: null, photoFileUserPost: null};
    }

    const editUser = await editUserDataAccess(id, data);

    return editUser;
};

export const editPasswordUserService = async (id, data) => {
    const existingUser = await UserModel.findById(id);

    if (!existingUser) {
        console.log('User not found');
        return null
    }

    const isPasswordValid = await checkPassword(data.currentPassword, existingUser.password);

    if (!isPasswordValid) {
        console.log('Invalid password');
        return null
    } else {
        const hashedNewPassword = await hashPassword(data.newPassword);
        const editUser = await editPasswordUserDataAccess(id, hashedNewPassword);
        return editUser;
    }
};