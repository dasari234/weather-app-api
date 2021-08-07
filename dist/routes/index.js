"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var express = require("express");
var cors = require("cors");
var logger_1 = require("../logger");
var weather_1 = require("./weather");
var ipAddress_1 = require("./ipAddress");
var allowedOrigins = ['http://localhost:8080', 'http://localhost:4200', 'https://weather-app-client-166ce.web.app'];
var options = {
    origin: allowedOrigins
};
var Routes = /** @class */ (function () {
    function Routes() {
        this.express = express();
        this.middleware();
        this.routes();
        this.logger = new logger_1.Logger();
    }
    // Configure Express middleware.
    Routes.prototype.middleware = function () {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(cors(options));
    };
    Routes.prototype.routes = function () {
        // weather route
        this.express.use("/weather", weather_1.default);
        this.express.use("/ip", ipAddress_1.default);
    };
    return Routes;
}());
exports.default = new Routes().express;
//# sourceMappingURL=index.js.map