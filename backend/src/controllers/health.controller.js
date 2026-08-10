const healthService = require("../services/health.service");

const healthController = (req, res) => {
    const result = healthService.checkHealth();

    res.json(result);
};

module.exports = healthController;