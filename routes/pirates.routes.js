const PiratesController = require("../controllers/pirates.controller");

module.exports = app => {
    app.get("/api", PiratesController.index);
    app.get("/api/:_id", PiratesController.show);
    app.post("/api", PiratesController.create);
    app.put("/api/:_id", PiratesController.update);
    app.delete("/api/:_id", PiratesController.delete);
}