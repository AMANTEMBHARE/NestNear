require("dotenv").config();


const express = require("express");

const connectDB = require("./config/database");
const healthRoutes = require("./routes/health.routes");
const testRoutes = require("./routes/test.routes");
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");


const app = express();

app.use(express.json());

app.use(healthRoutes);
app.use(testRoutes);
app.use(authRoutes);
app.use(userRoutes);

const startServer = async () => {
    try {
        await connectDB();

        app.listen(process.env.PORT || 5000, () => {
            console.log(`Server running on port ${process.env.PORT || 5000}`);
        });
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error.message);
        process.exit(1);
    }
};

startServer();