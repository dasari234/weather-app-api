"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var app_1 = require("./app");
var logger_1 = require("./logger");
var port = 3080;
app_1.default.set("port", port);
var server = http.createServer(app_1.default);
server.listen(port);
var logger = new logger_1.Logger();
server.on("listening", function () {
    var addr = server.address();
    var bind = (typeof addr === "string") ? "pipe " + addr : "port " + addr.port;
    logger.info("Listening on " + bind);
});
module.exports = app_1.default;
//# sourceMappingURL=index.js.map