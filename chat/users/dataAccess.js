import UserModel from "./UserModel.js";

export const getUsersDataAccess = async (id) => {
  const data = await UserModel.findById(id);

  return data;
};

export const addUserDataAccess = async (data) => {
  const newUser = await new UserModel(data).save();

  return newUser;
};

export const deleteUserDataAccess = async (id) => {
  const deletePost = await UserModel.findByIdAndDelete(id);

  return deletePost;
};

export const editUserDataAccess = async (id, data) => {
  await UserModel.findByIdAndUpdate(id, data);

  const editUser = await UserModel.findById(id);

  return editUser;
};

export const editPasswordUserDataAccess = async (id, hashedNewPassword) => {

  const updatedUser = await UserModel.findOneAndUpdate({ _id: id }, { password: hashedNewPassword }, { new: true });

  return updatedUser;
};
