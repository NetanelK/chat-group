module.exports = (app) => {
    app.use("/api/v1", require("./api.routes"));
};
