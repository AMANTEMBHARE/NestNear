const testService = require("../services/test.service");

const testController = (req, res) => {
    const result = testService.processData(req.body);

    res.json(result);
};

module.exports = testController;