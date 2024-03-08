import PostModel from "./PostModel.js";

export const getPostsDataAccess = async () => {
  const data = await PostModel.find();

  return data;
};

export const addPostDataAccess = async (data) => {
  const newPost = await new PostModel(data).save();

  return newPost;
};

export const deletePostDataAccess = async (id) => {
  const deletePost = await PostModel.findByIdAndDelete(id);

  return deletePost;
};

export const editPostDataAccess = async (id, data) => {
  await PostModel.findByIdAndUpdate(id, data);

  const editPost = await PostModel.findById(id);

  return editPost;
};

export const editPostAvatarDataAccess = async (id, data) => {

  try {
    const editPost = await PostModel.updateMany({ userID: id }, { $set: { photoFileUserPost: data.photoFileUserPost } });

    return editPost;
  } catch (error) {
    console.error('Error during update:', error);
    throw error;
  }
};

export const deleteAllPostDataAccess = async (id) => {
  try {
    const deleteResult = await PostModel.deleteMany({ userID: id });

    return deleteResult;
  } catch (error) {
    console.error('Error during deletion:', error);
    throw error;
  }
};
