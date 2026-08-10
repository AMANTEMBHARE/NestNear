const express = require("express");
const healthRoutes = require("./routes/health.routes");

const app = express();

app.use(healthRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});