const authService = require("../services/auth.service");

const register = async (req, res) => {
    const { name, email, password, phone } = req.body;

    const result = await authService.registerUser({
        name,
        email,
        password,
        phone
    });

    return res.status(result.statusCode).json({
        success: result.success,
        message: result.message,
        data: result.data
    });
};

const login = async (req, res) => {
    const { email, password } = req.body;

    const result = await authService.loginUser(email, password);

    return res.status(result.statusCode).json({
        success: result.success,
        message: result.message,
        data: result.data
    });
};

module.exports = {
    register,
    login
};