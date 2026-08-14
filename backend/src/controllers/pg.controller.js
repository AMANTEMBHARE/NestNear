const pgService = require("../services/pg.service");

const createPG = async ( req, res) => {
    const pgData = req.body;
    const result = await pgService.createPG(
        pgData,
        req.user.userId
    );

    return res.status(result.statusCode).json({
        success: result.success,
        message: result.message,
        data: result.data
    });
};

const getPGs = async (req, res) => {
    const result = await pgService.getPGs();

    return res.status(result.statusCode).json({
        success: result.success,
        message: result.message,
        data: result.data
    });
};

const getPGById = async (req, res) => {
    const result = await pgService.getPGById(req.params.id);
    return res.status(result.statusCode).json({
        success: result.success,
        message: result.message,
        data: result.data
    });
};

const updatePG = async (req, res) => {
    const result = await pgService.updatePG(
        req.params.id,
        req.body,
        req.user.userId
    );
    return re.status(result.statusCode).json({
        success: result.success,
        message: result.message,
        data: result.data
    });
};


const deletePG = async (req, res) => {
    const result = await pgService.deletePG(
        req.params.id,
        req.user.userId
    );

    return res.status(result.statusCode).json({
        success: result.success,
        message: result.message,
        data: result.data
    });
};


module.exports = {
    createPG,
    getPGs,
    getPGById,
    updatePG,
    deletePG
};