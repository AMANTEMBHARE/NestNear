const express = require("express");
const healthRoutes = require("./routes/health.routes");
const testRoutes = require("./routes/test.routes");

const app = express();

app.use(express.json());

app.use(healthRoutes);
app.use(testRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});