const PG = require("../models/pg.model");

const createPG = async (pgData, ownerId) => {
    const pg = await PG.create({
        name: pgData.name,
        location: pgData.location,
        availableRooms: pgData.availableRooms,
        totalRooms: pgData.totalRooms,
        rent: pgData.rent,
        contactNumber: pgData.contactNumber,
        description: pgData.description,
        ownerId: ownerId
    });

    return {
        success: true,
        statusCode: 201,
        message: "PG created successfully",
        data: pg
    };
};


const getPGs = async () => {
    const pgs = await PG.find();

    return {
        success: true,
        statusCode: 200,
        message: "PGs fetched successfully",
        data: pgs
    };
};


const getPGById = async (pgId) => {
    const pg = await PG.findById(pgId);

    if(!pg){
        return {
            success: false,
            statusCode: 404,
            message: "PG not found",
            data: null
        };
    }

    return {
        success: true,
        statusCode: 200,
        message: "PG fetched successfully",
        data: pg
    };
};


const updatePG = async (pgId, pgData, userId) => {
    const pg = await PG.findById(pgId);

    if(!pg){
        return{
            success: false,
            statusCode: 404,
            message: "PG not found",
            data: null
        };
    }

    if(pg.ownerId.toString() !== userId){
        return{
            success: false,
            statusCode: 403,
            message: "You can only update your own PG",
            data: null
        };

    }

    const updateData = {
        name: pgData.name,
        location: pgData.location,
        availableRooms: pgData.availableRooms,
        totalRooms: pgData.totalRooms,
        rent: pgData.rent,
        contactNumber: pgData.contactNumber,
        facilities: pgData.facilities,
        description: pgData.description
    };

    const updatedPG = await PG.findByIdAndUpdate(
        pgId, updateData,
        {
            new: true,
            runValidators: true
        }
    );


    return {
        success: true,
        statusCode: 200,
        message: "PG updated successfully",
        data: updatedPG
    };
};

const deletePG = async (pgId, userId) => {
    const pg = await PG.findById(pgId);

    if (!pg) {
        return {
            success: false,
            statusCode: 404,
            message: "PG not found",
            data: null
        };
    }

    if (pg.ownerId.toString() !== userId) {
        return {
            success: false,
            statusCode: 403,
            message: "You can only delete your own PG",
            data: null
        };
    }

    await PG.findByIdAndDelete(pgId);

    return {
        success: true,
        statusCode: 200,
        message: "PG deleted successfully",
        data: null
    };
};

module.exports = {
    createPG,
    getPGs,
    getPGById,
    updatePG,
    deletePG
};