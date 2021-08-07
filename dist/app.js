"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var express = require("express");
var logger_1 = require("./logger");
var routes_1 = require("./routes");
var path = require('path');
var firebase_1 = require("firebase");
// firebase init goes here
var firebaseConfig = {
    apiKey: "AIzaSyDYF75qMG8ux1zMNShDVmGV2OqdwW5KyvI",
    authDomain: "weather-app-api-37247.firebaseapp.com",
    projectId: "weather-app-api-37247",
    storageBucket: "weather-app-api-37247.appspot.com",
    messagingSenderId: "110183422238",
    appId: "1:110183422238:web:09300d56de51f91249110f",
    measurementId: "G-BG25P5R9NB"
};
firebase_1.default.initializeApp(firebaseConfig);
var App = /** @class */ (function () {
    function App() {
        this.express = express();
        this.middleware();
        this.routes();
        this.logger = new logger_1.Logger();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(express.static(process.cwd() + "/weather-app/dist/"));
    };
    App.prototype.routes = function () {
        this.express.get("/", function (req, res, next) {
            res.sendFile(process.cwd() + "/weather-app/dist/index.html");
        });
        // user route
        this.express.use("/api", routes_1.default);
        // handle undefined routes
        this.express.use("*", function (req, res, next) {
            res.send("Make sure url is correct!");
        });
    };
    return App;
}());
exports.default = new App().express;
//# sourceMappingURL=app.js.map