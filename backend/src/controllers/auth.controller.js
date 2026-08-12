const authService = require("../services/auth.service");


const register = async (req, res) => {
    const userData = req.body;

    const result = await authService.registerUser(userData);

    res.status(result.statusCode).json({
        success: result.success,
        message: result.message,
        data: result.data
    });

};

module.exports = {
    register
};

