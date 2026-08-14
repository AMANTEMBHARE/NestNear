const mongoose = require("mongoose");
const pgSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        location: {
            address: {
                type: String,
                required: true,
                trim: true
            },
            city: {
                type: String,
                required: true,
                trim: true
            },

            latitude: {
                type: Number
            },

            longitude: {
                type: Number
            }
        },

        availableRooms: {
            type: Number,
            required: true,
            min: 0
        },

        totalRooms: {
            type: Number,
            required: true,
            min: 1
        },

        rent: {
            type: Number,
            required: true,
            min: 0
        },

        contactNumber: {
            type: String,
            required: true,
            min: 0
        },

        contactNumber: {
            type: String,
            required: true
        },

        facilities: {
            type: [String],
            trim: true
        },

        ownerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },

    {
        timestamps: true
    }
);

const PG = mongoose.model("PG", pgSchema);

module.exports = PG;