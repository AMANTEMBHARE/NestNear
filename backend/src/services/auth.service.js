const User = require("../models/user.model");
const bcrypt = require("bcrypt");


const registerUser = async (userData) => {
    const existingUser = await User.findOne({
        email: userData.email
    });

    if (existingUser) {
        return {
            success: false,
            statusCode: 409,
            message: "User with this email already exists",
            data: null
        };
    }
    const hashedPassword = await bcrypt.hash(userData.password, 10);


    const user = await User.create({
    name: userData.name,
    email: userData.email,
    password: hashedPassword,
    phone: userData.phone,
    role: "student"
    });

    return{
        success: true,
        statusCode: 201,
        message: "User registered successfully",
        data: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role
    }
    };

};

module.exports ={
    registerUser
};