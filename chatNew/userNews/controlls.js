import {
    addNewUserService,
    deleteUserService,
    getUsersService,
    editUserService,
    loginUserService,
    editPasswordUserService
} from "./services.js";

export const getUsersController = async (req, res) => {
    try {
        const data = await getUsersService(req.params.id);

        if (data === null) {
            res.status(404).json({ message: 'Username already exists' });
        } else {
            res.json({ data, status: 'successGET' });
        }

    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

export const addUserController = async (req, res) => {
    try {
        const data = await addNewUserService(req.body);

        if (data === null) {
            res.status(409).json({ message: 'Username already exists' });
        } else {
            res.json({ data, status: 'successPOST' });
        }

        // res.json({data, status: 'successPOST'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

export const loginUserController = async (req, res) => {
    try {
        const data = await loginUserService(req.body);

        if (data === null) {
            res.status(401).json({ message: 'User not found or Invalid password' });
        } else {
            res.json({ data, status: 'successPOST' });
        }

        // res.json({data, status: 'successPOST'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

export const deleteUserController = async (req, res) => {
    try {
        const data = await deleteUserService(req.params.id);

        if (!data) {
            res.status(404).json({message: "not found"});
            return;
        }

        res.json({data, status: 'successDELETE'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

export const editUserController = async (req, res) => {
    try {
        const data = await editUserService(req.params.id, req.body);

        res.json({data, status: 'successPUT'});

    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

export const editPasswordUserController = async (req, res) => {
    try {
        const data = await editPasswordUserService(req.params.id, req.body);

        if (data === null) {
            res.status(401).json({ message: 'User not found or Invalid password' });
        } else {
            res.json({ data, status: 'successEditPassword' });
        }

        // res.json({data, status: 'successPOST'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};