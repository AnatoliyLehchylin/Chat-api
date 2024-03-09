import {
    addNewPostService,
    deletePostServices,
    getProductService,
    editPostService,
    editPostAvatarService,
    deleteAllPostServices
} from "./services.js";

const chat = 'postNews';

export const getPostsController = async (req, res) => {
    try {
        const data = await getProductService();

        res.json({data, status: 'successGET'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

export const addPostController = async (req, res, io) => {
    try {
        const data = await addNewPostService(req.body);

        io.emit(`dataUpdated${chat}`, data);
        res.json({data, status: 'successPOST'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

export const deletePostController = async (req, res, io) => {
    try {
        const data = await deletePostServices(req.params.id);

        io.emit(`dataDelete${chat}`, data);
        res.json({data, status: 'successDELETE'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

export const editPostController = async (req, res, io) => {
    try {
        const data = await editPostService(req.params.id, req.body);
        io.emit(`dataEdit${chat}`, data);
        res.json({data, status: 'successPUT'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

export const editPostAvatarController = async (req, res) => {
    try {
        const data = await editPostAvatarService(req.params.id, req.body);
        res.json({data, status: 'successPUT'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

export const deleteAllPostController = async (req, res) => {
    try {
        const data = await deleteAllPostServices(req.params.id);

        if (!data) {
            res.status(404).json({message: "not found"});
            return;
        }

        res.json({data, status: 'successDELETE'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};