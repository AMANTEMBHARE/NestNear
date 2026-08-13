const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/jwt");


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


const loginUser = async (email, password) => {
    const user = await User.findOne({email});

    if(!user){
        return{
            success: false,
            statusCode: 401,
            message: "Invalid email or password",
            data: null
        };
    }

    const passwordMatched = await bcrypt.compare(
        password,
        user.password
    );

    if(!passwordMatched){
        return{
            success: false,
            statusCode: 401,
            message: "Invalid email or password",
            data: null
        };
    }

    const token = generateToken(user);
    return{
        success: true,
        statusCode: 200,
        message: "Login successful",
        data: {
            token
        }
    };
};

module.exports ={
    registerUser,
    loginUser
};